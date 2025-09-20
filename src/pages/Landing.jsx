// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { CreditCard, ShoppingCart, ShieldCheck } from "lucide-react";
// const HomePage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold tracking-wide text-emerald-400">
//             Online Finance
//           </h1>
//           <div className="flex gap-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => navigate("/register")}
//               className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-lg transition"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       </header>
//       {/* Hero Section */}
//       <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-black">
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//           Buy Smarter with{" "}
//           <span className="text-emerald-400">Zero Cost EMI</span>
//         </h2>
//         <p className="text-gray-400 text-lg max-w-2xl">
//           No credit card required. Get your EMI card instantly, shop with ease,
//           and pay later in flexible installments — without interest.
//         </p>
//         <div className="flex gap-4 mt-6">
//           <button
//             onClick={() => navigate("/register")}
//             className="px-6 py-3 bg-emerald-600 rounded-lg text-white font-semibold hover:bg-emerald-700 shadow-lg transform hover:scale-105 transition"
//           >
//             Get Started
//           </button>
//           <button
//             onClick={() => navigate("/products")}
//             className="px-6 py-3 bg-gray-800 rounded-lg text-gray-200 font-semibold hover:bg-gray-700 shadow-lg transform hover:scale-105 transition"
//           >
//             Explore Products
//           </button>
//         </div>
//       </section>
//       {/* Features */}
//       <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
//         {[
//           {
//             icon: CreditCard,
//             title: "Instant EMI Card",
//             desc: "Gold & Titanium cards with flexible limits.",
//           },
//           {
//             icon: ShieldCheck,
//             title: "Safe & Secure",
//             desc: "Your payments and data are always protected.",
//           },
//           {
//             icon: ShoppingCart,
//             title: "Shop & Pay Later",
//             desc: "Choose your tenure and pay in easy installments.",
//           },
//         ].map((f, i) => {
//           const Icon = f.icon;
//           return (
//             <div
//               key={i}
//               className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
//             >
//               <Icon className="h-10 w-10 text-emerald-400 mb-4" />
//               <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
//               <p className="text-gray-400 text-sm">{f.desc}</p>
//             </div>
//           );
//         })}
//       </section>
//       {/* Product Preview */}
//       <section className="container mx-auto px-6 py-16">
//         <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               name: "iPhone 15",
//               price: "₹80,000",
//               img: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fHww",
//             },
//             {
//               name: "Samsung Smart TV",
//               price: "₹60,000",
//               img: "https://th.bing.com/th/id/OIP.Cn3Qpo_6ZFVfYTn-9auDsAHaFj?w=238&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
//             },
//             {
//               name: "Dell Laptop",
//               price: "₹50,000",
//             },
//           ].map((p, i) => (
//             <div
//               key={i}
//               className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
//             >
//               <img
//                 src={p.img}
//                 alt={p.name}
//                 className="rounded-lg w-full h-40 object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-3">{p.name}</h3>
//               <p className="text-emerald-400 font-bold">{p.price}</p>
//               <button
//                 onClick={() => navigate("/login")}
//                 className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
//               >
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} Online Finance. All rights reserved.
//       </footer>
//     </div>
//   );
// };
// export default HomePage;







// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CreditCard, ShoppingCart, ShieldCheck } from "lucide-react";

// // Replace this with your final black+green gradient image URL:
// const YOUR_VIDEO_URL = "src/assets/background.mp4";

// const green = {
//   100: "#56FFA5",
//   200: "#00FF85",
//   400: "#00A950",
//   800: "#131917",
//   900: "#090D0A",
// };

// const features = [
//   {
//     icon: CreditCard,
//     title: "Instant EMI Card",
//     desc: "Apply in minutes and power your shopping instantly.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Secure Transactions",
//     desc: "Multi-layer security & data encryption for your peace of mind.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "Flexible Repayment",
//     desc: "Split big purchases, manage easily, and control your budget.",
//   },
// ];

// const products = [
//   {
//     name: "Apple MacBook Air M2",
//     price: "₹1,04,900",
//     img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Sony WH-1000XM5",
//     price: "₹29,990",
//     img: "https://images.unsplash.com/photo-1512499617640-c2f999098c1a?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     name: "Samsung 4K QLED",
//     price: "₹48,999",
//     img: "https://th.bing.com/th/id/OIP.Cn3Qpo_6ZFVfYTn-9auDsAHaFj?w=238&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
//   },
// ];

