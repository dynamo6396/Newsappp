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
   capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props)
    console.log("hi this is constructor")
    this.state={
        articles:[],
        loading: false,
        page:1
    }
    document.title=`${this.capital(this.props.category)} - NewsMonkey `
  }
  async updatefun(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=349e9845efec49b68c8f53f288e27ff5&pageSize=${this.props.size}&page=${this.state.page}`
    let data= await fetch(url);
    this.setState({loading:true})   
    let parseddata =  await data.json();
    this.setState({articles : parseddata.articles,totalResults:parseddata.totalResults,loading:false})
  }
  async componentDidMount(){
     this.updatefun()
  }
  handleprevious =async()=>{
       console.log("previous")
       this.setState({page:this.state.page-1})
       this.updatefun()
  }
  handlenext = async()=>{
       console.log("Next")
       this.setState({page:this.state.page+1})       
      this.updatefun()
  }
  render() {
    console.log("render")
    return (
      <div className="container my-2 ">
        <h2  className='text-center my-4'>NewsMonkey - Top  {this.capital(this.props.category)} Headlines</h2>
          {this.state.loading&&<Spinner/>}
         <div className="row" >
         {!this.state.loading&&this.state.articles.map((element)=>{
            return <div  key={element.url}>
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>   
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
