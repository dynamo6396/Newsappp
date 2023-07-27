import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps ={
    country:'in',
    category:'general',
    size:10
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
        page:1,
        totalResults:0
    }
    document.title=`${this.capital(this.props.category)} - NewsMonkey `
  }
  updatefun = async ()=>{
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.size}&page=${this.state.page}`
    this.setState({loading:true})   
    let data= await fetch(url);    
    this.props.setProgress(50)
    let parseddata =  await data.json();    
    this.props.setProgress(70)
    this.setState({articles : parseddata.articles,totalResults:parseddata.totalResults,loading:false})    
    this.props.setProgress(100)
  }
   fetchMoreData = async ()=>{
    this.state.page+=1;
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.size}&page=${this.state.page}`
    let data= await fetch(url);
    // this.setState({loading:true})   
    let parseddata =  await data.json();
    console.log(parseddata)
    this.setState({articles : this.state.articles.concat(parseddata.articles),loading:false})
  }
  componentDidMount=async()=>{
    this.updatefun()
  }
  render() {
    console.log("render")
    return (
      <>
          <h2  className='text-center my-4'>NewsMonkey - Top  {this.capital(this.props.category)} Headlines</h2>
            {this.state.loading&&<Spinner/>}
            {/* {console.log(this.state.articles)} */}
            {console.log(this.state.articles.length,this.state.totalResults)}
            <InfiniteScroll dataLength={this.state.articles.length} hasMore={this.state.articles.length!=this.state.totalResults} next={this.fetchMoreData} loader={<Spinner/>}>
            <div className="container my-2 ">
              <div className="row" >
                {this.state.articles.map((element)=>{
                    return <div  key={element.url}>
                      <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>   
                    </div>
                })}      
              </div>
           </div>
          </InfiniteScroll>
       </>
      )
    }
}

export default News



  // next and previous buttons code 

  // handleprevious =async()=>{
  //      console.log("previous")
  //      this.setState({page:this.state.page-1})
  //      this.updatefun()
  // }

  // handlenext = async()=>{
  //      console.log("Next")
  //      this.setState({page:this.state.page+1})       
  //     this.updatefun()
  // }

{/* <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" onClick={this.handleprevious} className="btn btn-primary" > &larr;Previous</button>
    <button disabled={this.state.page >= this.state.totalResults/this.props.size} type="button" onClick={this.handlenext} className="btn btn-primary" >Next&rarr;</button>
</div> */}