export const getcontact=()=> async(dispatch) =>{
    dispatch({type:GET_contact})
    
    try {
        let result= await axios.get("/contact");
    dispatch({type:GET_contact,payload:result.data.result})
    } catch (error) {
        dispatch({type:GET_contact_fail,payload:error})
    }
}
export const deletecontact=(id)=> async(dispatch)=>{
    try {
        let result= await axios.delete(`/contact/${id}`);
  
        dispatch(getcontact())
      
     } 
     catch (error) {
         console.log(error)
         dispatch({type:delete_contact_fail, payload:error})}
  }
  export const postcontact=(Contact)=>async(dispatch)=>{
    try {
      let result= await axios.post('/product/',product)  
      dispatch(getproducts())
    } catch (error) {
        console.log(error)
        dispatch({type:Post_product_fail,payload:error})
    }