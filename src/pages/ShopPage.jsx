import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductSkeletonCard from '../components/ProductSkeletonCard'
import Search from '../components/Search'
import { useProductApi } from '../hooks/ProductHooks'
const ShopPage = () => {
  let {data,isPending} = useProductApi()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  
  const filteredProducts = data?.filter((val) => {
  return (
    val.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || val.category === category)
  )
})


  return (
    <div>
      <Search   setSearch={setSearch} setCategory={setCategory}/>
      <div className='grid grid-cols-4 gap-4'>
      {
        (isPending) ? 
        Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeletonCard key={index} />
        )):
        filteredProducts?.length > 0 ? (
  filteredProducts.map((val) => (
    <ProductCard product={val} key={val.id} />
  ))
) : (
  <p>No products found!</p>
)}
    </div>
    </div>
    
  )
}

export default ShopPage