import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getProductDetailApi } from "../apis/ProductDetailApi"
export const useProductDetailApi = ()=>
{
    const { id } = useParams()
  let {data,isPending,error} = useQuery({
    queryKey:['productdetail',id],
    queryFn:()=>getProductDetailApi(id),
    
  })
  return{
    data,isPending,error
  }
} 