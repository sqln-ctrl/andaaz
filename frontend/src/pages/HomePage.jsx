import { useState, useEffect } from "react";
import { T } from "../config/theme";
import { PRODUCTS, FEATURES, TESTIMONIALS } from "../data/mockData";
import WatchVisual from "../components/common/WatchVisual";
import ProductCard from "../components/product/ProductCard";

function Hero({ setCurrentPage }) {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(x => x + 1), 3000); return () => clearInterval(t); }, []);
  const featured = PRODUCTS[tick % 3];

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: `radial-gradient(ellipse at 30% 50%, #f5ede0 0%, ${T.bg} 65%)`, position: "relative", overflow: "hidden", paddingTop: 72 }}>
       {/* ... (Keep Hero JSX here) ... */}
    </section>
  );
}

export default function HomePage({ setCurrentPage, onAddToCart, onViewDetail }) {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />
      {/* Features bar */}
      <div style={{ background: T.white, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
          {/* ... (Keep Features mapping JSX here) ... */}
      </div>
      {/* Featured products */}
      <div style={{ background: T.bg, padding: "80px 24px" }}>
          {/* ... (Keep Featured mapping JSX here) ... */}
      </div>
      {/* Testimonials */}
      <div style={{ background: T.bg2, padding: "80px 24px", borderTop: `1px solid ${T.border}` }}>
          {/* ... (Keep Testimonial mapping JSX here) ... */}
      </div>
      {/* Newsletter */}
      <div style={{ background: `linear-gradient(135deg, #f0e8d8 0%, ${T.bg} 100%)`, padding: "80px 24px", borderTop: `1px solid ${T.gold}22` }}>
          {/* ... (Keep Newsletter JSX here) ... */}
      </div>
    </div>
  );
}