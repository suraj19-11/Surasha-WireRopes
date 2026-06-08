import { Link } from "react-router";

const FACTORY_IMAGE = "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwd2lyZSUyMHJvcGUlMjBmYWN0b3J5JTIwc3RlZWx8ZW58MXx8fHwxNzgwODUxMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080";

const productRange = [
  {
    num: "01",
    title: "Stainless Steel Wire Ropes",
    body: "SS 304, 304L, 316, 316L grades, all diameters from 0.8mm to 16mm, 7×7 and 7×19 constructions",
  },
  {
    num: "02",
    title: "Galvanized Wire Ropes",
    body: "Hot-dip zinc coated, 1mm to 10mm, for outdoor and marine use",
  },
  {
    num: "03",
    title: "PVC & Nylon Coated Wire Ropes",
    body: "Black, gray, yellow coatings, for invisible grills, gym equipment, and balcony railings",
  },
  {
    num: "04",
    title: "Strand & Specialty Ropes",
    body: "Strand construction, ungalvanized, high mast pole ropes, lifeline ropes with test certificates",
  },
];

const stats = [
  { value: "50+", label: "Products Listed" },
  { value: "1000m", label: "Min. Order Qty" },
  { value: "4.3/5", label: "Customer Rating" },
  { value: "100%", label: "Quality Satisfaction" },
];

