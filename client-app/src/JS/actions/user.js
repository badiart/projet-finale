import {
    LOAD_USER,
    REGISTER_USER,
    LOGIN_USER,
    FAIL_USER,
    LOGOUT_USER,
    CURRENT_USER,
    EDIT_USER_fail,
    EDIT_USER,
    GET_USER,
    GET_USER_fail,
    DELETE_USER_fail,
    GET_ONE_USER,
    GET_ONE_USER_fail,
    DELETE_USER
  } from "../const/user";
  
  import axios from "axios";
  
  export const registerUser = (user,history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const result = await axios.post("/user/register", user);
      //{user,message,token}
    localStorage.setItem("token",result.data.token)
      dispatch({ type: REGISTER_USER, payload: result.data });
      history.push("/");
    } catch (error) {
     const {errors,message} = error.response.data;
     if (Array.isArray(errors)) {
       errors.forEach((err) => alert(err.message));
     }
     if (message) {
        alert(message);
      }
       dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const loginUser = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const result = await axios.post("/user/login", user);
      //{user,msg,token}
      dispatch({ type: LOGIN_USER, payload: result.data });
       history.push("/");
    } catch (error) {
        const {errors,message} = error.response.data;
        if (Array.isArray(errors)) {
          errors.forEach((err) => alert(err.message));
        }
        if (message) {
           alert(message);
         }
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    try {
      let result = await axios.get("/user/current", options);
      //  user
      dispatch({ type: CURRENT_USER, payload: result.data.user });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const logout = () => {
    return {
      type: LOGOUT_USER,
    };
  };
  export const edituser =(id,user)=>async(dispatch)=>{
    try {
        let result=await axios.put(`/user/${id}`,user);
       
       await dispatch({type:EDIT_USER,payload:result.data})
  dispatch(getuser())
    } catch (error) {
        console.log(error)
        dispatch({type:EDIT_USER_fail,payload:error})
    }

}
export const getuser=()=> async(dispatch) =>{

  
  try {
      let result= await axios.get("/user");
  dispatch({type:GET_USER,payload:result.data.result})
  } catch (error) {
      dispatch({type:GET_USER_fail,payload:error})
  }
}
export const deleteuser=(id)=> async(dispatch)=>{
  try {
      let result= await axios.delete(`/user/${id}`);
dispatch({type:DELETE_USER})
      dispatch(getuser())
    
   } 
   catch (error) {
       console.log(error)
       dispatch({type:DELETE_USER_fail, payload:error})}
}
export const getoneuser=(id)=> async(dispatch)=>{
  try {
      let result= await axios.get(`/user/${id}`);

      dispatch({type:GET_ONE_USER, payload:result.data.response})
   console.log(result.data)
   } 
   catch (error) {console.log(error)}
  //  dispatch({type:GET_ONE_USER_fail,payload:error})
}