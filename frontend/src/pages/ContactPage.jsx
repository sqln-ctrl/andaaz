import { useState } from "react";
import { T } from "../config/theme";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputStyle = { width: "100%", padding: "12px 16px", background: T.white, border: `1px solid ${T.border2}`, color: T.text, fontSize: 14, outline: "none", boxSizing: "border-box" };

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh", background: T.bg }}>
       {/* ... (Keep the exact same ContactPage JSX content here) ... */}
    </div>
  );
}