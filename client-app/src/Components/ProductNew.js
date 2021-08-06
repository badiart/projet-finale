import React,{useEffect} from 'react'
import "./ProductNew.css"
import Modalproduct from "./Modalproduct"
import { deleteproduct,editproduct, getproducts } from '../JS/actions/product'
import {useDispatch} from "react-redux"
import {Button} from "react-bootstrap"
function ProductNew({product}) {
    const dispatch = useDispatch()
    useEffect(() => {
     getproducts()
    }, [])
    return (
        <div style={{display:"flex",flexDirection:"row",marginBottom:"50px"}} >
       
            <div  className="badia" style={{height:"500px",width:"400px" ,marginBottom:"50px",marginLeft:"20px" }} className="card-sl">
              <div className="card-image" >
                <img src={product.photo}/>
              </div>
              <a className="card-action" href="#"><i className="fa fa-heart" /></a>
              <div className="card-heading">
               {product.name}
              </div>
              <div className="card-text">
               {product.message}
              </div>
              <div className="card-text">
               {product.username}
              </div>
              <div className="card-text">
               {product.phonenumber}
              </div>
              <div  className="card-button"  style={{display:"flex",flexWrap:"wrap"}}>
                <div>
              <a className="aa" href="#" > <Modalproduct product={product}/></a></div>
            <div style={{marginTop:"1px",boxSizing:"25px"}}><Button variant="btn btn-danger" onClick={()=>{dispatch(deleteproduct(product._id))}}>Delete</Button></div>
            {/* <button onClick={()=>{dispatch(editproduct(product._id))}} >Edit</button> */}
            {/* <Modalproduct/> */}</div>
            </div>
          </div>
        
    )
}

export default ProductNew
