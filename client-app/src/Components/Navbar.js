
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {NavDropdown,Nav,Container,Navbar} from "react-bootstrap"
import {logout} from "../JS/actions/user"
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import img1 from "../../src/bik n3ich (6).png"
import './Navbar.css'
const Navbar1 = () => {
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const isAdmin=useSelector(state =>state.userReducer.isAdmin)
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch();
  const history=useHistory();

      return (

      <div  id="navbar">
        <Navbar bg="dark" expand="lg">
  <Container  style={{marginLeft:"0px"}} className='test-nav'>
    <div >
  <img src={img1} style={{height:"80px",width:"150px"}} alt="logo"/>
</div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to="/">Home</Link> </Nav.Link>
        <Nav.Link ><Link to ="/About">About</Link></Nav.Link>
        <Nav.Link ><Link to ="/Shop">Shop</Link></Nav.Link>
       
        <Nav.Link ><Link to ="/Products">Products</Link></Nav.Link>
       
       
        <NavDropdown title="Donation" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#DonateMoney/3.1"><Link to ="/DonateMoney">Donate Money</Link> </NavDropdown.Item>
          <NavDropdown.Item href="#DonateProsthetics/3.2"><Link to ="/DonateProsthetics"> Donate Prosthetics</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link ><Link to ="/Contact">Contact</Link></Nav.Link>
        {user&&isAuth?<Nav.Link ><Link to ="/Profil">Profil</Link></Nav.Link>:<Nav.Link href="#connexion"> <Link to="/connexion">Connexion</Link></Nav.Link>}
      
        {user && user.isAdmin?<Nav.Link><Link to ="/Admin">Dashbord</Link></Nav.Link>:null}
        {user?  <Button className="btn btn-default"variant="light" onClick={()=>{dispatch(logout())
            history.push("/");
            }}>logout</Button>: null}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>)}
    export default Navbar1
      