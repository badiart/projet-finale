import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Button, Card, Image } from 'semantic-ui-react'
import { deleteproduct, getproducts } from "../JS/actions/product"
import { toggletrue } from "../JS/actions/edit"
import { getproduct } from "../JS/actions/product"
import { Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap'
function Product1({product}) {
    const dispatch=useDispatch()
    return (
        <div>
           <div className="fullsc">
<Card style={{ width: '400px',height:'800px' }}>
  <Card.Img  style={{ width: '380px',height:'400px' } }variant="top" src={product.photo} />
  <Card.Body>
    <Card.Title style={{color:'black'}}>{product.name}</Card.Title>
    <Card.Text style={{color:'black'}}>{product.message}</Card.Text>
    <Card.Text style={{color:'black'}}>{product.email}</Card.Text>
    <Card.Text style={{color:'black'}}>{product.phonenumber}</Card.Text>
  {/* <Link to={location => ({ ...location, pathname: "/description" ,aboutProps:{name:movie.trailerlink,title:movie.title}})} ><Button> read more</Button></Link> */}
  <div className='ui two buttons'>
        <Link to={`/edit/${product._id}`}>
          <Button inverted color='green' onClick={()=>{dispatch(getproduct(product._id));
            dispatch(toggletrue())}}>
           Edit
          </Button>
          </Link>
          <Button inverted color='red' onClick={()=>dispatch(deleteproduct(product._id))}>
            Delete
          </Button>
        </div> 
  </Card.Body>
</Card>
        </div> 
        </div>
    )
}

export default Product1
