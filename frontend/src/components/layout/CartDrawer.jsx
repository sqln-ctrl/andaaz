import { T } from "../../config/theme";
import WatchVisual from "../common/WatchVisual";

export default function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  const total = cart.reduce((s, item) => s + item.price * item.qty, 0);
  
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
       {/* ... (Keep the exact same CartDrawer JSX content here) ... */}
    </div>
  );
}