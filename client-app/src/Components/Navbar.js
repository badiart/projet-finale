
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {NavDropdown,Nav,Container,Navbar} from "react-bootstrap"
import {logout} from "../JS/actions/user"
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
  <Container className='test-nav'>
    <Navbar.Brand href="#home" className="titre">Bik N3ich</Navbar.Brand>
    {/* <div >
  <img src="https://www.ontario.ca/sites/default/files/icon-volunteer.png" />
</div> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#"><Link to="/">Home</Link> </Nav.Link>
        <Nav.Link href="#about"><Link to ="/About">About</Link></Nav.Link>
        <Nav.Link href="#Shop"><Link to ="/Shop">Shop</Link></Nav.Link>
       
        <Nav.Link href="#Products"><Link to ="/Products">Products</Link></Nav.Link>
       
       
        <NavDropdown title="Donation" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#DonateMoney/3.1"><Link to ="/DonateMoney">Donate Money</Link> </NavDropdown.Item>
          <NavDropdown.Item href="#DonateProsthetics/3.2"><Link to ="/DonateProsthetics"> Donate Prosthetics</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#Contact"><Link to ="/Contact">Contact</Link></Nav.Link>
        {user&&isAuth?<Nav.Link href="#Contact"><Link to ="/Profil">Profil</Link></Nav.Link>:<Nav.Link href="#connexion"> <Link to="/connexion">Connexion</Link></Nav.Link>}
        {/* <Nav.Link href="#Admin"><Link to ="/Admin">Dashbord</Link></Nav.Link> */}
        {user && user.isAdmin?<Nav.Link href="#Admin"><Link to ="/Admin">Dashbord</Link></Nav.Link>:null}
        {user? <Nav.Link> <Button className="btn btn-warning" onClick={()=>{dispatch(logout())
            history.push("/");
            }}>logout</Button></Nav.Link>: null}
        {/* <form className="form-inline" style={{display:"flex",justifyContent:"left",justifyContent:"space-between"}}>
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{marginBlock:18}} />
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
</form> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>)}
    export default Navbar1
      