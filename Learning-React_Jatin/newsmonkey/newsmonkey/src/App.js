import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";  
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  // { this.cat.map((element)=>{
  //   {console.log(`/${element}`)};
  //     return <Route exact path={`/${element}`}element={<News  size={5} category={element} country={'in'}/>}/>
  //   })}
  // cat=[
  //   "business",
  //   "entertainment",
  //   "general",
  //   "health",
  //   "science",
  //   "sports",
  //   "technology"
  // ]

  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (  
      <div >
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <News size={5} category={'general'} country={'in'}></News> */}
        <Routes>
            <Route  path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="home" size={20} category="general" country='in'/>}/>
            <Route  path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" size={20} category="general" country='in'/>}/>
            <Route  path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" size={20} category="business" country='in'/>}/>
            <Route  path="/entertainment"element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" size={20} category="entertainment"country='in'/>}/>
            <Route  path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" size={20} category="health" country='in'/>}/>
            <Route  path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" size={20} category="science" country='in'/>}/>
            <Route  path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" size={20} category="sports" country='in'/>}/>
            <Route  path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" size={20} category="technology" country='in'/>}/>
        </Routes>
      </Router>
     </div>
    )
  }
}
