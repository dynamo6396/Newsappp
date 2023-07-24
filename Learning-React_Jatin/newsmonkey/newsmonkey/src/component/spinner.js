import React, { Component } from 'react'
import loader from './loader.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} style={{height:"100px"}} alt="Reloading" />
      </div>
    )
  }
}

export default spinner

