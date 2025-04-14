import React, { useEffect, useState } from 'react'
import './Popular.css'
import data_product from "../Assets/data"
import Item from '../Item/Item'

const Popular = () => {
  const[data_product ,setData_Product] =useState([])

  useEffect (()=>{
    fetch('https://e-commerce-backend-53cq.onrender.com/popularinwomen')
    .then((res)=> res.json())
    .then((data)=> setData_Product(data))
  },[])
  return (
    <div className='popular'>
        <h1>PUPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i) =>{
                return <Item key={i} id={item.id} name= {item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
    
  )
}

export default Popular
