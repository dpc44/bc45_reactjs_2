import React, { Component } from 'react'
import ShoeStore from './ShoeStore/ShoeStore'
import Modal from './HOC/Modal/Modal'


export default class App extends Component {
  render() {
    return (
      
      <div>
        {/* <Modal /> */}
        <ShoeStore/>

      </div>
    )
  }
}