// const containerStagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.16,
//     },
//   },
// };
// const cardFade = {
//   hidden: { opacity: 0, y: 44 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col relative">
//       {/* HEADER */}
//       <header
//         className="sticky top-0 z-50 w-full"
//         style={{
//           background: green[900],
//           borderBottom: `1px solid ${green[800]}`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <span
//             className="text-2xl font-bold tracking-wide"
//             style={{
//               background: `linear-gradient(90deg,${green[200]},${green[400]} 80%)`,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Online Finance
//           </span>
//           <div className="flex gap-3">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 rounded-lg font-semibold bg-transparent border border-white/20 hover:border-white transition text-white"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => navigate("/register")}
//               style={{ background: green[400] }}
//               className="px-4 py-2 rounded-lg font-semibold shadow-lg hover:brightness-110 hover:scale-105 transition"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section
//         className="relative flex items-center justify-center min-h-screen w-full"
//         style={{ minHeight: "100vh", minWidth: "100vw" }}
//       >
//       <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: 'none' }}>
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="w-full h-full object-cover"
//     style={{
//       position: "absolute",
//       top: 0, left: 0,
//       width: "100%",
//       height: "100%",
//       objectFit: "cover", // THIS scales and crops as needed
//       zIndex: 0,
//       opacity: 0.95, // Optional: For blending
//       pointerEvents: "none", // Ensures user can't interact with the video
//     }}
//     src={YOUR_VIDEO_URL}
//   />
//   {/* Optional: Overlay for readability */}
//   <div
//     className="absolute inset-0"
//     style={{ background: "rgba(9,13,10,0.6)", zIndex: 1 }}
//   />
// </div>

//         {/* Main Hero Content */}
//         <motion.div
//           className="relative z-10 flex flex-col items-center text-center w-full px-6"
//           initial={{ opacity: 0, y: 36 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 text-white">
//             <span className="block">Empowering Your Purchases</span>
//             <span>
//               <span
//                 style={{
//                   background: `linear-gradient(90deg,${green[200]},${green[100]})`,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Zero Cost.
//               </span>{" "}
//               Full Control.
//             </span>
//           </h2>
//           <p className="text-white text-lg/relaxed max-w-xl mx-auto mb-7 opacity-90">
//             Instantly unlock flexible, interest-free EMIs without a credit card.<br />
//             The smarter way to finance your life’s upgrades – all in a few clicks.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => navigate("/register")}
//               className="px-7 py-3 rounded-lg font-bold shadow-lg text-black"
//               style={{
//                 background: `linear-gradient(90deg,${green[100]},${green[400]})`,
//                 letterSpacing: "0.02em",
//               }}
//             >
//               Get Your EMI Card
//             </button>
//             <button
//               onClick={() => navigate("/products")}
//               className="px-7 py-3 rounded-lg font-bold bg-white/10 hover:bg-white/20 transition text-white"
//             >
//               Browse Products
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* FEATURES */}
//       <motion.section
//         className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8"
//         style={{ background: green[900] }}
//         variants={containerStagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//         {features.map((f, idx) => {
//           const Icon = f.icon;
//           return (
//             <motion.div
//               key={f.title}
//               className="bg-black/80 p-7 rounded-xl shadow-lg text-center flex flex-col items-center"
//               variants={cardFade}
//             >
//               <div
//                 className="flex items-center justify-center rounded-full mb-4"
//                 style={{
//                   background: `linear-gradient(135deg,${green[100]}33,${green[400]}33)`,
//                   width: 56,
//                   height: 56,
//                 }}
//               >
//                 <Icon size={32} color={green[200]} />
//               </div>
//               <h3
//                 className="text-lg font-bold mb-2"
//                 style={{
//                   color: green[200],
//                   letterSpacing: "-0.5px",
//                 }}
//               >
//                 {f.title}
//               </h3>
//               <p className="text-white text-sm opacity-85">{f.desc}</p>
//             </motion.div>
//           );
//         })}
//       </motion.section>

