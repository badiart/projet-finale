
import React from 'react'
import { Link } from 'react-router-dom';
import {Button,Modal} from "react-bootstrap"
import {useState,useEffect} from "react"
import {edituser,user,getuser} from "../JS/actions/user"
import {useDispatch,useSelector} from  "react-redux"
function Editprofiladmin({one}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setName] = useState(one?one.name:null);
    const [lastname,setlastname] = useState(one?one.lastname:null);
    const [email,setemail] = useState(one?one.email:null);
    const [password,setpassword] = useState(one?one.password:null);
    const [imge, setimge] = useState(one?one.imge:null);
    useEffect(() => {
  dispatch(getuser())
    }, [])
    return (
    
        <div>
       <>
    <Button variant="light" onClick={handleShow}>Edit</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Name:<input  style={{border:"1px solid", width:"400px",marginTop:"20px"}} value={name}
          onChange={(e)=>setName(e.target.value)}/></div>
           <div>LastName:<input style={{border:"1px solid", width:"400px",marginTop:"20px"}} value={lastname}
          onChange={(e)=>setlastname(e.target.value)}/></div>
       <div>Email:<input style={{border:"1px solid", width:"400px",marginTop:"20px"}}  value={email} type="text"  onChange={(e)=>setemail(e.target.value)}/></div>
       <div>Password:<input style={{border:"1px solid", width:"400px",marginTop:"20px"}}  value={password} type="text"  onChange={(e)=>setpassword(e.target.value)}/></div>
   <div>Image:<input style={{border:"1px solid", width:"400px",marginTop:"20px"}}  value={imge} type="text"  onChange={(e)=>setimge(e.target.value)}/></div>

          </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{
          dispatch(edituser(one._id,{name,lastname,email,password,imge}));
          handleClose()}}>
         save changes   
        </Button>
      </Modal.Footer>
    </Modal>
  </>
        </div>
    )
}

export default Editprofiladmin
