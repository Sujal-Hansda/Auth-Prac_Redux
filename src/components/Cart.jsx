import React from 'react'

const Cart = () => {

  // Temporary dummy data for UI
  const cartItems = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      brand: "Essence",
      price: 399,
      quantity: 1,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      id: 2,
      title: "Eyeshadow Palette",
      brand: "Glamour Beauty",
      price: 599,
      quantity: 2,
      thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette/thumbnail.webp"
    }
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 999 ? 0 : 49;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-[#111111] text-white px-5 md:px-12 py-12">

      {/* Header */}
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-10">
          <ShoppingBag size={28} className="text-[#D7F205]" />
          <h1 className="text-3xl md:text-4xl font-bold">
            My Cart
          </h1>
          <span className="text-gray-400 text-sm">
            ({cartItems.length} items)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-5 flex flex-col sm:flex-row gap-5"
              >

                {/* Product Image */}
                <div className="bg-[#292929] rounded-xl w-full sm:w-36 h-36 flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain p-3"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <p className="text-gray-500 text-sm mb-1">
                      {item.brand}
                    </p>

                    <h2 className="text-lg font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-[#D7F205] font-bold mt-2">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5">

                    {/* Quantity */}
                    <div className="flex items-center gap-4 bg-[#292929] rounded-lg px-3 py-2">
                      <button className="text-gray-300 hover:text-[#D7F205]">
                        <Minus size={16} />
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button className="text-gray-300 hover:text-[#D7F205]">
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove */}
                    <button className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm">
                      <Trash2 size={16} />
                      Remove
                    </button>

                  </div>
                </div>

                {/* Item Total */}
                <div className="sm:text-right">
                  <p className="text-gray-500 text-sm">Total</p>
                  <p className="text-xl font-bold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

              </div>
            ))}

            <Link
              to="/main/shop"
              className="inline-flex items-center gap-2 text-[#D7F205] hover:underline mt-3"
            >
              ← Continue Shopping
            </Link>

          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">

            <div className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-6 sticky top-24">

              <h2 className="text-xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Delivery</span>
                  <span className={delivery === 0 ? "text-[#D7F205]" : ""}>
                    {delivery === 0 ? "FREE" : `₹${delivery}`}
                  </span>
                </div>

                <div className="border-t border-gray-700 pt-4 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs mt-6 mb-6">
                <Truck size={17} className="text-[#D7F205]" />
                Free delivery on orders above ₹999
              </div>

              <button className="w-full bg-[#D7F205] text-black font-bold py-4 rounded-xl hover:bg-[#c5df00] transition flex items-center justify-center gap-2">
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>

              <p className="text-gray-500 text-xs text-center mt-4">
                Secure checkout · Easy returns
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart