import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Star, ChevronRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";


const HERO_IMAGE = "https://images.unsplash.com/photo-1644238017851-21f15062c213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2lyZSUyMHJvcGUlMjBmYWN0b3J5JTIwc3RlZWx8ZW58MXx8fHwxNzgwODUxMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const FACTORY_IMAGE = "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwd2lyZSUyMHJvcGUlMjBmYWN0b3J5JTIwc3RlZWx8ZW58MXx8fHwxNzgwODUxMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const SPOOL_IMAGE = "https://images.unsplash.com/photo-1758965364875-e090e5423d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdGVlbCUyMHdpcmUlMjByb3BlJTIwc3Bvb2wlMjBpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3ODA4NTEzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const whyItems = [
  { num: "01", title: "Direct Manufacturer Pricing", body: "Skip the middleman. Direct factory pricing on all orders above the minimum quantity." },
  { num: "02", title: "Wide Diameter Range", body: "From ultra-fine 0.8mm seal rope to heavy-duty 16mm strand rope — we cover every industrial need." },
  { num: "03", title: "Multiple Grade Options", body: "SS 304, SS 304L, SS 316, SS 316L, Galvanized, Mild Steel — choose the grade that fits your application." },
  { num: "04", title: "Pan India Delivery", body: "We ship all products across India. Bulk reel orders dispatched from our Thane warehouse." },
  { num: "05", title: "TrustSEAL Verified", body: "Verified manufacturer on IndiaMART with GST registration since 2020 and import-export code." },
  { num: "06", title: "Test Certificates Available", body: "Lifeline wire ropes supplied with Indian test certificates as per industry safety standards." },
  { num: "07", title: "Custom Coating & Lengths", body: "PVC, nylon, galvanized, and uncoated finishes. Reel lengths from 100m to 5000m available to order." },
  { num: "08", title: "Fast Response", body: "77% response rate. Call us or send an enquiry — we respond the same business day." },
];

const industries = [
  { num: "01", name: "Construction", icon: "🏗️" },
  { num: "02", name: "Lifting & Rigging", icon: "🏋️" },
  { num: "03", name: "High Mast Lighting", icon: "💡" },
  { num: "04", name: "Safety & Lifeline", icon: "🦺" },
  { num: "05", name: "Marine & Offshore", icon: "⚓" },
  { num: "06", name: "Gym & Fitness Equipment", icon: "🏋️‍♂️" },
  { num: "07", name: "Infrastructure", icon: "🌉" },
  { num: "08", name: "General Engineering", icon: "⚙️" },
];

const reviews = [
  { initial: "S", color: "#E87722", name: "Siyyon Industries", location: "Pune, Maharashtra", stars: 5, date: "28 July 2025", product: "Sealing Wire", text: "Great product quality and prompt delivery." },
  { initial: "R", color: "#1A2E45", name: "Rohith", location: "Bellary, Karnataka", stars: 5, date: "11 August 2024", product: "Stainless Steel Wire Rope", text: "Excellent material grade and pricing." },
  { initial: "J", color: "#0E7490", name: "Jambu Bhambure", location: "Thane, Maharashtra", stars: 5, date: "11 November 2022", product: "Galvanized Wire Rope", text: "Reliable manufacturer, good communication." },
];

