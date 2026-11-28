import React from "react"
import {
ArrowUpRight,
Truck,
ShieldCheck,
Headphones,
Heart,
Zap,
Package,
Users
} from "lucide-react"
export const AboutPage = () => {
  return (
<div className="min-h-screen bg-[#111] text-white">

  {/* Hero Section */}
  <section className="relative overflow-hidden px-6 md:px-16 py-24">
    <div className="absolute -top-32 -right-20 w-96 h-96 bg-lime-400/10 blur-[120px] rounded-full" />

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <div className="relative z-10">
        <span className="text-lime-400 uppercase tracking-[0.3em] text-xs font-bold">
          About SkyDart
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">
          Shopping <br />
          Made <span className="text-lime-400">Smarter.</span>
        </h1>

        <p className="text-gray-400 mt-7 leading-8 max-w-lg">
          At SkyDart, we believe shopping should be simple,
          seamless and exciting. We bring your favourite products
          together in one place, making every shopping experience
          effortless.
        </p>

        <a
          href="/main/shop"
          className="inline-flex items-center gap-3 mt-9 bg-lime-400 text-black px-7 py-4 rounded-xl font-bold hover:bg-lime-300 transition"
        >
          Explore Products
          <ArrowUpRight size={20} />
        </a>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-lime-400/10 blur-3xl rounded-full" />
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000"
          alt="Online shopping experience"
          className="relative w-full h-[420px] object-cover rounded-3xl border border-white/10"
        />
        <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/10">
          <p className="text-lime-400 text-sm font-semibold">
            THE SKYDART EXPERIENCE
          </p>
          <p className="text-white font-bold text-xl mt-1">
            Shop Without Limits.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Our Story */}
  <section className="px-6 md:px-16 py-20 bg-[#171717]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <div>
        <span className="text-lime-400 text-xs font-bold tracking-[0.3em] uppercase">
          Our Story
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
          More Than Just <br />
          <span className="text-lime-400">An Online Store.</span>
        </h2>
      </div>

      <div className="space-y-5 text-gray-400 leading-8">
        <p>
          SkyDart was created with a simple vision: to make
          online shopping more convenient and accessible.
        </p>
        <p>
          From discovering new products to finding everyday
          essentials, we aim to make your journey smooth from
          browsing to checkout.
        </p>
        <p>
          We are constantly working towards creating a shopping
          experience that puts customers first.
        </p>
      </div>
    </div>
  </section>

  {/* Values */}
  <section className="px-6 md:px-16 py-24">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-lime-400 text-xs font-bold tracking-[0.3em] uppercase">
          Why SkyDart
        </span>
        <h2 className="text-4xl font-bold mt-4">
          What Makes Us Different?
        </h2>
        <p className="text-gray-400 mt-4">
          Designed around what matters most to you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            icon: Zap,
            title: "Easy Shopping",
            desc: "A smooth and simple shopping experience."
          },
          {
            icon: ShieldCheck,
            title: "Secure Experience",
            desc: "We value your privacy and shopping confidence."
          },
          {
            icon: Truck,
            title: "Fast Delivery",
            desc: "We aim to get your favourite products to you."
          },
          {
            icon: Headphones,
            title: "Customer First",
            desc: "Your experience is always our priority."
          }
        ].map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="group bg-[#1b1b1b] border border-white/10 rounded-2xl p-7 hover:border-lime-400/50 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-lime-400/10 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition">
                <Icon size={27} />
              </div>
              <h3 className="text-xl font-bold mt-7">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-7 mt-3">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </section>

  {/* Mission Banner */}
  <section className="px-6 md:px-16 pb-24">
    <div className="max-w-7xl mx-auto bg-lime-400 rounded-3xl p-10 md:p-16 text-black relative overflow-hidden">
      <div className="absolute -right-10 -top-20 opacity-10">
        <Package size={300} />
      </div>

      <div className="relative z-10 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] font-bold">
          Our Mission
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-5 leading-tight">
          Making Every Click Count.
        </h2>

        <p className="mt-6 text-black/70 leading-8">
          Our mission is to bring convenience, variety and
          simplicity to online shopping, one order at a time.
        </p>

        <a
          href="/main/shop"
          className="inline-flex items-center gap-3 mt-8 bg-black text-white px-7 py-4 rounded-xl font-bold hover:bg-neutral-800 transition"
        >
          Start Shopping
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  </section>

  {/* Footer Message */}
  <section className="border-t border-white/10 py-10 px-6 text-center">
    <Heart className="text-lime-400 mx-auto mb-4" size={25} />
    <h3 className="text-2xl font-bold">
      Thank You for Choosing SkyDart.
    </h3>
    <p className="text-gray-500 text-sm mt-3">
      Your shopping journey starts here.
    </p>
  </section>

</div>

)
}