//       {/* POPULAR PRODUCTS */}
//       <section
//         className="max-w-7xl mx-auto px-6 py-14 bg-black/80"
//         style={{
//           borderTop: `1px solid ${green[800]}`,
//         }}
//       >
//         <h2
//           className="text-2xl font-bold mb-7 tracking-tight"
//           style={{ color: green[100] }}
//         >
//           Popular Choices
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((p, i) => (
//             <motion.div
//               key={p.name}
//               initial={{ opacity: 0, scale: 0.91 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ delay: 0.08 * i, duration: 0.5, ease: "easeOut" }}
//               className="bg-black p-4 rounded-xl shadow-lg text-white flex flex-col"
//               style={{
//                 border: `1px solid ${green[800]}`,
//                 minHeight: 350,
//               }}
//             >
//               <img
//                 src={p.img}
//                 alt={p.name}
//                 className="rounded-lg w-full h-40 object-cover bg-black mb-3"
//               />
//               <h3
//                 className="text-lg font-bold"
//                 style={{
//                   color: green[200],
//                 }}
//               >
//                 {p.name}
//               </h3>
//               <div className="flex-1"></div>
//               <div className="flex items-end justify-between mt-2">
//                 <span className="font-bold text-white">{p.price}</span>
//                 <button
//                   onClick={() => navigate("/login")}
//                   className="px-4 py-2 rounded-lg text-sm font-semibold"
//                   style={{
//                     background: green[400],
//                     color: "#111",
//                   }}
//                 >
//                   Buy with EMI
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer
//         className="w-full py-6 text-center text-sm"
//         style={{
//           background: green[900],
//           color: "#fff",
//           borderTop: `1px solid ${green[800]}`,
//         }}
//       >
//         &copy; {new Date().getFullYear()} Online Finance. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ShieldCheck, CreditCard, Sparkles, Timer, Lock } from "lucide-react";

const VIDEO_URL = "src/assets/background.mp4";

const green = {
  100: "#56FFA5",
  200: "#00FF85",
  400: "#00A950",
  800: "#131917",
  900: "#090D0A",
};

const features = [
  {
    icon: Timer,
    title: "Instant Access",
    desc: "Apply in minutes. Start using right away.",
  },
  {
    icon: Lock,
    title: "Bank‑grade Security",
    desc: "Encryption and multi‑layer protection.",
  },
  {
    icon: ShieldCheck,
    title: "Zero‑Cost EMIs",
    desc: "Flexible tenures. No interest on eligible plans.",
  },
];

// Stagger + fade variants
const containerStagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};


const CardMetal = ({ variant = "gold", title, tagline, onApply }) => {
  const isGold = variant === "gold";

  const metal = isGold
    ? {
        // Warm brushed gold
        grad: "linear-gradient(135deg, #6e5718, #c7a53a 35%, #f3e2a1 55%, #8c6f1f 85%)",
        grain:
          "radial-gradient(1200px 600px at -10% 120%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(1200px 600px at 110% -10%, rgba(255,255,255,0.06), transparent 60%)",
        edge: "#b08d2b",
        text: "#fff",
        glow: "rgba(255, 243, 209, 0.6)",
      }
    : {
        // Cool brushed titanium
        grad: "linear-gradient(135deg, #2d2f32, #5c5f66 35%, #cdd0d6 55%, #3a3d42 85%)",
        grain:
          "radial-gradient(1200px 600px at -10% 120%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(1200px 600px at 110% -10%, rgba(255,255,255,0.06), transparent 60%)",
        edge: "#7a7f88",
        text: "#f7f7f7",
        glow: "rgba(220, 226, 240, 0.6)",
      };

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card container */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative mx-auto w-full max-w-[520px] rounded-[24px] p-[1px] overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${metal.edge}55, transparent)`,
          boxShadow: `0 30px 80px -30px ${metal.edge}55`,
        }}
      >
        {/* Subtle glowing border */}
        <div
          className="absolute inset-0 rounded-[24px] pointer-events-none"
          style={{
            boxShadow: `0 0 0 1px ${metal.edge}55 inset, 0 0 60px ${metal.glow}`,
            filter: "blur(0.3px)",
          }}
        />

        {/* Card body */}
        <div
          className="relative rounded-[22px] overflow-hidden"
          style={{
            background: `${metal.grad}`,
          }}
        >
          {/* Surface grain/texture */}
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{ background: metal.grain, mixBlendMode: "overlay" }}
          />
          {/* Soft vignette for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(120% 120% at 100% 0%, rgba(0,0,0,0.35) 0%, transparent 40%), radial-gradient(120% 120% at 0% 100%, rgba(0,0,0,0.35) 0%, transparent 40%)",
            }}
          />
          {/* Animated shine sweep */}
          <motion.div
            className="absolute -inset-1 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.28) 45%, transparent 60%)",
              filter: "blur(6px)",
              opacity: 0.35,
            }}
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
          />

          {/* Content */}
          <div className="relative p-6 sm:p-7">
            {/* Top row: brand + contactless */}
            <div className="flex items-center justify-between">
              <span
                className="font-semibold tracking-wide"
                style={{ color: metal.text }}
              >
                Online Finance
              </span>
              {/* Contactless icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M7.5 7.5c3.8 2.2 3.8 6.8 0 9" stroke={metal.text} strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M11 6c5 3 5 9 0 12" stroke={metal.text} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14.5 4.5c6.1 3.7 6.1 11.3 0 15" stroke={metal.text} strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Chip + network row */}
            <div className="mt-6 flex items-center justify-between">
              {/* Chip */}
              <div
                className="rounded-[6px] w-12 h-9"
                style={{
                  background:
                    "linear-gradient(135deg, #c9a55a, #fbe5b7 45%, #b98c3a 90%)",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
                }}
              />
              {/* Network circles */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: isGold ? "#dcb64b" : "#cdd0d6", opacity: 0.9 }}
                />
                <div
                  className="w-6 h-6 rounded-full -ml-2"
                  style={{ background: isGold ? "#b68d2c" : "#a6abb3", opacity: 0.85 }}
                />
              </div>
            </div>

            {/* Number */}
            <div
              className="mt-6 font-[600] tracking-[0.22em] select-none"
              style={{ color: metal.text, opacity: 0.95, fontVariantNumeric: "tabular-nums" }}
            >
                ••••  •••• ••••  •••• 
            </div>

            {/* Name / Expiry */}
            <div className="mt-6 flex items-end justify-between">
              <div className="text-sm" style={{ color: metal.text, opacity: 0.9 }}>
                <div className="uppercase tracking-wider opacity-70 text-[11px]">Cardholder</div>
                <div className="font-semibold mt-1">ALEXANDER P</div>
              </div>
          
            </div>
          </div>
        </div>
      </motion.div>

  
    </motion.div>
  );
};


// Place near your other components
const InfoPanel = ({ eyebrow, headline, bullets = [], ctaLabel, onCta }) => (
  <motion.div
    className="relative rounded-2xl p-6 md:p-7 bg-white/[0.04] border border-white/10 backdrop-blur"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="text-sm uppercase tracking-wider text-white/60">{eyebrow}</div>
    <h3 className="mt-2 text-2xl font-bold text-white">{headline}</h3>
    <ul className="mt-4 space-y-2.5">
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-2 text-white/85">
          <span className="mt-[6px] block h-1.5 w-1.5 rounded-full" style={{ background: "#00FF85" }} />
          <span className="text-sm">{b}</span>
        </li>
      ))}
    </ul>
    {ctaLabel && (
      <button
        onClick={onCta}
        className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-black"
        style={{ background: "linear-gradient(90deg, #56FFA5, #00A950)" }}
      >
        {ctaLabel}
      </button>
    )}
  </motion.div>
);



const CardShowcase = ({
  variant = "gold",
  title,
  tagline,
  points = [],
  ctaLabel = "Apply",
  onCta,
  reverse = false, // set true to swap sides for the second row
}) => {
  // Accent badge colors per variant
  const badge =
    variant === "gold"
      ? { bg: "rgba(212,175,55,0.2)", dot: "#d4af37", text: "#fff" }
      : { bg: "rgba(180,185,195,0.18)", dot: "#cdd0d6", text: "#f7f7f7" };

  return (
    <motion.div
      className={`grid md:grid-cols-2 gap-8 md:gap-10 items-center ${reverse ? "" : ""}`}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card */}
      <div className={reverse ? "md:order-2" : ""}>
        <CardMetal variant={variant} title={title} tagline={tagline} onApply={onCta} />
      </div>

      {/* Compact, attractive info panel tied to the card */}
      <motion.div
        className={`relative rounded-2xl p-6 md:p-7 bg-white/[0.04] border border-white/10 backdrop-blur ${reverse ? "md:order-1" : ""}`}
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        {/* Soft moving gradient behind to visually bind to the card */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-20 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,255,133,0.14), rgba(0,169,80,0.08) 40%, rgba(255,255,255,0.05) 70%)",
            backgroundSize: "200% 200%",
            filter: "blur(0.5px)",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Variant badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1"
          style={{ background: badge.bg, color: badge.text }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: badge.dot }}
          />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {variant === "gold" ? "Gold" : "Titanium"}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-white/80">{tagline}</p>

        {/* Minimal bullets (2-3 max) */}
        <ul className="mt-4 space-y-2">
          {points.slice(0, 3).map((p) => (
            <li key={p} className="flex items-start gap-2 text-white/85">
              <span
                className="mt-1 block h-1.5 w-1.5 rounded-full"
                style={{ background: "#00FF85" }}
              />
              <span className="text-sm">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={onCta}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-black"
            style={{ background: "linear-gradient(90deg, #56FFA5, #00A950)" }}
          >
            {ctaLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};


const CardShowcaseMinimal = ({
  variant = "gold",
  title,
  tagline,
  details = [],
  ctaLabel = "Apply",
  onCta,
  reverse = false,
}) => {
  const badge =
    variant === "gold"
      ? { bg: "rgba(255,255,255,0.06)", dot: "#d4af37", text: "#fff" }
      : { bg: "rgba(255,255,255,0.06)", dot: "#cdd0d6", text: "#f7f7f7" };

  return (
    <motion.div
   
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Card with attached info panel */}
      <motion.div
        className={`relative group `}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
      >
        {/* Card as the star */}
        <CardMetal variant={variant} title={title} tagline={tagline} onApply={onCta} />

        {/* Attached info panel (desktop: floating at card edge; mobile: below) */}
        <div className="mt-2 md:mt-0 md:absolute md:right-3 md:-bottom-4 md:max-w-[56%]">
          <motion.div
            className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur px-4 py-3 md:px-5 md:py-4 shadow-lg"
            initial={{ opacity: 0.85 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header: small badge + title */}
            <div className="flex items-center justify-between">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1"
                style={{ background: badge.bg, color: badge.text }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: badge.dot }} />
                <span className="text-[11px] font-semibold uppercase tracking-wide">
                  {variant === "gold" ? "Gold" : "Titanium"}
                </span>
              </div>
              {/* Minimal hint on desktop */}
              <span className="hidden md:block text-[11px] text-white/50">Hover for more</span>
            </div>

            {/* Minimal line */}
            <h4 className="mt-2 text-base font-semibold text-white">{title}</h4>
            <p className="text-sm text-white/70">{tagline}</p>

            {/* Hidden details until interaction */}
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              whileHover={{ height: "auto", opacity: 1 }}
              whileFocusWithin={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ul className="mt-3 space-y-1.5">
                {details.slice(0, 3).map((p) => (
                  <li key={p} className="flex items-start gap-2 text-white/80">
                    <span className="mt-2 block h-1 w-1 rounded-full" style={{ background: "#00FF85" }} />
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <button
                  onClick={onCta}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-black transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
                  style={{ background: "linear-gradient(90deg, #56FFA5, #00A950)" }}
                >
                  {ctaLabel}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Spacer column to balance layout when reversed (desktop), or optional tiny caption */}
      <div className={`${reverse ? "md:order-1" : ""} hidden md:block`} aria-hidden="true" />
    </motion.div>
  );
};

// Lightweight 3D tilt wrapper for cards
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(posX);
    y.set(posY);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ perspective: 1000 }}
      className="will-change-transform"
    >
      <motion.div style={{ rotateX, rotateY }} transition={{ type: "spring", stiffness: 150, damping: 12 }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

// // Gold / Titanium visual
// const CardVisual = ({
//   variant = "gold",
//   title,
//   punchline,
//   onApply,
// }) => {
//   const isGold = variant === "gold";
//   const metal = isGold
//     ? {
//         base: "#d4af37",
//         glow: "#f8ecb8",
//         edge: "#8a6f1f",
//         noise: "radial-gradient(1200px 600px at -10% 120%, rgba(255,255,255,0.12), transparent 60%)",
//       }
//     : {
//         base: "#c9c9ce",
//         glow: "#f0f3ff",
//         edge: "#6b7280",
//         noise: "radial-gradient(1200px 600px at 110% -10%, rgba(255,255,255,0.12), transparent 60%)",
//       };

//   return (
//     <TiltCard>
//       <motion.div
//         className="relative rounded-2xl p-0 w-full max-w-md overflow-hidden"
//         initial={{ opacity: 0, y: 30, scale: 0.98 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         {/* Aura */}
//         <motion.div
//           aria-hidden
//           className="absolute -inset-1 rounded-3xl"
//           style={{
//             background: `conic-gradient(from 180deg at 50% 50%, ${green[200]}33, transparent, ${green[200]}33)`,
//             filter: "blur(18px)",
//           }}
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//         {/* Card face */}
//         <motion.div
//           className="relative rounded-2xl p-6 sm:p-7 bg-black/60"
//           style={{
//             border: `1px solid ${metal.edge}66`,
//             boxShadow: `0 18px 60px -20px ${metal.base}33`,
//           }}
//         >
//           {/* Metallic plate */}
//           <motion.div
//             className="rounded-xl p-5 sm:p-6"
//             style={{
//               background: `
//                 linear-gradient(135deg, ${metal.base}33, #0b0b0b 70%),
//                 ${metal.noise}
//               `,
//               border: `1px solid ${metal.base}66`,
//             }}
//             animate={{
//               backgroundPosition: ["0% 0%", "100% 100%"],
//             }}
//             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//           >
//             <div className="flex items-center justify-between">
//               <span className="text-white font-semibold tracking-wide">Online Finance</span>
//               <CreditCard size={22} color={metal.glow} />
//             </div>

//             <div className="mt-8 text-left">
//               <div className="text-xl sm:text-2xl font-extrabold text-white">
//                 {title}
//               </div>
//               <div className="mt-1 text-sm text-white/80">{punchline}</div>
//             </div>

//             <div className="mt-8 flex items-center justify-between text-sm">
//               <span className="text-white/70">Tap to Pay</span>
//               <span className="text-white/90 flex items-center gap-1">
//                 <Sparkles size={16} color={isGold ? metal.glow : green[200]} />
//                 Enabled
//               </span>
//             </div>
//           </motion.div>

//           {/* Apply CTA */}
//           <button
//             onClick={onApply}
//             className="mt-6 w-full py-2.5 rounded-lg font-semibold text-black"
//             style={{ background: `linear-gradient(90deg, ${green[100]}, ${green[400]})` }}
//           >
//             Apply in Minutes
//           </button>
//         </motion.div>
//       </motion.div>
//     </TiltCard>
//   );
// };

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-x-hidden">
      {/* Header */}
{/* Fixed Header */}
<header
  className="fixed top-0 left-0 right-0 z-[100] backdrop-blur supports-[backdrop-filter]:backdrop-blur bg-black/70"
  style={{ borderBottom: `1px solid ${green[800]}` }}
>
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <span className="text-2xl font-bold tracking-tight text-white">Online Finance</span>

    <div className="flex items-center gap-3">
      <button
        onClick={() => navigate("/login")}
        className="px-4 py-2 rounded-lg font-medium bg-transparent border border-white/15 hover:border-white/30 transition text-white focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        Login
      </button>

      <button
        onClick={() => navigate("/savings-calculator")}
        className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold text-black transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
        style={{
          background: `linear-gradient(90deg, ${green[100]}, ${green[400]})`,
          boxShadow: "0 8px 28px rgba(0, 255, 133, 0.25)",
        }}
        aria-label="Open Savings Calculator"
      >
        Savings Calculator
      </button>
    </div>
  </div>
</header>

{/* Spacer to offset fixed header height (adjust if your header is taller) */}
<div className="h-[72px]" />

      {/* Hero */}
      <section className="relative flex items-center justify-center w-full min-h-[88vh]">
        {/* Background video with reduced intensity */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: "none" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
              
              filter: "saturate(0.8)",
              pointerEvents: "none",
            }}
            src={VIDEO_URL}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.9))", zIndex: 1, opacity: 0.8 }}
          />
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-center text-center w-full px-6 max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
           Buy Smarter with{" "}
           <span className="text-emerald-400">Zero Cost EMI</span>
         </h2>
         <p className="text-gray-400 text-lg max-w-2xl">
           No credit card required. Get your EMI card instantly, shop with ease,
           and pay later in flexible installments — without interest.
         </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-7 py-3 rounded-lg font-bold shadow-lg text-black"
              style={{ background: `linear-gradient(90deg, ${green[100]}, ${green[400]})`, letterSpacing: "0.02em" }}
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-7 py-3 rounded-lg font-bold bg-white/10 hover:bg-white/15 transition text-white"
            >
              Sign In
            </button>
          </div>
        </motion.div>
      </section>

