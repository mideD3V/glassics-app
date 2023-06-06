import React from 'react'
import './card.css'
import Glass3 from '../../assets/glass3.png'
import Glass2 from '../../assets/glass6.png'
import { Link } from 'react-router-dom'

const Card = () => {
  const addcartbtn = React.useState('Add to Carts')
  return (
    <>
      <div className="card-ctn">
        <Link to='/product'>
          <div className="card-img">
            <img src={Glass2} alt="" />
          </div>
        </Link>
        <Link to="/" className="title">
          Retro glass for male and female. All colors available...
        </Link>

        <div className="price-cart">
          <p className="price">#1,500</p>
          <Link to="/account">
            <button className="add2cart">{addcartbtn[0]}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card