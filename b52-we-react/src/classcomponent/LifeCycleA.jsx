import React, { Component } from 'react'
import StateFull from './StateFull'
import StateLess from './StateLess'

export default class LifeCycleA extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: "Hello Everyone",
    }
    console.log("LifeCycleA constructor method")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps", state.content)
    return state.content
  }


  render() {
    console.log("LifeCycleA render")
    return (
      <div>
        {/* <StateFull /> */}
        <StateLess />
        {/* <h1>LifeCycleA</h1>         */}
      </div>
    )
  }


  componentDidMount() {
    console.log("LifeCycleA componentDidMount")
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

}

