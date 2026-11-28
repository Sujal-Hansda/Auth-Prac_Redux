import { axiosInstance } from "../config/axiosinstance";
export let getProductDetailApi = async(id)=>
{
  try {
    let res = await axiosInstance.get(`/products/${id}`)
    return res.data
  } catch (error) {
      console.log("Error in fetching details");    
  }
}