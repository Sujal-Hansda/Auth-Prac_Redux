import { axiosInstance } from "../config/axiosinstance";
export let getProductApi = async(page)=>
{
  try {
    let limit = 10
    let skip = page*limit
    let res = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`)
    console.log(res.data.products);
    console.log("api called for pagination");
    
    return {
      products:res.data.products,
      total:res.data.total
    }
  } catch (error) {
    console.log("Error in fetching Api",error);
    throw error;   
  }
}