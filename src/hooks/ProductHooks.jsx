import { getProductApi } from "../apis/ProductApi"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { useState } from "react"

export const useProductApi=(page)=>
{
  let {data,isPending,error,isPlaceholderData} =useQuery({
    queryKey:['products',page],
    queryFn:()=>getProductApi(page),
    staleTime:1000*60*5,
    placeholderData:keepPreviousData,
  }
  
) 
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  
  const filteredProducts = data?.products?.filter((val) => {
  return (
    val.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || val.category === category)
  )
})
const totalPages = Math.ceil((data?.total || 0) / 10);
return{
  data,
  isPending,
  error,
  search,
  setSearch,
  category,
  setCategory,
  filteredProducts,
  totalPages,
  isPlaceholderData

}
}
