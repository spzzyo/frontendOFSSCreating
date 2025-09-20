import React from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, ShoppingCart, ShieldCheck } from "lucide-react";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-emerald-400">
            Online Finance
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-lg transition"
            >
              Register
            </button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-black">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Buy Smarter with{" "}
          <span className="text-emerald-400">Zero Cost EMI</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          No credit card required. Get your EMI card instantly, shop with ease,
          and pay later in flexible installments — without interest.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-emerald-600 rounded-lg text-white font-semibold hover:bg-emerald-700 shadow-lg transform hover:scale-105 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-gray-800 rounded-lg text-gray-200 font-semibold hover:bg-gray-700 shadow-lg transform hover:scale-105 transition"
          >
            Explore Products
          </button>
        </div>
      </section>
      {/* Features */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: CreditCard,
            title: "Instant EMI Card",
            desc: "Gold & Titanium cards with flexible limits.",
          },
          {
            icon: ShieldCheck,
            title: "Safe & Secure",
            desc: "Your payments and data are always protected.",
          },
          {
            icon: ShoppingCart,
            title: "Shop & Pay Later",
            desc: "Choose your tenure and pay in easy installments.",
          },
        ].map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            >
              <Icon className="h-10 w-10 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          );
        })}
      </section>
      {/* Product Preview */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "iPhone 15",
              price: "₹80,000",
              img: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fHww",
            },
            {
              name: "Samsung Smart TV",
              price: "₹60,000",
              img: "https://th.bing.com/th/id/OIP.Cn3Qpo_6ZFVfYTn-9auDsAHaFj?w=238&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            },
            {
              name: "Dell Laptop",
              price: "₹50,000",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src={p.img}
                alt={p.name}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-3">{p.name}</h3>
              <p className="text-emerald-400 font-bold">{p.price}</p>
              <button
                onClick={() => navigate("/login")}
                className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Online Finance. All rights reserved.
      </footer>
    </div>
  );
};
export default HomePage;