import { useState } from "react";
import { T } from "../config/theme";
import { PRODUCTS, CATEGORIES } from "../data/mockData";
import ProductCard from "../components/product/ProductCard";

export default function CollectionPage({ onAddToCart, onViewDetail }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  let filtered = PRODUCTS
    .filter(p => category === "All" || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  if (sort === "low")    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high")   filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh", background: T.bg }}>
      {/* ... (Keep the exact same CollectionPage JSX content here) ... */}
    </div>
  );
}