{/* Platform Features row (elevated, minimal, attractive) */}
<motion.section
  className="relative w-full overflow-hidden"
  style={{ background: green[900], borderTop: `1px solid ${green[800]}` }}
  variants={containerStagger}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
>
  {/* Soft moving accent beam */}
  <motion.div
    aria-hidden
    className="pointer-events-none absolute -top-24 left-1/2 w-[120vw] h-64 -translate-x-1/2 opacity-10"
    style={{
      background:
        "radial-gradient(closest-side, rgba(0,255,133,0.35), rgba(0,255,133,0.08), transparent 70%)",
      filter: "blur(22px)",
    }}
    animate={{ x: ["-10%", "10%", "-10%"] }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="max-w-7xl mx-auto px-6 py-14">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Built to be Fast, Secure, Effortless
      </h2>
      <div
        className="mx-auto mt-3 h-px w-32"
        style={{
          background: `linear-gradient(90deg, transparent, ${green[200]}66, transparent)`,
        }}
      />
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {features.map((f, idx) => {
        const Icon = f.icon;
        return (
          <motion.div
            key={f.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative rounded-xl p-6 backdrop-blur bg-white/[0.04] border border-white/10 overflow-hidden"
            style={{ boxShadow: "0 10px 40px -18px rgba(0,0,0,0.6)" }}
          >
            {/* Soft animated background gradient (replaces rotating border) */}
            <motion.div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,133,0.12), rgba(0,169,80,0.08) 40%, rgba(255,255,255,0.04) 70%)",
                backgroundSize: "200% 200%",
                opacity: 0.35,
                filter: "blur(0.5px)",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
            />

            {/* Icon with soft pulse */}
            <div className="relative flex items-center justify-center mb-4">
              <motion.div
                className="absolute"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 999,
                  background:
                    "radial-gradient(closest-side, rgba(0,255,133,0.22), transparent 70%)",
                  filter: "blur(3px)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="relative flex items-center justify-center rounded-full border border-white/10"
                style={{
                  width: 56,
                  height: 56,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.3))",
                }}
              >
                <Icon size={28} color={green[200]} />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white text-center">{f.title}</h3>
            <p className="mt-2 text-white/80 text-sm text-center">{f.desc}</p>

            {/* Subtle underline ticker */}
            <motion.div
              aria-hidden
              className="mt-5 h-px w-full overflow-hidden rounded"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            >
              <motion.div
                className="h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${green[200]}, transparent)`,
                }}
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: idx * 0.2,
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</motion.section>

      {/* Cards spotlight (highly animated, attractive, but minimal copy) */}
<motion.section
  className="w-full relative"
  style={{ background: green[900], borderTop: `1px solid ${green[800]}` }}
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Your Card, Your Edge</h2>
      <p className="text-white/70 mt-2">Two premium finishes. One seamless experience.</p>
    </div>

   <div className="space-y-12 max-w-6xl mx-auto px-4">
  <CardShowcaseMinimal
    variant="gold"
    title="Gold EMI Card"
    tagline="Effortless, everyday upgrades."
    details={["Instant access", "Zero-cost EMIs", "Smart budgets"]}
    ctaLabel="Apply for Gold"
    onCta={() => navigate("/register")}
  />
  <CardShowcaseMinimal
    variant="titanium"
    title="Titanium EMI Card"
    tagline="Premium limits. Priority perks."
    details={["Higher limits", "Priority support", "Exclusive offers"]}
    ctaLabel="Apply for Titanium"
    onCta={() => navigate("/register")}
  />
</div>
  </div>
</motion.section>
      {/* Footer */}
      <footer
        className="w-full py-6 text-center text-sm"
        style={{ background: green[900], color: "#fff", borderTop: `1px solid ${green[800]}` }}
      >
        © {new Date().getFullYear()} Online Finance. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;