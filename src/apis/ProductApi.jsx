import { axiosInstance } from "../config/axiosinstance";
export let getProductApi = async(limit,pageParams)=>
{
  try {
    console.log(pageParams);
    let res = await axiosInstance.get(`/products?limit=${limit}&skip=${pageParams}`)
    // console.log(res.data.products);
    // console.log("api called for pagination");
    
    return res.data
      // total:res.data.total
    
  } catch (error) {
    console.log("Error in fetching Api",error);
    throw error;   
  }
}