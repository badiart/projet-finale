import { Get_product_load,Get_product_success,Get_product_fail,
    delete_product,Get_product,Post_product,Edit_product, delete_product_fail, Post_product_fail} from "../const/product";
import axios from "axios";
export const getproducts=()=> async(dispatch) =>{
    dispatch({type:Get_product_load})
    
    try {
        let result= await axios.get("/product");
    dispatch({type:Get_product_success,payload:result.data.result})
    } catch (error) {
        dispatch({type:Get_product_fail,payload:error})
    }
}


export const deleteproduct=(id)=> async(dispatch)=>{
  try {
      let result= await axios.delete(`/product/${id}`);

      dispatch(getproducts())
    
   } 
   catch (error) {
       console.log(error)
       dispatch({type:delete_product_fail, payload:error})}
}


export const getproduct=(id)=> async(dispatch)=>{
    try {
        let result= await axios.get(`/product/${id}`);
  
        dispatch({type:Get_product, payload:result.data.response})
     console.log(result.data)
     } 
     catch (error) {console.log(error)}
  }
  export const postproduct=(product)=>async(dispatch)=>{
      try {
        let result= await axios.post('/product/',product)  
        dispatch(getproducts())
      } catch (error) {
          console.log(error)
          dispatch({type:Post_product_fail,payload:error})
      }
     
  }
  export const editproduct =(id,product)=>async(dispatch)=>{
      try {
          let result=await axios.put(`/product/${id}`,product);
         
          dispatch({type:Edit_product,payload:result.data})
          dispatch(getproducts())
      } catch (error) {
          console.log(error)
      }

  }
 