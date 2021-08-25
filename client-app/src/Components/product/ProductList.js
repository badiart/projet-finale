import React,{useEffect}  from 'react'
import { getproducts } from '../../JS/actions/product'
import {useDispatch,useSelector} from 'react-redux'
import ProductNew from "../ProductNew"
const ProductList =() => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const loadproduct = useSelector(state => state.productReducer.loadproduct);
     console.log(products,loadproduct)
    useEffect(() => {
        dispatch (getproducts());
    }, []);
    return (
  <div className="prod-list"  >
    
{ loadproduct?<h2>loading</h2>
:products.map(el=>< ProductNew key={el._id} product={el}/>)}

 </div>
    )
};

export default ProductList