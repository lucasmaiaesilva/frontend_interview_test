import React from 'react'
import './index.css'

const Card = props => (
  <div className="card">
    <div className="card-header">
      <span className="btn-adv">
        mieten
      </span>
      <img className="thumb" src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/57337de18ffd7cbd368b46d2_variant_asset57d179e502122_inventoryM.jpg" />
    </div>
    <div className="card-body">
      <h1>
        2-Zimmer Wohnung in Top-Lage Berlin-Mitte / Büro möglich
      </h1>
      <div className="info">
        09130 - city - street
      </div>
    </div>
    <div className="card-footer">
      <span className="price">
        1.954 e
      </span>
      <span className="info">
        3 Zimmer | ab 35m
      </span>
    </div>
  </div>
)

export default Card
