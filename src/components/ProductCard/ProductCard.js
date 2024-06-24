 
 import './ProductCard.css'
 import blogs from '../../data';
 import {Link} from "react-router-dom";
import BlogView from "../../views/BlogView/BlogView"


 const imagestyle={
    height:"250px",
    width:"270px"
    

}

//   function MovieCard({ img,name,rating}){
//     const ratinginfo = rating>=4 ? "superhit💖" : "👍";
    
//     // const ratingword = rating>=4 ? "superhit💖" : "👍";
//       return(
//         <>
//         <div className="moviecard">
//         <img src={img} style={imagestyle}></img>
//         <h1 className="title">{name}</h1>
//         <button className="btn"> buy now</button><br></br>
//         <div className="rating">
//         <b >ratings:{rating}</b>
//         <span className="color">  { ratinginfo }</span>
//         </div>
// </div>
//  </>
//  )}

 function MovieCard({ img,name,rating,id,title}){
    const ratinginfo = rating>=4 ? "famous😍" : "😻";
    
    return(
        <>
        <Link  className="moviecard" to={`/BlogView/${id}`}>
        <img src={img} style={imagestyle}></img>
        <h1 className="title">{title}</h1>
        <button className="btn"> order now</button><br></br>
        <div className="rating">
        <b >ratings:{rating}</b>
        <span className="color">  { ratinginfo }</span>
        </div>
        
        </Link>
        
        
        </>

    )
    
}
export default MovieCard