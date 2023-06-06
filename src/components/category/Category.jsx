import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'

const Category = () => {
  return (
      <div className='category-ctn'>
          <Link className="category-card">Male</Link>
          <Link className="category-card">Female</Link>
          <Link className="category-card">Unisex</Link>
    </div>
  )
}

export default Category