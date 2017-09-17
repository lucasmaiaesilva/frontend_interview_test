import React, { Component } from 'react'
import If from './If'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios({
      method:'get',
      url:'https://api.mcmakler.de/v1/advertisements'
    })
    .then((res) => this.setState({ data: res.data.data}))
  }
  render() {
    console.log(this.state.data)
    return (
    <h1>
      Olá mundo!
    </h1>
    )
  }
}

export default App
