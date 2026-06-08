import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D1B2A" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#1A2E45" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#E87722" strokeWidth="2.5" fill="none" />
                  <circle cx="11" cy="11" r="3" fill="#E87722" />
                  <path d="M11 3 Q14 7 11 11 Q8 7 11 3Z" fill="#8A9BAD" opacity="0.6" />
                  <path d="M19 11 Q15 14 11 11 Q15 8 19 11Z" fill="#8A9BAD" opacity="0.6" />
                  <path d="M3 11 Q7 8 11 11 Q7 14 3 11Z" fill="#8A9BAD" opacity="0.6" />
                </svg>
              </div>
              <span className="flex flex-col leading-none">
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "17px", color: "#fff" }}>Surasha</span>
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "11px", color: "#E87722", letterSpacing: "0.05em" }}>WIREROPES</span>
              </span>
            </div>
            <p className="text-sm mb-4" style={{ color: "#8A9BAD", lineHeight: 1.7 }}>
              Trusted wire rope manufacturer since 2020
            </p>
            <address className="not-italic text-sm mb-3" style={{ color: "#8A9BAD", lineHeight: 1.7 }}>
              Ground Floor, A 11, Mastan Industrial Estate,<br />
              Navghar Phatk Road, Bhayander East,<br />
              Thane – 401105, Maharashtra, India
            </address>
            <p className="text-sm mb-1" style={{ color: "#8A9BAD" }}>
              <span style={{ color: "#E87722" }}>📞</span> 08045910872
            </p>
            <p className="text-xs mt-2" style={{ color: "#8A9BAD" }}>GST: 27DHJPS7234B1Z7</p>
            <p className="text-xs" style={{ color: "#8A9BAD" }}>IEC: DHJPS7234B</p>
          </div>

          {/* Col 2 - Products */}
          <div>
            <h4 className="text-sm uppercase mb-5" style={{ color: "#fff", fontWeight: 600, letterSpacing: "0.1em" }}>Products</h4>
            <ul className="space-y-2.5">
              {["Steel Wire Rope", "SS Wire Rope (304/316)", "PVC Coated Wire Rope", "Galvanized Wire Rope", "Strand Rope", "Strand Wire Rope", "Ungalvanized Wire Rope", "Stainless Steel Wire Rope"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-sm transition-colors hover:text-orange-400" style={{ color: "#8A9BAD" }}>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-sm font-medium" style={{ color: "#E87722" }}>
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Quick Links */}
          <div>
            <h4 className="text-sm uppercase mb-5" style={{ color: "#fff", fontWeight: 600, letterSpacing: "0.1em" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Products", to: "/products" },
                { label: "Testimonials", to: "/#reviews" },
                { label: "Contact Us", to: "/contact" },
                { label: "Get Best Quote", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm transition-colors hover:text-orange-400" style={{ color: "#8A9BAD" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Connect */}
          <div>
            <h4 className="text-sm uppercase mb-5" style={{ color: "#fff", fontWeight: 600, letterSpacing: "0.1em" }}>Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:enquiry@surashawireropes.com"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border text-sm transition-colors hover:bg-white hover:text-gray-900"
                style={{ borderColor: "#8A9BAD", color: "#fff" }}
              >
                <Mail size={15} /> Send Email
              </a>
              <a
                href="tel:08045910872"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:brightness-110"
                style={{ backgroundColor: "#E87722", color: "#fff" }}
              >
                <Phone size={15} /> Call Now
              </a>
            </div>
            <p className="text-xs uppercase mb-3" style={{ color: "#8A9BAD", letterSpacing: "0.1em" }}>Share Us</p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-orange-500"
                  style={{ backgroundColor: "#1A2E45", color: "#8A9BAD" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "#1A2E45" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#8A9BAD" }}>
            © Surasha Wireropes. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "#8A9BAD" }}>
            Developed by Your Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
