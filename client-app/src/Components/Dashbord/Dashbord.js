import React,{useEffect} from 'react'
 import {useDispatch} from "react-redux"
 import { useHistory } from 'react-router-dom';
 import { logout } from '../../JS/actions/user';
 import { useSelector } from 'react-redux';
 import {Button} from "react-bootstrap"
 import Editprofil from '../Editprofil';
 import {edituser,getuser} from "../../JS/actions/user"
 import './Dashbord.css'
 import Table from "../../Components/Table"
const Dashbord = () => {
const dispatch = useDispatch();

// console.log(user,loadUser)

 const history=useHistory();
 const user = useSelector(state => state.userReducer.user)
 const loadUser = useSelector(state => state.userReducer.loadUser);
const users = useSelector(state => state.userReducer.users)
useEffect(() => {
  dispatch(getuser())
 }, [loadUser])
    return (
        <div className="bodyda">
            <div>
           <Editprofil user={user}/>

        </div>
        <div  style={{marginRight:"90px"}}>
          <div className="container">
  <div className="card-wrapper">
    <div className="card" >
      <div className="card-image" style={{width:"100%",marginTop:"2px"}}> 
      {user? 
        <img src={user.imge} alt="profile one"  />:null}
      </div>
      <ul className="social-icons">
        <li>
          <a href>
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-dribbble" />
          </a>
        </li>
      </ul>
      <div className="details"> {user?
        <h2>{user.name}</h2> :null}
          <br />
          <span className="job-title">{user?
          <h2>{user.email}</h2>:null}</span>

      </div>
    </div>
  </div>{/* end box wrapper */} 
  
</div>{/* END container */}


</div>
<div className='dashboard_user' style={{marginRight:"40px"}}>
{ users?
users.map(el=><Table  key={el._id} one={el}/>):<h2>loading</h2>}
        </div>
        </div>
    )
}

export default Dashbord

