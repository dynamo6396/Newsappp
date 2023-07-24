import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps ={
    country:'in',
    category:'general',
    size:8
  }
  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string,
    size:PropTypes.number,
  }
  constructor(){
    super()
    console.log("hi this is constructor")
    this.state={
        articles:[],
        loading: false,
        page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=349e9845efec49b68c8f53f288e27ff5&page=1&pageSize=${this.props.size}`
    let data= await fetch(url);
    this.setState({loading:true})   
    let parseddata =  await data.json();
    console.log(parseddata)
    this.setState({articles : parseddata.articles,totalResults:parseddata.totalResults,loading:false})
  }
  handleprevious =async()=>{
       console.log("previous")
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=349e9845efec49b68c8f53f288e27ff5&pageSize=${this.props.size}&page=${this.state.page-1}`
       let data= await fetch(url);
       this.setState({loading:true}) 
       let parseddata =  await data.json();
       this.setState({articles : parseddata.articles,page:this.state.page-1,loading:false})
  }
  handlenext = async()=>{
       console.log("Next")
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=349e9845efec49b68c8f53f288e27ff5&pageSize=${this.props.size}&page=${this.state.page+1}`
      let data= await fetch(url);
      this.setState({loading:true}) 
      let parseddata =  await data.json();
      this.setState({articles : parseddata.articles,page:this.state.page+1,loading:false})
  }
  render() {
    console.log("render")
    return (
      <div className="container my-2 ">
        <h2  className='text-center my-4'>NewsMonkey - Top Headlines</h2>
          {this.state.loading&&<Spinner/>}
         <div className="row" >
         {!this.state.loading&&this.state.articles.map((element)=>{
            return <div  key={element.url}>
               {console.log(element.description)}
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />   
             </div>
         })}      
         </div>
         <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" onClick={this.handleprevious} className="btn btn-primary" > &larr;Previous</button>
            <button disabled={this.state.page >= this.state.totalResults/this.props.size} type="button" onClick={this.handlenext} className="btn btn-primary" >Next&rarr;</button>
         </div>
      </div>
      
    )
  }
}

export default News
