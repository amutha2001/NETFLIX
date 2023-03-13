import React from 'react'
import Movies from "./Movies.json"
import CardItems from './Card/CardItems'
import "./Products.css"

const Products = () => {
  console.log("Movies",Movies)
  return (
    <> 
    <div className='container'>
      <h1>Recommended Movies</h1>
        <div className='movies'>
            
            
            {Movies?.map((movie,index)=>(
            <CardItems movie={movie} key={index}/>
          ))}
        
        </div>
    </div>
      
    </>
    
  )
}

export default Products