const productCategories = [
  {
    num: "01",
    title: "Stainless Steel Wire Ropes",
    sub: "SS 304 / SS 304L / SS 316 / SS 316L · 1mm to 16mm",
    body: "Rust-proof, high-tensile stainless wire ropes for marine, construction, and high mast applications. Available in 7×7 and 7×19 constructions.",
    img: HERO_IMAGE,
  },
  {
    num: "02",
    title: "Galvanized Wire Ropes",
    sub: "Zinc-coated · 1mm to 10mm · High corrosion resistance",
    body: "Hot-dip galvanized wire ropes offering excellent protection against rust and weathering. Ideal for outdoor rigging, lifting, and construction.",
    img: FACTORY_IMAGE,
  },
  {
    num: "03",
    title: "PVC Coated Wire Ropes",
    sub: "PVC / Nylon coated · 2mm to 16mm · Multiple colors",
    body: "Steel wire ropes with PVC or nylon outer coating for added protection, flexibility, and aesthetic finish. Used in gym equipment, balcony railings, and safety fencing.",
    img: SPOOL_IMAGE,
  },
  {
    num: "04",
    title: "Strand & Specialty Ropes",
    sub: "Strand rope · Ungalvanized · Highmast · Invisible Grill",
    body: "Specialized wire ropes for strand construction, high mast poles, lifelines, and invisible grill applications in SS 304 and 316 grades.",
    img: "https://images.unsplash.com/photo-1512859313038-7add54a1b420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwd2lyZSUyMHJvcGUlMjBmYWN0b3J5JTIwc3RlZWx8ZW58MXx8fHwxNzgwODUxMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const featuredIds = [34, 15, 1, 20, 33, 17, 24, 14, 6, 12];
const featuredProducts = featuredIds.map((id) => products.find((p) => p.id === id)!).filter(Boolean);

export function HomePage() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView(0.1);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center min-h-screen"
        style={{ minHeight: "100vh" }}
      >
        {/* Solid dark navy background */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#0D1B2A", zIndex: 0 }} />
        {/* Subtle overlay to keep text readable */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(13,27,42,0.45)" }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="mb-5 inline-block" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.20)", borderRadius: "50px", padding: "8px 16px" }}>
            <p
              className="tracking-widest uppercase text-xs"
              style={{ color: "#E87722", letterSpacing: "0.15em", fontWeight: 700, margin: 0 }}
            >
              Manufacturer &amp; Wholesaler - Thane, Maharashtra, India
            </p>
          </div>
          <h1
            className="mb-5"
            style={{
              color: "#fff",
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.15,
              fontFamily: "Poppins, Inter, sans-serif",
            }}
          >
            Precision Wire Ropes for Every Industrial Need
          </h1>
          <p className="mb-8 text-lg" style={{ color: "#ffffff", lineHeight: 1.7 }}>
            Stainless Steel · Galvanized · PVC Coated · Strand Wire Ropes.
            Direct manufacturer pricing. Pan India delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/products"
              className="px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "#E87722", color: "#fff" }}
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:bg-white hover:text-gray-900"
              style={{ border: "2px solid #fff", color: "#fff" }}
            >
              Get Best Quote
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {["✔ TrustSEAL Verified", "GST Registered", "Pan India Delivery", "Est. 2020, Thane"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm" style={{ color: "#fff" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ backgroundColor: "#F8F7F4" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>
            About Us
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2
                className="mb-5"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", color: "#1A1A1A", lineHeight: 1.2 }}
              >
                The Surasha Wireropes Edge
              </h2>
              <p className="mb-8" style={{ color: "#555555", lineHeight: 1.8 }}>
                Established in 2020 as a Proprietorship firm, Surasha Wireropes is a leading Manufacturer and Wholesaler of Stainless Steel Wire Ropes, Galvanized Wire Ropes, PVC Coated Wire Ropes, and Strand Ropes — proudly made in Thane, Maharashtra. We serve construction, marine, lifting, and industrial sectors across all of India.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Annual Turnover", value: "₹40L – 1.5Cr" },
                  { label: "Legal Status", value: "Proprietorship" },
                  { label: "GST Registered", value: "Since 2020" },
                  { label: "IEC Code", value: "DHJPS7234B" },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-xl border" style={{ borderColor: "#E2E2E2", backgroundColor: "#fff" }}>
                    <p className="text-xs uppercase mb-1" style={{ color: "#8A9BAD", letterSpacing: "0.1em" }}>{label}</p>
                    <p style={{ color: "#1A1A1A", fontWeight: 600, fontSize: "15px" }}>{value}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                style={{ color: "#E87722", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Read More About Us <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden h-52">
                <img src={FACTORY_IMAGE} alt="Factory" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-52">
                <img src={SPOOL_IMAGE} alt="Wire rope spool" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section style={{ backgroundColor: "#fff" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Our Products</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <h2
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1A1A", maxWidth: "500px", lineHeight: 1.2 }}
            >
              When It Comes to Wire Ropes, We Take the Lead
            </h2>
            <Link to="/contact" className="text-sm font-semibold shrink-0" style={{ color: "#E87722" }}>
              Get a Quote →
            </Link>
          </div>
          <p className="mb-12" style={{ color: "#555555", lineHeight: 1.7, maxWidth: "620px" }}>
            From lightweight 1mm galvanized wire to heavy-duty 16mm stainless steel strand rope — we manufacture and supply across all diameters, grades, and coatings.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productCategories.map((cat) => (
              <div
                key={cat.num}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ minHeight: "300px" }}
              >
                <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,42,0.92) 50%, rgba(13,27,42,0.4) 100%)" }} />
                <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                  <span className="text-4xl font-bold mb-1" style={{ color: "#E87722", opacity: 0.9, fontFamily: "Poppins, sans-serif" }}>{cat.num}</span>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "20px", fontFamily: "Poppins, sans-serif", lineHeight: 1.2 }} className="mb-1">{cat.title}</h3>
                  <p className="text-xs mb-2" style={{ color: "#E87722" }}>{cat.sub}</p>
                  <p className="text-sm mb-4" style={{ color: "#8A9BAD", lineHeight: 1.6 }}>{cat.body}</p>
                  <Link
                    to="/products"
                    className="flex items-center gap-1 text-sm font-semibold transition-colors hover:text-orange-400"
                    style={{ color: "#E87722" }}
                  >
                    View Range <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ROW ── */}
      <section style={{ backgroundColor: "#F8F7F4" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Featured Products</p>
          <h2
            className="mb-10"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 32px)", color: "#1A1A1A", lineHeight: 1.2 }}
          >
            Explore Our Most Popular Wire Ropes
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "thin", alignItems: "stretch" }}>
            {featuredProducts.map((product) => (
              <div key={product.id} style={{ width: "240px", minWidth: "240px", flexShrink: 0, display: "flex" }}>
                <ProductCard product={product} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ backgroundColor: "#0D1B2A" }} className="py-20 px-4" ref={whyRef}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>The Surasha Advantage</p>
          <h2
            className="mb-12"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 36px)", color: "#fff", lineHeight: 1.2 }}
          >
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyItems.map((item, i) => (
              <div
                key={item.num}
                className="p-5 rounded-xl border transition-all hover:-translate-y-1"
                style={{
                  borderColor: "#1A2E45",
                  backgroundColor: "#1A2E45",
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
                }}
              >
                <span className="text-2xl font-bold block mb-3" style={{ color: "#E87722", fontFamily: "Poppins, sans-serif" }}>{item.num}</span>
                <h4 className="mb-2" style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{item.title}</h4>
                <p className="text-sm" style={{ color: "#8A9BAD", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ backgroundColor: "#F8F7F4" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Our Service</p>
          <h2
            className="mb-12"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 36px)", color: "#1A1A1A", lineHeight: 1.2 }}
          >
            Industries That Rely on Surasha Wireropes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.num}
                className="flex items-center gap-3 p-4 rounded-xl border bg-white"
                style={{ borderColor: "#E2E2E2" }}
              >
                <span className="text-2xl">{ind.icon}</span>
                <div>
                  <span className="text-xs block" style={{ color: "#E87722", fontWeight: 600 }}>{ind.num}</span>
                  <span className="text-sm" style={{ color: "#1A1A1A", fontWeight: 500 }}>{ind.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RATINGS & REVIEWS ── */}
      <section style={{ backgroundColor: "#fff" }} className="py-20 px-4" id="reviews">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Client Feedback</p>
          <h2
            className="mb-12"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 36px)", color: "#1A1A1A", lineHeight: 1.2 }}
          >
            Trusted by Buyers Across India
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Rating summary */}
            <div className="p-6 rounded-2xl border" style={{ borderColor: "#E2E2E2" }}>
              <div className="text-center mb-5">
                <p className="text-6xl font-bold mb-1" style={{ color: "#1A1A1A", fontFamily: "Poppins, sans-serif" }}>4.3</p>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill={s <= 4 ? "#E87722" : "none"} stroke="#E87722" />
                  ))}
                </div>
                <p className="text-xs" style={{ color: "#8A9BAD" }}>Reviewed by 4 Users</p>
              </div>
              <div className="space-y-2">
                {[[5, 2], [4, 1], [3, 1], [2, 0], [1, 0]].map(([star, count]) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs w-4" style={{ color: "#555" }}>{star}★</span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#F0F0F0" }}>
                      <div className="h-full rounded-full" style={{ backgroundColor: "#E87722", width: `${(count / 4) * 100}%` }} />
                    </div>
                    <span className="text-xs w-4 text-right" style={{ color: "#555" }}>{count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t space-y-1.5" style={{ borderColor: "#E2E2E2" }}>
                {["User Satisfaction", "Quality", "Delivery"].map((m) => (
                  <div key={m} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#555" }}>{m}</span>
                    <span className="text-xs font-bold" style={{ color: "#E87722" }}>100%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((rev) => (
                <div key={rev.name} className="p-5 rounded-2xl border" style={{ borderColor: "#E2E2E2" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                      style={{ backgroundColor: rev.color }}
                    >
                      {rev.initial}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>{rev.name}</p>
                      <p className="text-xs" style={{ color: "#8A9BAD" }}>{rev.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="#E87722" stroke="#E87722" />)}
                  </div>
                  <p className="text-xs mb-2" style={{ color: "#8A9BAD" }}>{rev.date} · {rev.product}</p>
                  <p className="text-sm" style={{ color: "#555555", lineHeight: 1.6 }}>{rev.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ENQUIRY ── */}
      <section style={{ backgroundColor: "#0D1B2A" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Get Instant Quote</p>
              <h2
                className="mb-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 38px)", color: "#fff", lineHeight: 1.2 }}
              >
                Tell Us What You're Looking For
              </h2>
              <p className="mb-8" style={{ color: "#8A9BAD", lineHeight: 1.7 }}>
                We respond within 1 business day. Minimum order quantity is 1000 meters for most products.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "📞", text: "08045910872" },
                  { icon: "✉", text: "enquiry@surashawireropes.com" },
                  { icon: "📍", text: "Bhayander East, Thane – 401105" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "#8A9BAD" }}>
                    <span className="text-lg">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <QuickEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickEnquiryForm() {
  const [form, setForm] = useState({ salutation: "Mr", name: "", phone: "", email: "", product: "", diameter: "", quantity: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "#E87722" }} />
        <h3 style={{ fontWeight: 700, fontSize: "20px", color: "#1A1A1A" }} className="mb-2">Enquiry Sent!</h3>
        <p style={{ color: "#555" }}>We'll get back to you within 1 business day.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm" style={{ color: "#E87722" }}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Salutation</label>
          <select
            className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
            style={{ borderColor: "#E2E2E2", color: "#1A1A1A" }}
            value={form.salutation}
            onChange={(e) => setForm({ ...form, salutation: e.target.value })}
          >
            {["Mr", "Ms", "Mrs", "Dr"].map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Full Name *</label>
          <input
            required
            className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
            style={{ borderColor: "#E2E2E2" }}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Phone Number *</label>
        <input
          required
          type="tel"
          className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
          style={{ borderColor: "#E2E2E2" }}
          placeholder="Your phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Email Address</label>
        <input
          type="email"
          className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
          style={{ borderColor: "#E2E2E2" }}
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Product Interested In</label>
          <select
            className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
            style={{ borderColor: "#E2E2E2", color: form.product ? "#1A1A1A" : "#999" }}
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
          >
            <option value="">Select...</option>
            {["SS Wire Rope", "Galvanized Wire Rope", "PVC Coated Wire Rope", "Strand Rope", "Ungalvanized Wire Rope", "Other"].map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Diameter Needed</label>
          <select
            className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
            style={{ borderColor: "#E2E2E2", color: form.diameter ? "#1A1A1A" : "#999" }}
            value={form.diameter}
            onChange={(e) => setForm({ ...form, diameter: e.target.value })}
          >
            <option value="">Select...</option>
            {["1mm", "2mm", "3mm", "4mm", "5mm", "6mm", "8mm", "10mm", "12mm", "16mm"].map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Quantity Required (in meters)</label>
        <input
          type="number"
          className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
          style={{ borderColor: "#E2E2E2" }}
          placeholder="e.g. 1000"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
      </div>
      <div>
        <label className="text-xs block mb-1" style={{ color: "#555", fontWeight: 500 }}>Additional Message</label>
        <textarea
          rows={3}
          className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400 resize-none"
          style={{ borderColor: "#E2E2E2" }}
          placeholder="Any specific requirements..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:brightness-110 hover:scale-[1.01]"
        style={{ backgroundColor: "#E87722", color: "#fff" }}
      >
        Send Enquiry →
      </button>
    </form>
  );
}
