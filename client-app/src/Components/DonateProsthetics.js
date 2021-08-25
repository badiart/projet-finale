
import React,{useEffect}  from 'react'
import { postproduct } from "../JS/actions/product"
import {useDispatch,useSelector} from 'react-redux'

import Add from './product/Add'
const DonateProsthetics = () => {
  const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const loadproduct = useSelector(state => state.productReducer.loadproduct);
     console.log(products,loadproduct)
    useEffect(() => {
        dispatch (postproduct());
    }, []);
    return (
        <div style={{backgroundImage: `url('https://html.sammy-codes.com/images/background.jpg')`}}>
          <h1 style={{fontFamily:"Dancing Script ,cursive"}}>Donate Prosthetics</h1>  
  <div  style={{dispaly:"flex",flexWrap:"wrap", flexDirection:"row",justifyContent:"space-around",width:"700px",height:"900px",marginLeft:"500px"}}>
{/* { loadproduct?<h2>loading</h2>
:products.map(el=><Add key={el._id} product={el}/>)} */}

  <Add/>
 </div>


        </div>
    )
}

export default DonateProsthetics
