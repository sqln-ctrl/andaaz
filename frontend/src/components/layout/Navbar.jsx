import { useState, useEffect } from "react";
import { T } from "../../config/theme";

export default function Navbar({ cartCount, onCartOpen, currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,248,244,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.border}` : "none",
      transition: "all 0.4s ease", padding: "0 24px",
    }}>
      {/* ... (Keep the exact same Navbar JSX content here) ... */}
    </nav>
  );
}