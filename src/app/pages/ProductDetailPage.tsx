import { useState } from "react";
import { Link, useParams } from "react-router";
import { Star, Share2, CheckCircle2, Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

const SPOOL_IMAGE = "https://images.unsplash.com/photo-1758965364875-e090e5423d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMHdpcmUlMjByb3BlJTIwc3Bvb2wlMjBpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3ODA4NTEzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug) ?? products[33]; // default to SS Wire Rope 6mm

  const [activeThumb, setActiveThumb] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4);
  const relatedProducts = related.length >= 2 ? related : fallbackRelated;

  const specs = [
    ["Material Grade", product.grade],
    ["Diameter", product.diameter],
    ...(product.construction ? [["Construction", product.construction]] : []),
    ...(product.core ? [["Core Type", product.core]] : []),
    ...(product.length ? [["Length", product.length]] : []),
    ...(product.coating ? [["Coating", product.coating]] : []),
    ...(product.tensile ? [["Tensile Strength", product.tensile]] : []),
    ...(product.hardness ? [["Hardness", product.hardness]] : []),
    ...(product.moq ? [["Min. Order Qty", product.moq]] : []),
    ...(product.application ? [["Application", product.application]] : []),
    ["Country of Origin", "India"],
    ["Service Location", "All Over India"],
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#F8F7F4", borderBottom: "1px solid #E2E2E2" }} className="py-3 px-4">
        <nav className="max-w-7xl mx-auto flex items-center gap-2 text-xs" style={{ color: "#8A9BAD" }}>
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/products" className="hover:text-orange-500 transition-colors">{product.category}</Link>
          <span>›</span>
          <span style={{ color: "#1A1A1A" }}>{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Image Gallery */}
          <div className="lg:sticky lg:top-24 self-start">
            <div
              className="w-full rounded-2xl flex items-center justify-center overflow-hidden mb-4"
              style={{ backgroundColor: "#F0F4F8", aspectRatio: "1/1" }}
            >
              <img
                src={activeThumb === 0 ? SPOOL_IMAGE : SPOOL_IMAGE}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mb-4">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className="w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors"
                  style={{ borderColor: activeThumb === i ? "#E87722" : "#E2E2E2", backgroundColor: "#F0F4F8" }}
                >
                  <img src={SPOOL_IMAGE} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Share */}
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: "#8A9BAD" }}>Share:</span>
              <a href="#" className="p-2 rounded-lg hover:bg-gray-100" style={{ color: "#555" }}><Facebook size={14} /></a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(product.name + " - Surasha Wireropes")}`}
                className="p-2 rounded-lg hover:bg-gray-100 text-xs font-medium"
                style={{ color: "#25D366" }}
              >
                WhatsApp
              </a>
              <button onClick={() => navigator.share?.({ title: product.name, url: window.location.href })} className="p-2 rounded-lg hover:bg-gray-100" style={{ color: "#555" }}>
                <Share2 size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div>
            {/* Category badge */}
            <span
              className="inline-block px-3 py-1 rounded-full text-xs uppercase font-semibold mb-3"
              style={{ backgroundColor: "#FFF5EC", color: "#E87722", letterSpacing: "0.05em" }}
            >
              {product.category}
            </span>

            <h1
              className="mb-3"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 30px)", color: "#1A1A1A", lineHeight: 1.2 }}
            >
              {product.name}
            </h1>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={14} fill={s <= 4 ? "#E87722" : "none"} stroke="#E87722" />
                ))}
              </div>
              <span className="text-xs" style={{ color: "#8A9BAD" }}>4.3 avg · 4 reviews</span>
            </div>

            {/* Price block */}
            <div className="p-5 rounded-xl mb-5" style={{ backgroundColor: "#F8F7F4" }}>
              <p
                className="mb-2"
                style={{ color: "#E87722", fontWeight: 700, fontSize: "32px", fontFamily: "Poppins, sans-serif" }}
              >
                {product.price}
              </p>
              <button
                className="px-4 py-2 rounded-lg border text-sm font-semibold transition-colors hover:bg-orange-50"
                style={{ borderColor: "#E87722", color: "#E87722" }}
              >
                Get Latest Price
              </button>
            </div>

            {/* Key specs strip */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[product.diameter, product.construction, product.grade, product.core, product.moq].filter(Boolean).map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "#1A2E45", color: "#fff" }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Specs table */}
            <div className="rounded-xl overflow-hidden border mb-6" style={{ borderColor: "#E2E2E2" }}>
              <table className="w-full text-sm">
                <tbody>
                  {specs.map(([key, val], i) => (
                    <tr key={key} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#F8F7F4" }}>
                      <td className="px-4 py-2.5 font-medium w-2/5" style={{ color: "#555555", borderBottom: "1px solid #E2E2E2" }}>{key}</td>
                      <td className="px-4 py-2.5" style={{ color: "#1A1A1A", borderBottom: "1px solid #E2E2E2" }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-sm uppercase mb-2 font-semibold" style={{ color: "#8A9BAD", letterSpacing: "0.1em" }}>Description</h3>
              <p className="text-sm" style={{ color: "#555555", lineHeight: 1.8 }}>
                {product.name} is a high-quality wire rope manufactured in India, providing excellent corrosion resistance and tensile strength.
                {product.construction && ` The ${product.construction} strand construction offers superior flexibility`} for lifting, hoisting, rigging, and industrial applications.
                {product.coating ? ` Available with ${product.coating} coating for added protection.` : " Available in both uncoated and galvanized variants."}
                {product.moq && ` Supplied in minimum order of ${product.moq}.`}
              </p>
            </div>

            {/* CTA block */}
            <div className="space-y-3 mb-6">
              {product.moq && (
                <p className="text-xs" style={{ color: "#8A9BAD" }}>Minimum Order: {product.moq}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-navy-50"
                  style={{ borderColor: "#1A2E45", color: "#1A2E45" }}
                  onClick={() => document.getElementById("callback-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Request Callback
                </button>
                <Link
                  to="/contact"
                  className="flex-1 py-3 rounded-xl font-semibold text-sm text-center transition-all hover:brightness-110"
                  style={{ backgroundColor: "#E87722", color: "#fff" }}
                >
                  Yes! I Am Interested
                </Link>
              </div>
              <a
                href="tel:08045910872"
                className="flex items-center justify-center gap-2 text-sm font-medium py-2"
                style={{ color: "#E87722" }}
              >
                <Phone size={14} /> Call: 08045910872
              </a>
            </div>

            {/* Trust grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl" style={{ backgroundColor: "#F8F7F4" }}>
              {["Pan India Delivery", "GST Invoice Provided", "Test Certificate on Request", "TrustSEAL Verified"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs" style={{ color: "#555" }}>
                  <CheckCircle2 size={14} style={{ color: "#E87722", flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Callback form */}
        <div id="callback-form" className="mt-16">
          <div className="max-w-lg mx-auto p-6 rounded-2xl border" style={{ borderColor: "#E2E2E2" }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A1A" }} className="mb-4">
              Request a Callback
            </h3>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 size={40} className="mx-auto mb-3" style={{ color: "#E87722" }} />
                <p style={{ color: "#1A1A1A", fontWeight: 600 }}>Callback requested!</p>
                <p className="text-sm mt-1" style={{ color: "#555" }}>We'll call you within 1 business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-3"
              >
                <input
                  required
                  className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                  style={{ borderColor: "#E2E2E2" }}
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  type="tel"
                  className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                  style={{ borderColor: "#E2E2E2" }}
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <textarea
                  rows={3}
                  className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400 resize-none"
                  style={{ borderColor: "#E2E2E2" }}
                  placeholder="Additional message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-sm"
                  style={{ backgroundColor: "#E87722", color: "#fff" }}
                >
                  Request Callback
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2
            className="mb-6"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "24px", color: "#1A1A1A" }}
          >
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
