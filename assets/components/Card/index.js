import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Card = ({ address, id, price, rooms, space, title, url }) => {
  return (
    <div key={item.id} className="card">
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

Card.propTypes = {
  address: PropTypes.object.isRequired,
  id: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  rooms: PropTypes.number.isRequired,
  space: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Card
