import { useState } from "react";
import { T } from "../../config/theme";
import WatchVisual from "../common/WatchVisual";

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? T.white : T.bg2, border: `1px solid ${hovered ? T.gold+"55" : T.border}`, transition: "all 0.3s ease", cursor: "pointer", position: "relative", boxShadow: hovered ? "0 8px 32px rgba(168,131,74,0.12)" : "0 2px 8px rgba(0,0,0,0.04)" }}>
      {/* ... (Keep the exact same ProductCard JSX content here) ... */}
    </div>
  );
}