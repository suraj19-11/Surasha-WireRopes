import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/src/assets/Logo.webp"
              alt="Surasha Wireropes Logo"
              className="w-9 h-9 rounded-lg object-contain"
            />
            <span className="flex flex-col leading-none">
              <span style={{ fontFamily: "Poppins, Inter, sans-serif", fontWeight: 700, fontSize: "17px", color: "#0D1B2A", letterSpacing: "0.02em" }}>
                Surasha
              </span>
              <span style={{ fontFamily: "Poppins, Inter, sans-serif", fontWeight: 400, fontSize: "11px", color: "#E87722", letterSpacing: "0.05em" }}>
                WIREROPES
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" active={isActive("/")}>Home</NavLink>

            {/* Products with mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm transition-colors"
                style={{
                  color: isActive("/products") ? "#E87722" : "#1A1A1A",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  borderBottom: isActive("/products") ? "2px solid #E87722" : "2px solid transparent",
                }}
              >
                Products <ChevronDown size={14} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown */}
              {productsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] rounded-lg shadow-2xl py-3 px-2 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-2 duration-200"
                  style={{
                    backgroundColor: "#0D1B2A",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {[
                    { name: "Steel Wire Rope", param: "steel-wire-rope" },
                    { name: "SS Wire Rope (304/316)", param: "ss-wire-rope-304-316" },
                    { name: "PVC Coated Wire Rope", param: "pvc-coated-wire-rope" },
                    { name: "Galvanized Wire Rope", param: "galvanized-wire-rope" },
                    { name: "Strand Rope", param: "strand-rope" },
                    { name: "Strand Wire Rope", param: "strand-wire-rope" },
                    { name: "Ungalvanized Wire Rope", param: "ungalvanized-wire-rope" },
                    { name: "Stainless Steel Wire Rope", param: "stainless-steel-wire-rope" },
                  ].map((cat) => (
                    <Link
                      key={cat.param}
                      to={`/products?category=${cat.param}`}
                      className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 text-white hover:text-[#E87722] hover:bg-white/5 block"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" active={isActive("/about")}>About Us</NavLink>
            <NavLink to="/contact" active={isActive("/contact")}>Contact Us</NavLink>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:08045910872"
              className="flex items-center gap-1.5 text-sm"
              style={{ color: "#1A1A1A", fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={14} style={{ color: "#E87722" }} />
              <span style={{ fontWeight: 500 }}>08045910872</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full text-sm transition-all hover:scale-105"
              style={{
                backgroundColor: "#E87722",
                color: "#fff",
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-1.5 rounded-full text-xs"
              style={{ backgroundColor: "#E87722", color: "#fff", fontWeight: 600 }}
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "#0D1B2A" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t py-4 px-4 space-y-1"
          style={{ backgroundColor: "#fff", borderColor: "#E2E2E2" }}
        >
          <MobileNavLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/products" onClick={() => setMobileOpen(false)}>Products</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMobileOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</MobileNavLink>
          <div className="pt-3 border-t mt-3" style={{ borderColor: "#E2E2E2" }}>
            <a
              href="tel:08045910872"
              className="flex items-center gap-2 text-sm py-2"
              style={{ color: "#1A1A1A", fontWeight: 500 }}
            >
              <Phone size={14} style={{ color: "#E87722" }} /> 08045910872
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-sm transition-colors block"
      style={{
        color: active ? "#E87722" : "#1A1A1A",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        borderBottom: active ? "2px solid #E87722" : "2px solid transparent",
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2.5 px-3 rounded-md text-sm"
      style={{
        color: active ? "#E87722" : "#1A1A1A",
        backgroundColor: active ? "#FFF5EC" : "transparent",
        fontWeight: 500,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {children}
    </Link>
  );
}
