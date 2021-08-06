import React from 'react'
import { Link } from 'react-router-dom';
import {Button,Modal} from "react-bootstrap"
import {useState} from "react"
import {editproduct, postproduct} from "../JS/actions/product"
import {useDispatch} from  "react-redux"
function Modalproduct({product}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState(product.name)
    const [email, setEmail] = useState(product.email)
    const [address, setAddress] = useState(product.address)
    const [phonenumber, setPhonenumber] = useState(product.phonenumber)
    const [message, setMessage] = useState(product.message)
    const [photo, setphoto] = useState(product.photo)
    const [username, setusername] = useState(product.username)
    return (
      <>
    
        <Button variant="light" onClick={handleShow}>Edit</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div><input style={{border:"1px solid", width:"400px",marginTop:"20px"}} value={name}
              onChange={(e)=>setName(e.target.value)}/></div>
           <div><input style={{border:"1px solid", width:"400px",marginTop:"20px"}}  value={email} type="text"  onChange={(e)=>setEmail(e.target.value)}/></div>
           <div><input style={{border:"1px solid", width:"400px",marginTop:"20px"}} type="text"   value={address} onChange={(e)=>setAddress(e.target.value)}/></div>
       <div><input  style={{border:"1px solid", width:"400px",marginTop:"20px"}}  value={phonenumber} type="text" onChange={(e)=>setPhonenumber(e.target.value)} /> </div>  
       <div><input style={{border:"1px solid", width:"400px", marginTop:"20px"}}  value={message} type="text"  onChange={(e)=>setMessage(e.target.value)}/></div>
       <div><input style={{border:"1px solid", width:"400px",marginTop:"20px"}}  value={photo} type="text"  onChange={(e)=>setphoto(e.target.value)}/></div>

              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              dispatch(editproduct(product._id,{name,email,address,phonenumber,message,photo,username}));
              handleClose()}}>
             save changes   
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Modalproduct;