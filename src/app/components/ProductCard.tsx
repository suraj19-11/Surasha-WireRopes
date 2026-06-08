import { Link } from "react-router";
import type { Product } from "../data/products";

const badgeStyles: Record<string, { bg: string; color: string }> = {
  orange: { bg: "#E87722", color: "#fff" },
  navy: { bg: "#1A2E45", color: "#fff" },
  teal: { bg: "#0E7490", color: "#fff" },
};

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const badge = badgeStyles[product.badgeColor] || badgeStyles.orange;

  return (
    <div
      className="group bg-white rounded-xl border flex flex-col transition-all duration-200 hover:-translate-y-1 w-full"
      style={{
        borderColor: "#E2E2E2",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#E87722";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(232,119,34,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#E2E2E2";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
      }}
    >
      {/* Image placeholder */}
      <div
        className="aspect-square rounded-t-xl flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#F0F4F8" }}
      >
        <WireRopeSVG />
        <div
          className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            width: "100%",
            height: "3px",
            bottom: 0,
            left: 0,
            backgroundColor: "#E87722",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <p
          className="leading-snug"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: compact ? "13px" : "14px",
            color: "#1A1A1A",
            lineHeight: 1.4,
          }}
        >
          {product.name}
        </p>

        <div className="flex flex-wrap gap-1.5">
          <span
            className="px-2 py-0.5 rounded-full text-xs"
            style={{ backgroundColor: badge.bg, color: badge.color, fontWeight: 500 }}
          >
            {product.badge}
          </span>
          <span
            className="px-2 py-0.5 rounded-full text-xs"
            style={{ backgroundColor: "#1A2E45", color: "#fff", fontWeight: 500 }}
          >
            {product.diameter}
          </span>
        </div>

        <div className="mt-auto">
          <p
            className="mb-0.5"
            style={{ color: "#E87722", fontWeight: 700, fontSize: "17px", fontFamily: "Inter, sans-serif" }}
          >
            {product.price}
          </p>
          {product.moq && (
            <p style={{ color: "#8A9BAD", fontSize: "11px" }}>Min. {product.moq}</p>
          )}
        </div>

        <Link
          to={`/products/${product.slug}`}
          className="block text-center py-2 rounded-lg text-sm font-semibold transition-all hover:brightness-110 hover:scale-[1.02] mt-1"
          style={{ backgroundColor: "#E87722", color: "#fff", fontFamily: "Inter, sans-serif" }}
        >
          Get Best Quote
        </Link>
      </div>
    </div>
  );
}

function WireRopeSVG() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity={0.4}>
      <circle cx="32" cy="32" r="26" stroke="#8A9BAD" strokeWidth="3" fill="none" />
      <circle cx="32" cy="32" r="14" stroke="#8A9BAD" strokeWidth="3" fill="none" />
      <circle cx="32" cy="32" r="5" fill="#8A9BAD" />
      <circle cx="32" cy="6" r="3" fill="#8A9BAD" />
      <circle cx="32" cy="58" r="3" fill="#8A9BAD" />
      <circle cx="6" cy="32" r="3" fill="#8A9BAD" />
      <circle cx="58" cy="32" r="3" fill="#8A9BAD" />
      <path d="M32 18 Q38 25 32 32 Q26 25 32 18Z" fill="#8A9BAD" opacity="0.5" />
      <path d="M46 32 Q39 38 32 32 Q39 26 46 32Z" fill="#8A9BAD" opacity="0.5" />
      <path d="M18 32 Q25 26 32 32 Q25 38 18 32Z" fill="#8A9BAD" opacity="0.5" />
      <path d="M32 46 Q26 39 32 32 Q38 39 32 46Z" fill="#8A9BAD" opacity="0.5" />
    </svg>
  );
}
