
import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useAuth } from "../hooks/AuthHooks";


const ProductCard = ({ product }) => {
  let {navigate} = useAuth();
  return (
    <div onClick={()=>{navigate(`/main/product/${product.id}`)}} className="cursor-pointer w-full max-w-sm bg-[#18181b] rounded-2xl overflow-hidden border border-white/10 hover:border-lime-400/50 hover:shadow-xl hover:shadow-lime-400/5 transition duration-300">

      {/* Product Image */}
      <div className="relative bg-[#222225] h-56 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />

        <span className="absolute top-3 left-3 bg-green-500/15 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
          {product.availabilityStatus}
        </span>

        <span className="absolute top-3 right-3 bg-red-500/90 text-white text-xs font-semibold px-2 py-1 rounded-md">
          {product.discountPercentage}% OFF
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        <p className="text-sm text-gray-400 capitalize">
          {product.category} • {product.brand}
        </p>

        <h2 className="text-lg font-semibold text-white mt-2 truncate">
          {product.title}
        </h2>

        <p className="text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-white">
            {product.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <span className="text-2xl font-bold text-white">
              ${product.price}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            {product.stock} in stock
          </span>
        </div>

        {/* Add to Cart */}
        <button className="cursor-pointer w-full mt-5 bg-lime-400 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-lime-300 active:scale-[0.98] transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
