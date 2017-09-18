import React, { Component } from 'react'
import If from './If'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isFetching: true
    }
  }
  componentDidMount() {
    axios({
      method:'get',
      url:'https://api.mcmakler.de/v1/advertisements'
    })
    .then(res => this.setState({ data: this.mountData(res.data.data), isFetching: false }))
  }
  mountData(obj) {
    return obj.splice(0, 10).map(house => this.customizeAdv(house))
  }
  customizeAdv(item) {
    const obj = {
      id: item._id,
      title: item.title,
      price: item.advertisementPrice,
      address: item.realestateSummary.address,
      rooms: item.realestateSummary.numberOfRooms,
      space: item.realestateSummary.space,
      url: item.advertisementAssets[0].advertisementThumbnails.inventory_m.url
    }
    return obj
  }
  render() {
    console.log(this.state.data)
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <If test={this.state.isFetching}>
          <h1>Loading ...</h1>
        </If>
        <If test={!this.state.isFetching}>
          <h1>cards</h1>
        </If>
      </div>
    )
  }
}

export default App
