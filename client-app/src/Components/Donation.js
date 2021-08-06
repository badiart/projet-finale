import React from 'react'
import {useEffect}from "react";
import {useDispatch} from "react-redux";
import Add from "../../src/Components/product/Add"
import { Button } from 'semantic-ui-react';
import { togglefalse } from '../JS/actions/edit';
import { current } from "../JS/actions/user";
import { Link } from 'react-router-dom';
const Donation = () => {
    const dispatch = useDispatch();
  useEffect(() => {
  dispatch(current());
  },[])
    return (
        <div>
<h1>this is the Donation page</h1>
<Button inverted color='blue' onClick={()=>dispatch(togglefalse())}><Link to="/add"> Add product</Link></Button>
<Add/>
        </div>
    )
}

export default Donation
