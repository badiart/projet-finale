import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteproduct, getproducts } from '../../JS/actions/product'
import { toggletrue } from '../../JS/actions/edit'
import { getproduct } from '../../JS/actions/product'
const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div style={{ display: "flex", flexDirection: "row" }} >
      <Card.Group style={{ display: "flex", flexDirection: "column" }} >
        <Card.Content style={{ width: 290, height: 200, marginLeft: 6, marginBottom: -9 }}>
          <Image
            floated='right'
            size='mini'
            src={product.photo}
            style={{ width: 290, height: 200, marginLeft: 20, marginBottom: -12 }}
          />
        </Card.Content>
        <Card >

          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.address}</Card.Meta>
          <Card.Meta>{product.email}</Card.Meta>
          <Card.Meta>{product.phonenumber}</Card.Meta>
          <Card.Description>
            <strong>{product.message}</strong>
          </Card.Description>

          <Card.Content extra>
            <div className='ui two buttons'>
              <Link to={`/edit/${product._id}`}>
                <Button inverted color='green' onClick={() => {
                  dispatch(getproduct(product._id));
                  dispatch(toggletrue())
                }}>
                  Edit
                </Button>
              </Link>
              <Button inverted color='red' onClick={() => dispatch(deleteproduct(product._id))}>
                Delete
              </Button>
            </div>
          </Card.Content>

        </Card>
      </Card.Group>
    </div>
  )
}

export default Product