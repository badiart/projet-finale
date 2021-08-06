import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { editproduct, getproducts, postproduct } from '../../JS/actions/product'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Add = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const [product, setproduct] = useState({name:"",adress:"",phonenumber:"",email:"",message:"",photo:null,username:user.name})
  const userReducer = useSelector(state => state.productReducer)
  const edit = useSelector(state => state.editReducer)

  console.log(userReducer);
  useEffect(() => {
    edit?setproduct(userReducer):setproduct({name:"",address:"",phonenumber:"",email:"",message:"",photo:null,username:user.name})
  }, [edit,userReducer])

  const handleChange=(e)=>{
    e.preventDefault();
    setproduct({...product,[e.target.name]:e.target.value })
  }

  
  const handleproduct=()=>{
    if(!edit){ dispatch(postproduct(product));}
    else{dispatch(editproduct(userReducer._id,product))}
  }
  return (
        <div>
  <Form>
    <Form.Field>
      <label>Add the product Name</label>
      <input value={product.name} placeholder='Name' name="name" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Add your address</label>
      <input  value={product.address} placeholder='Please enter your address' name="address" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Add your phonenumber</label>
      <input  value={product.phonenumber} placeholder='Please enter your phonenumber' name= "phonenumber"  onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Add your Email</label>
      <input  value={product.email} placeholder='Please enter your email' name= "email"  onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Add your story or please let a message</label>
      <input  value={product.message} placeholder='Please enter a message' name= "message"  onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Add the product photo
      </label>
      <input  value={product.photo} placeholder='Please enter the product photo' name= "photo"  onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Link to='/prostheticdevices'>
    <Button type='submit'onClick={handleproduct}>{edit ?"Edit" : "Save"}</Button>
    </Link>
    
  </Form>



        </div>
    )
}

export default Add
