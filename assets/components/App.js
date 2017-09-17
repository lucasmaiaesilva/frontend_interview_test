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
    .then(res => console.log(this.mountData(res.data.data)))
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
    <h1>
      Olá mundo!
    </h1>
    )
  }
}

export default App
