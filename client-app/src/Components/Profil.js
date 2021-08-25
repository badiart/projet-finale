import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {current, edituser} from "../JS/actions/user"
import { useEffect } from 'react';
import Editprofil from './Editprofil';
import {Button} from "react-bootstrap"
import "./Profil.css"
import ProductNew from './ProductNew';
import {getproducts}  from "../JS/actions/product"
const Profil = () => {
const dispatch = useDispatch()
const user= useSelector(state => state.userReducer.user)
const product = useSelector(state => state.productReducer.product)
const products = useSelector(state => state.productReducer.products)
useEffect(() => {
 dispatch(getproducts())
 dispatch(current())
}, [])
    return (
        <div style={{width:"100%" ,padding:"0px",backgroundColor:"black"}} >
            <div >
  <div className="col-md-5 mx-auto" className="ayoub">
    {/* Profile widget */}
    <div className="bg-white shadow rounded overflow-hidden">
      <div className="px-4 pt-0 pb-4 cover">
        <div className="media align-items-end profile-head">
          <div className="profile mr-3">
          <Editprofil user={user}/> 
          {user?
            <img src={user.imge} alt="..." width={250} height={250} className="rounded mb-2 img-thumbnail" />
            : <h1>loading</h1>}
             </div>
          
          <div className="media-body mb-5 text-white">
          {user?  <h4  style={{fontFamily:"cursive",fontSize:"40px"}}className="mt-0 mb-0">{user.name}</h4>:"loading"}
          {user?<h4 style={{fontFamily:"cursive",fontSize:"40px"}} className="mt-0 mb-0">{user.lastname}</h4>:"loading"}
          {user?<p style={{fontSize:"20px"}} className="small mb-4"> <i className="fas fa-map-marker-alt mr-2" />{user.email}</p>:"loading"}
          </div>
        </div>
      </div>
      <div className="bg-light p-4 d-flex justify-content-end text-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1" />Photos</small>
          </li>
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Followers</small>
          </li>
          <li className="list-inline-item">
            <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Following</small>
          </li>
        </ul>
      </div>
      <div className="px-4 py-3">
        <h5 className="mb-0">About</h5>
        <div className="p-4 rounded shadow-sm bg-light">
          <p className="font-italic mb-0">my donation</p>
          
        </div>
      </div>
      <div className="py-4 px-4" >
        {/* <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">Recent photos</h5><a href="#" className="btn btn-link text-muted">Show all</a>
        </div> */}
        <div className="row" style={{display:"flex",flexDirection:"row",width:"100%"}}>
          <div className="col-lg-6 mb-2 pr-lg-1" className="iheb">
        
            {products.filter(el=>el.username==user.name).map(el=><ProductNew product={el}/>)} </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Profil
