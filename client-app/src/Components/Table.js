import React from 'react'
import { useSelector } from 'react-redux'
import Editprofiladmin from './Editprofiladmin'
import "./Table.css"
import {Button} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import {edituser,deleteuser} from "../JS/actions/user"
    const Table = ({one}) => {
   const user= useSelector(state => state.userReducer.user)
//    const isAdmin = useSelector(state => state.userReducer.user.isAdmin)
   const dispatch = useDispatch();
        return (  
            <div className="container mx-auto mt-4">
        <div className="row"  >
          <div className="col-md-4" >
            <div className="cardyyyy" style={{width: '18rem'}}>
              <img  style={{width:"100%",height:"300px"}}src={one.imge} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{one.name} {one.lastname} </h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">{one.lastname}</h6> */}
               <p className="card-text">{one.email}</p>
                <Editprofiladmin one={one}/>
                <Button  onClick={()=>{dispatch(deleteuser(one._id))}}>Delete </Button>
              </div>
            </div>
          </div> 
          </div>  
          </div> 
          
      
          
        )
    }
    
    export default Table
