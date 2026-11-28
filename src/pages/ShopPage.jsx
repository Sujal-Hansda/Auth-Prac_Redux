import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductSkeletonCard from '../components/ProductSkeletonCard'
import Search from '../components/Search'
import { useProductApi } from '../hooks/ProductHooks'
const ShopPage = () => {
  const [page, setPage] = useState(0)
  let {data,
    isPending,
    filteredProducts,
    setSearch,
    setCategory,
    totalPages,
    isPlaceholderData
  } = useProductApi(page)

  console.log(page);

  
  return (
    <div>
      <Search   setSearch={setSearch} setCategory={setCategory}/>
      <div className='grid grid-cols-4 gap-4 pb-20 sticky'>
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
    <div 
      style={{opacity:isPlaceholderData?0.3:1}}
    className='flex items-center justify-center gap-12'>
      <button 
      disabled={page === 0}
      onClick={()=>setPage(page-1)} className='cursor-pointer bg-red-800 px-4 py-2 rounded-xl font-semibold '>Prev</button>
      <p>Page {page+1} of {totalPages}</p>
      <button 
      disabled={page>=totalPages-1}
      onClick={()=>setPage(page+1)} className='cursor-pointer bg-red-800 px-4 py-2 rounded-xl font-semibold '>Next</button>
    </div>
    </div>
  )
}

export default ShopPage