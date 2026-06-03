import { useState } from "react";
import { T } from "../../config/theme";
import { IconInstagram, IconTikTok, IconTwitterX, IconFacebook } from "../common/Icons";

export default function Footer({ setCurrentPage }) {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socials = [
    { key: "instagram", label: "Instagram", icon: <IconInstagram size={17} color={hoveredSocial === "instagram" ? T.gold : T.textSub} />, href: "#" },
    { key: "tiktok",    label: "TikTok",    icon: <IconTikTok    size={17} color={hoveredSocial === "tiktok"    ? T.gold : T.textSub} />, href: "#" },
    { key: "twitter",   label: "X",         icon: <IconTwitterX  size={17} color={hoveredSocial === "twitter"   ? T.gold : T.textSub} />, href: "#" },
    { key: "facebook",  label: "Facebook",  icon: <IconFacebook  size={17} color={hoveredSocial === "facebook"  ? T.gold : T.textSub} />, href: "#" },
  ];

  return (
    <footer style={{ background: T.bg3, borderTop: `1px solid ${T.border}`, padding: "60px 24px 32px" }}>
      {/* ... (Keep the exact same Footer JSX content here) ... */}
    </footer>
  );
}