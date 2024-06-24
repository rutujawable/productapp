import React from 'react'
import './Home.css'
import blogs from "./../../data"

import MovieCard from '../../components/ProductCard/ProductCard';

function Home() {

  console.log({blogs});
  return (
    <>
     <div className='cardconatainer'>
    {
     

    blogs.map((blogobject,i)=>{

      const {
        id,
        title,
        content,
        price,
        img,rating
        



      } = blogobject

      return(
       <MovieCard
          key={i}
          id={id}
          title={title}
          content={content}
          price={price}
          img={img}
          rating={rating}
          
       
       
       />
      )
        
      }





    )





    } 

</div>
    
    </>
  )
}

export default Home