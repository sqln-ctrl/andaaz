import { useState } from "react";
import { T } from "./config/theme";

// Import Layouts
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartDrawer from "./components/layout/CartDrawer";

// Import Pages
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ProductDetail from "./pages/ProductDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);

  const onAddToCart = (product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };
  
  const onUpdateQty = (id, qty) => {
    if (qty < 1) { setCart(prev => prev.filter(i => i.id !== id)); return; }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };
  
  const onViewDetail = (product) => { 
    setDetailProduct(product); 
    setCurrentPage("detail"); 
  };
  
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const renderPage = () => {
    if (currentPage === "detail" && detailProduct) return <ProductDetail product={detailProduct} onAddToCart={onAddToCart} onBack={() => setCurrentPage("collection")} />;
    if (currentPage === "collection") return <CollectionPage onAddToCart={onAddToCart} onViewDetail={onViewDetail} />;
    if (currentPage === "about") return <AboutPage />;
    if (currentPage === "contact") return <ContactPage />;
    return <HomePage setCurrentPage={setCurrentPage} onAddToCart={onAddToCart} onViewDetail={onViewDetail} />;
  };

  return (
    <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: T.text }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: ${T.bg}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${T.bg2}; }
        ::-webkit-scrollbar-thumb { background: ${T.border2}; border-radius: 3px; }
        input::placeholder, textarea::placeholder { color: ${T.border2}; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
      
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>{renderPage()}</main>
      
      <Footer setCurrentPage={setCurrentPage} />
      
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onUpdateQty={onUpdateQty} onRemove={id => setCart(prev => prev.filter(i => i.id !== id))} />}
    </div>
  );
}