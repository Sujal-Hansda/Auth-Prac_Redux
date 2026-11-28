import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getProductApi } from '../apis/ProductApi'
import ProductCard from "../components/ProductCard"

const Infinite = () => {
  let limit = 40

  let {data,isPending,fetchNextPage,hasNextPage,isFetchNextPage} = useInfiniteQuery({

    queryKey:["products"],
    queryFn:({pageParam})=>getProductApi(limit,pageParam),
    initialPageParam:0,
    getNextPageParam:(lastPage,allPage)=>
    {
      console.log(allPage);
      
      let loadedData = allPage.length*limit;
      if (loadedData<lastPage.total)
        {
          return loadedData
        } 
        else return undefined
    }
  })

  if (isPending)
  {
    return "Loading...";
    
  }
  console.log(data);
  
  let allProducts = data?.pages?.flatMap((val)=>val.products)??[]

  return (
    <div className='flex flex-col  items-center justify-center p-4 bg-black text-white cursor-pointer'>
      <div className='grid grid-cols-4 gap-4'>
        {
          allProducts.map((val)=>
          {
            return <ProductCard key={val.id} product={val}/>
          })
        }
      </div>
        {
          hasNextPage?<button onClick={()=>fetchNextPage()} className='cursor-pointer m-6'>{isFetchNextPage?"Loading":"Load More"}</button>:""

        }
    </div>
  )
}

export default Infinite