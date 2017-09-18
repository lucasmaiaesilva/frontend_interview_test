import React from 'react'
import './index.css'

const Card = ({ address, id, price, rooms, space, title, url }) => {
  console.log(price)
  return (
    <div className="card">
      <div className="card-header">
        <span className="btn-adv">
          mieten
        </span>
        <img className="thumb" src={url} />
      </div>
      <div className="card-body">
        <h1>
          {title}
        </h1>
        <div className="info">
          {address.postalCode} - {address.city} - {address.street}
        </div>
      </div>
      <div className="card-footer">
        <span className="price">
          {price.sellPrice} €
        </span>
        <span className="info">
          {rooms} Zimmer | ab {space} m2
        </span>
      </div>
    </div>
  )
}

export default Card
