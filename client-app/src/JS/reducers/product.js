//import constant
import { editproduct } from "../actions/product";
import {Get_product_load,Get_product_success,Get_product_fail,Get_product,Edit_product, delete_product, delete_product_fail} from "../const/product";
//initial state
const initialstate={
    products:[],
    loadproduct:false,
    errors:null,
    product:{},
editproduct:""}
export const productReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case Get_product_load:return{...state,loadproduct:true}
        case Get_product_success:return{...state,products:payload,loadproduct:false}
        case Get_product_fail:return{...state,loadproduct:false,errors:payload}
        case Get_product:return{...state,product:payload}
        case Edit_product:return{...state,editproduct:payload}
        case delete_product:return { ...state, loadproduct: false, isAuth: true, product:payload };
        case delete_product_fail:return { ...state, loadproduct: false, errors: payload };
        default:return state
    }
}