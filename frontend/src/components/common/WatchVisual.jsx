export default function WatchVisual({ color, size = 160 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" style={{ filter: "drop-shadow(0 6px 20px rgba(100,80,40,0.18))" }}>
      {/* ... (Keep the exact same SVG content here from your original file) ... */}
      <rect x="62" y="2"   width="36" height="28" rx="8" fill="#d4c8b4" stroke="#bfb09a" strokeWidth="1.5" />
      <rect x="68" y="5"   width="24" height="3"  rx="1.5" fill="#c8bca8" />
      <rect x="68" y="10"  width="24" height="2"  rx="1"   fill="#c8bca8" />
      <rect x="68" y="14"  width="24" height="2"  rx="1"   fill="#c8bca8" />
      <rect x="62" y="130" width="36" height="28" rx="8" fill="#d4c8b4" stroke="#bfb09a" strokeWidth="1.5" />
      <rect x="68" y="143" width="24" height="3"  rx="1.5" fill="#c8bca8" />
      <rect x="68" y="149" width="24" height="2"  rx="1"   fill="#c8bca8" />
      <rect x="24" y="26"  width="112" height="108" rx="28" fill="#e8e0d4" stroke="#cfc8bc" strokeWidth="2" />
      <rect x="26" y="28"  width="108" height="104" rx="26" fill="url(#caseGradL)" />
      <rect x="148" y="68" width="10"  height="24"  rx="4"  fill="#d0c8bc" stroke="#bfb09a" strokeWidth="1" />
      <circle cx="80" cy="80" r="46" fill="#f8f4ee" />
      <circle cx="80" cy="80" r="44" fill="url(#dialGradL)" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = angle * Math.PI / 180;
        const isMain = i % 3 === 0;
        return <line key={i}
          x1={80 + 38 * Math.sin(rad)} y1={80 - 38 * Math.cos(rad)}
          x2={80 + (isMain ? 30 : 33) * Math.sin(rad)} y2={80 - (isMain ? 30 : 33) * Math.cos(rad)}
          stroke={isMain ? color : "#ccc"} strokeWidth={isMain ? 2.5 : 1} strokeLinecap="round" />;
      })}
      <line x1="80" y1="80" x2="80"  y2="50" stroke={color} strokeWidth="3"   strokeLinecap="round" />
      <line x1="80" y1="80" x2="100" y2="85" stroke="#555"  strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="80" x2="68"  y2="98" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="80" cy="80" r="4" fill={color} />
      <circle cx="80" cy="80" r="2" fill="#f8f4ee" />
      <text x="80" y="66" textAnchor="middle" fill={color} fontSize="6" fontFamily="serif" letterSpacing="1">ANDAAZ</text>
      <defs>
        <radialGradient id="caseGradL" cx="35%" cy="30%">
          <stop offset="0%"   stopColor="#f0ebe2" />
          <stop offset="100%" stopColor="#d8d0c4" />
        </radialGradient>
        <radialGradient id="dialGradL" cx="40%" cy="35%">
          <stop offset="0%"   stopColor="#fffdf8" />
          <stop offset="100%" stopColor="#f0ece4" />
        </radialGradient>
      </defs>
    </svg>
  );
}