import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  // { this.cat.map((element)=>{
  //   {console.log(`/${element}`)};
  //     <Route exact path={`/${element}`}element={<News  size={5} category={element} country={'in'}/>}/>
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
  render() {
    return (
      <div >
      <Router>
        <Navbar />
        {/* <News size={5} category={'general'} country={'in'}></News> */}
        <Routes>
            <Route  path="/" element={<News key="home" size={20} category="general" country='in'/>}/>
            <Route  path="/general" element={<News key="general" size={20} category="general" country='in'/>}/>
            <Route  path="/business" element={<News key="business" size={20} category="business" country='in'/>}/>
            <Route  path="/entertainment"element={<News key="entertainment" size={20} category="entertainment"country='in'/>}/>
            <Route  path="/health" element={<News key="health" size={20} category="health" country='in'/>}/>
            <Route  path="/science" element={<News key="science" size={20} category="science" country='in'/>}/>
            <Route  path="/sports" element={<News key="sports" size={20} category="sports" country='in'/>}/>
            <Route  path="/technology" element={<News key="technology" size={20} category="technology" country='in'/>}/>
        </Routes>
      </Router>
     </div>
    )
  }
}
