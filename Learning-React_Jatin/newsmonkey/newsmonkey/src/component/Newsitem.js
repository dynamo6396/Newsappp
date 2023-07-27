import React, { Component } from 'react'
//triple7charlie
export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      <div className='mb-3'  >
         <div className="roww " >
           <div className="image" >
             <img src={imageUrl?imageUrl: "https://cdn.zeebiz.com/sites/default/files/2023/07/20/252004-stocks-to-buy-55.jpg"} className="img-fluid rounded-start" alt="Re"/>
           </div>
            <div className="card-body "  >
               <h5 className="card-title">{title}...</h5>
               <p className="card-text">{description}...</p>
               <p className="card-text"><small className="text-body-secondary">By  {author?author:"Unknown"} </small></p>
               <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
       </div>
      )
    }
  }
  
  export default Newsitem
  
  //   <div className='mb-3'  >
  //   <div className="row g-0 " >
  //     <div className="col-md-4" >
  //       <img src={imageUrl?imageUrl: "https://cdn.zeebiz.com/sites/default/files/2023/07/20/252004-stocks-to-buy-55.jpg"} style={{maxWidth:"400px",borderRadius:"10px"}} className="img-fluid rounded-start" alt="Re"/>
  //     </div>
  //     <div className="col-md-8" >
  //       <div className="card-body "  >
  //         <h5 className="card-title">{title}...</h5>
  //         <p className="card-text">{description}...</p>
  //         <p className="card-text"><small className="text-body-secondary">By  {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
  //         <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  //       </div>
  //     </div>
  //   </div>
  // </div>