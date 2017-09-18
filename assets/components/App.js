import React, { Component } from 'react'
import If from './If'
import Loading from './Loading'
import Card from './Card'
import axios from 'axios'

import './base.css'

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
      <div>
        {/* <If test={this.state.isFetching}>
          <Loading />
        </If> */}
        <If test={true}>
          <div className="container">
            <Card data={this.state.data[0]} />
          </div>
        </If>
      </div>
    )
  }
}

export default App
