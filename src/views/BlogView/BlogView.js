
import { useParams } from "react-router-dom"
import "./BlogView.css"
import blogs from "../../data"
import React from 'react'


 export default function BlogView ()
    {
        const {id} = useParams()

        const select = blogs.find((blogObject) =>{
            if (blogObject.id == id)
                {
                    return true
                }

                else{
                   return false
                }
            })

            console.log(select)

        return(
            <>
            
            <div className="cardview">
                <div>
            <h1>{select.title} </h1>
            <img src={select.img} className="img"></img>
            </div>

           <div className="content">
            {select.content}

            <div className="price">
                <b>price: <del>400₹ </del> &nbsp;{ select.price}₹</b>
            </div>

            <button className="btn"> order now</button>

           </div>




            </div>
           
            </>
           
        )
    }
  
   