import React, { Component } from 'react'
import Loading from "../Pinwheel.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Loading} alt={"Loading"}/>
      </div>
    )
  }
}