export function AboutPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="relative flex flex-col justify-end pb-10 pt-20 px-4"
        style={{ backgroundColor: "#0D1B2A", minHeight: "250px" }}
      >
        <img
          src={FACTORY_IMAGE}
          alt="Factory background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <nav className="flex items-center gap-2 text-xs mb-4" style={{ color: "#8A9BAD" }}>
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span style={{ color: "#E87722" }}>About Us</span>
          </nav>
          <h1
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 46px)", color: "#fff", lineHeight: 1.2 }}
          >
            About Surasha Wireropes
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#8A9BAD" }}>
            Manufacturers & Wholesalers of Wire Ropes — Thane, Maharashtra
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section style={{ backgroundColor: "#fff" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Our Story</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="mb-6"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#1A1A1A", lineHeight: 1.2 }}
              >
                Built on Precision. Trusted Across India.
              </h2>
              <div className="space-y-4" style={{ color: "#555555", lineHeight: 1.8 }}>
                <p>
                  Surasha Wireropes was established in 2020 as a Proprietorship firm by Dhiraj Singh in Thane, Maharashtra. From day one, our mission has been to deliver precision-engineered wire ropes directly from factory to customer — eliminating middlemen and ensuring competitive pricing without compromising on quality.
                </p>
                <p>
                  We are a TrustSEAL-verified manufacturer and wholesaler of Stainless Steel Wire Ropes, Galvanized Wire Ropes, PVC Coated Wire Ropes, and Strand Ropes. Our products serve construction companies, marine contractors, gym equipment manufacturers, and infrastructure projects across all of India.
                </p>
              </div>
            </div>

            {/* Company info card */}
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "#E2E2E2", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              <h3
                className="mb-5 pb-4 border-b"
                style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A", borderColor: "#E2E2E2" }}
              >
                Company Information
              </h3>
              <div className="space-y-3.5">
                {[
                  ["Nature of Business", "Manufacturer"],
                  ["GST Registration Date", "03-01-2020"],
                  ["Legal Status", "Proprietorship"],
                  ["Annual Turnover", "₹40L – 1.5 Cr"],
                  ["Import Export Code", "DHJPS7234B"],
                  ["GST No.", "27DHJPS7234B1Z7"],
                  ["IndiaMART Trust", "TrustSEAL Verified ✔"],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between gap-4">
                    <span className="text-sm" style={{ color: "#8A9BAD" }}>{key}</span>
                    <span
                      className="text-sm font-medium text-right"
                      style={{ color: val.includes("Verified") ? "#E87722" : "#1A1A1A" }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#F8F7F4" }} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-white border" style={{ borderColor: "#E2E2E2" }}>
                <p
                  className="mb-1"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 38px)", color: "#E87722" }}
                >
                  {s.value}
                </p>
                <p className="text-sm" style={{ color: "#555555" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section style={{ backgroundColor: "#fff" }} className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Meet the Founder</p>
          <div
            className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
            style={{ backgroundColor: "#1A2E45" }}
          >
            D
          </div>
          <h3
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "22px", color: "#1A1A1A" }}
            className="mb-1"
          >
            Dhiraj Singh
          </h3>
          <p className="text-sm mb-4" style={{ color: "#8A9BAD" }}>Owner & Founder, Surasha Wireropes</p>
          <a
            href="tel:08045910872"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-sm font-semibold transition-colors hover:bg-orange-50"
            style={{ borderColor: "#E87722", color: "#E87722" }}
          >
            📞 08045910872
          </a>
        </div>
      </section>

      {/* Product Range Overview */}
      <section style={{ backgroundColor: "#0D1B2A" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>What We Make</p>
          <h2
            className="mb-12"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#fff", lineHeight: 1.2 }}
          >
            Our Product Range
          </h2>
          <div className="space-y-0">
            {productRange.map((item, i) => (
              <div
                key={item.num}
                className="flex gap-6 py-7 border-t"
                style={{ borderColor: "#1A2E45" }}
              >
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "42px",
                    color: "#E87722",
                    opacity: 0.8,
                    lineHeight: 1,
                    minWidth: "60px",
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <h3
                    className="mb-2"
                    style={{ color: "#fff", fontWeight: 600, fontSize: "18px", fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#8A9BAD", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: "#F8F7F4" }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#E87722", letterSpacing: "0.15em" }}>Location</p>
          <h2
            className="mb-8"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3vw, 32px)", color: "#1A1A1A", lineHeight: 1.2 }}
          >
            Find Us in Thane
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div
                className="w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ height: "280px", backgroundColor: "#E2E2E2" }}
              >
                {/* Map placeholder */}
                <div className="text-center p-8">
                  <div className="text-4xl mb-3">📍</div>
                  <p className="font-medium mb-1" style={{ color: "#1A1A1A" }}>Surasha Wireropes</p>
                  <p className="text-sm mb-4" style={{ color: "#555" }}>
                    Ground Floor, A 11, Mastan Industrial Estate,<br />
                    Navghar Phatk Road, Bhayander East,<br />
                    Thane – 401105
                  </p>
                  <a
                    href="https://www.google.com/maps?q=19.29942,72.85628"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#E87722", color: "#fff" }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border" style={{ borderColor: "#E2E2E2" }}>
                <h4 className="font-semibold mb-2" style={{ color: "#1A1A1A" }}>Address</h4>
                <p className="text-sm" style={{ color: "#555", lineHeight: 1.7 }}>
                  Ground Floor, A 11, Mastan Industrial Estate,<br />
                  Navghar Phatk Road, Bhayander East,<br />
                  Thane – 401105, Maharashtra, India
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:08045910872"
                  className="p-4 rounded-xl bg-white border flex flex-col gap-1 hover:border-orange-400 transition-colors"
                  style={{ borderColor: "#E2E2E2" }}
                >
                  <span className="text-xs uppercase" style={{ color: "#8A9BAD" }}>Phone</span>
                  <span className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>08045910872</span>
                </a>
                <a
                  href="mailto:enquiry@surashawireropes.com"
                  className="p-4 rounded-xl bg-white border flex flex-col gap-1 hover:border-orange-400 transition-colors"
                  style={{ borderColor: "#E2E2E2" }}
                >
                  <span className="text-xs uppercase" style={{ color: "#8A9BAD" }}>Email</span>
                  <span className="text-sm font-semibold" style={{ color: "#1A1A1A" }}>Send Email</span>
                </a>
              </div>
              <Link
                to="/contact"
                className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: "#E87722", color: "#fff" }}
              >
                Send Enquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
