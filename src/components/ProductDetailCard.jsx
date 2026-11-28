
import React from "react"
import { Star, Truck, ShieldCheck, RotateCcw, Package } from "lucide-react"
import { useParams } from "react-router"
import { useProductDetailApi } from "../hooks/ProductDetailHooks"

const ProductDetailCard = () => {
  let {data,isPending,error} = useProductDetailApi()

    if (isPending) return <p>Loading product...</p>

  if (error) return <p>Something went wrong!</p>
  
  const discountedPrice = (
    data.price -
    (data.price * data.discountPercentage) / 100
  ).toFixed(2)

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#171717] text-white rounded-2xl border border-white/10 overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">

        {/* Product Image */}
        <div className="bg-[#222] rounded-xl p-5 flex items-center justify-center">
          <img
            src={data.images?.[0] || data.thumbnail}
            alt={data.title}
            className="w-full h-[350px] object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-5">

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-lime-400 uppercase tracking-wider">
              {data.category}
            </span>

            <span className={`text-xs px-3 py-1 rounded-full ${
              data.stock > 0
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}>
              {data.availabilityStatus}
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {data.title}
            </h1>

            <p className="text-gray-400 mt-2 text-sm">
              By {data.brand || "Unbranded"}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm">
            {data.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{data.rating}</span>
            <span className="text-gray-500 text-sm">
              ({data.reviews?.length || 0} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-lime-400">
              ${discountedPrice}
            </span>

            <span className="text-gray-500 line-through">
              ${data.price}
            </span>

            <span className="text-green-400 text-sm">
              {data.discountPercentage}% OFF
            </span>
          </div>

          <div className="text-sm text-gray-400">
            {data.stock} units available
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button className="flex-1 bg-lime-400 text-black font-semibold py-3 rounded-xl hover:bg-lime-300 transition">
              Add to Cart
            </button>

            <button className="flex-1 border border-white/20 py-3 rounded-xl hover:bg-white/10 transition">
              Buy Now
            </button>
          </div>

        </div>
      </div>

      {/* Additional Information */}
      <div className="border-t border-white/10 p-6 md:p-10">

        <h2 className="text-xl font-bold mb-6">
          Product Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <InfoItem label="SKU" value={data.sku} />
          <InfoItem label="Weight" value={`${data.weight} kg`} />
          <InfoItem label="Warranty" value={data.warrantyInformation} />
          <InfoItem label="Shipping" value={data.shippingInformation} />
          <InfoItem label="Return Policy" value={data.returnPolicy} />
          <InfoItem label="Minimum Order" value={data.minimumOrderQuantity} />

        </div>

        {/* Dimensions */}
        <h3 className="font-semibold mt-8 mb-4">
          Dimensions
        </h3>

        <div className="grid grid-cols-3 gap-3">
          <InfoItem label="Width" value={`${data.dimensions?.width} cm`} />
          <InfoItem label="Height" value={`${data.dimensions?.height} cm`} />
          <InfoItem label="Depth" value={`${data.dimensions?.depth} cm`} />
        </div>

      </div>

      {/* Customer Reviews */}
      <div className="border-t border-white/10 p-6 md:p-10">

        <h2 className="text-xl font-bold mb-6">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {data.reviews?.map((review, index) => (
            <div
              key={index}
              className="bg-[#222] border border-white/5 rounded-xl p-5"
            >
              <div className="flex justify-between items-center gap-2">

                <h3 className="font-semibold text-sm">
                  {review.reviewerName}
                </h3>

                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} className="fill-yellow-400" />
                  <span className="text-sm">{review.rating}</span>
                </div>

              </div>

              <p className="text-gray-400 text-sm mt-3">
                {review.comment}
              </p>

              <p className="text-gray-600 text-xs mt-3">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

const InfoItem = ({ label, value }) => (
  <div className="bg-[#222] rounded-xl p-4">
    <p className="text-xs text-gray-500 mb-2">{label}</p>
    <p className="text-sm font-medium text-gray-200">
      {value ?? "N/A"}
    </p>
  </div>
)

export default ProductDetailCard
