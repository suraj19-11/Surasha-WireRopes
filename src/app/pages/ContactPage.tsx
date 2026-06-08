import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle2, Facebook, Twitter, Linkedin, Mail, MessageSquare } from "lucide-react";
import { products } from "../data/products";

export function ContactPage() {
  const [form, setForm] = useState({
    salutation: "Mr",
    name: "",
    phone: "",
    email: "",
    company: "",
    product: "",
    diameter: "",
    quantity: "",
    grade: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="relative flex flex-col justify-end pb-10 pt-20 px-4"
        style={{ backgroundColor: "#0D1B2A", minHeight: "220px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <nav className="flex items-center gap-2 text-xs mb-4" style={{ color: "#8A9BAD" }}>
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span style={{ color: "#E87722" }}>Contact Us</span>
          </nav>
          <h1
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 46px)", color: "#fff", lineHeight: 1.2 }}
          >
            Contact Us
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#8A9BAD" }}>
            Send us an enquiry or call directly — we respond within 1 business day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Contact Info */}
          <div>
            <div
              className="rounded-2xl border p-6 mb-6"
              style={{ borderColor: "#E2E2E2", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <h2 className="mb-5" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A1A" }}>
                Surasha Wireropes
              </h2>
              <div className="space-y-3.5 mb-6">
                {[
                  { label: "Owner", value: "Dhiraj Singh" },
                  { label: "Phone", value: "08045910872", href: "tel:08045910872" },
                  { label: "Response Rate", value: "77%" },
                  { label: "GST No.", value: "27DHJPS7234B1Z7" },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-sm" style={{ color: "#8A9BAD" }}>{label}</span>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-orange-500" style={{ color: "#E87722" }}>{value}</a>
                    ) : (
                      <span className="text-sm font-medium" style={{ color: "#1A1A1A" }}>{value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t" style={{ borderColor: "#E2E2E2" }}>
                <h4 className="text-xs uppercase mb-2 font-semibold" style={{ color: "#8A9BAD", letterSpacing: "0.1em" }}>Address</h4>
                <address className="not-italic text-sm" style={{ color: "#555555", lineHeight: 1.7 }}>
                  Ground Floor, A 11, Mastan Industrial Estate,<br />
                  Navghar Phatk Road, Bhayander East,<br />
                  Thane – 401105, Maharashtra, India
                </address>
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden mb-6 flex items-center justify-center"
              style={{ height: "280px", backgroundColor: "#F0F4F8", border: "1px solid #E2E2E2" }}
            >
              <div className="text-center p-8">
                <div className="text-4xl mb-3">📍</div>
                <p className="font-medium mb-1" style={{ color: "#1A1A1A" }}>Bhayander East, Thane – 401105</p>
                <p className="text-sm mb-4" style={{ color: "#555" }}>Coords: 19.29942, 72.85628</p>
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

            {/* Social + buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:enquiry@surashawireropes.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-semibold hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#E2E2E2", color: "#1A1A1A" }}
              >
                <Mail size={14} /> Send Email
              </a>
              <a
                href="sms:08045910872"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-semibold hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#E2E2E2", color: "#1A1A1A" }}
              >
                <MessageSquare size={14} /> Send SMS
              </a>
              <div className="flex gap-2">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg flex items-center justify-center border hover:bg-orange-50 hover:border-orange-400 transition-colors"
                    style={{ borderColor: "#E2E2E2", color: "#555" }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Enquiry Form */}
          <div>
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "#E2E2E2", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <h3
                className="mb-5"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px", color: "#1A1A1A" }}
              >
                Send Us Your Requirements
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "#E87722" }} />
                  <h4 style={{ fontWeight: 700, fontSize: "18px", color: "#1A1A1A" }} className="mb-2">Enquiry Submitted!</h4>
                  <p className="text-sm mb-4" style={{ color: "#555" }}>We'll get back to you within 1 business day.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm" style={{ color: "#E87722" }}>
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Salutation + Name */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Salutation</label>
                      <select
                        className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                        style={{ borderColor: "#E2E2E2" }}
                        value={form.salutation}
                        onChange={(e) => setForm({ ...form, salutation: e.target.value })}
                      >
                        {["Mr", "Ms", "Mrs", "Dr"].map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Full Name *</label>
                      <input
                        required
                        className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                        style={{ borderColor: "#E2E2E2" }}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Phone Number *</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                        style={{ borderColor: "#E2E2E2" }}
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                        style={{ borderColor: "#E2E2E2" }}
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Company / Organization</label>
                    <input
                      className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                      style={{ borderColor: "#E2E2E2" }}
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Product Interested In *</label>
                    <select
                      required
                      className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                      style={{ borderColor: "#E2E2E2", color: form.product ? "#1A1A1A" : "#999" }}
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                    >
                      <option value="">Select a product...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Diameter Required</label>
                      <select
                        className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                        style={{ borderColor: "#E2E2E2", color: form.diameter ? "#1A1A1A" : "#999" }}
                        value={form.diameter}
                        onChange={(e) => setForm({ ...form, diameter: e.target.value })}
                      >
                        <option value="">Select...</option>
                        {["0.8mm", "1mm", "2mm", "3mm", "4mm", "5mm", "6mm", "8mm", "10mm", "12mm", "16mm", "Other"].map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Quantity (meters) *</label>
                      <input
                        required
                        type="number"
                        className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                        style={{ borderColor: "#E2E2E2" }}
                        placeholder="e.g. 1000"
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Material Grade Preference</label>
                    <select
                      className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400"
                      style={{ borderColor: "#E2E2E2", color: form.grade ? "#1A1A1A" : "#999" }}
                      value={form.grade}
                      onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    >
                      <option value="">Select...</option>
                      {["SS 304", "SS 316", "Galvanized", "Mild Steel", "No Preference"].map((g) => <option key={g}>{g}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs block mb-1 font-medium" style={{ color: "#555" }}>Message / Special Requirements</label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2.5 border rounded-lg text-sm outline-none focus:border-orange-400 resize-none"
                      style={{ borderColor: "#E2E2E2" }}
                      placeholder="Any specific requirements, delivery timeline, etc."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:brightness-110"
                    style={{ backgroundColor: "#E87722", color: "#fff" }}
                  >
                    Send Enquiry →
                  </button>

                  <p className="text-xs text-center" style={{ color: "#8A9BAD" }}>
                    Your information is only used to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
