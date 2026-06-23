import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

const GRADES = ["SS 304", "SS 304L", "SS 316", "SS 316L", "Galvanized Steel", "Mild Steel"];
const COATINGS = ["Uncoated", "PVC Coated", "Nylon Coated", "Galvanized", "Black PVC"];
const CATS = [
  "Steel Wire Rope",
  "SS Wire Rope (304/316)",
  "PVC Coated Wire Rope",
  "Galvanized Wire Rope",
  "Strand Rope",
  "Strand Wire Rope",
  "Ungalvanized Wire Rope",
  "Stainless Steel Wire Rope"
];

const PARAM_TO_CAT_MAP: Record<string, string> = {
  "steel-wire-rope": "Steel Wire Rope",
  "ss-wire-rope-304-316": "SS Wire Rope (304/316)",
  "pvc-coated-wire-rope": "PVC Coated Wire Rope",
  "galvanized-wire-rope": "Galvanized Wire Rope",
  "strand-rope": "Strand Rope",
  "strand-wire-rope": "Strand Wire Rope",
  "ungalvanized-wire-rope": "Ungalvanized Wire Rope",
  "stainless-steel-wire-rope": "Stainless Steel Wire Rope",
};

const matchCategory = (productCat: string, filterCat: string): boolean => {
  const pCat = productCat.toLowerCase();
  const fCat = filterCat.toLowerCase();
  
  if (fCat === "steel wire rope") {
    return pCat.includes("steel wire rope") || pCat.includes("ss wire rope") || pCat.includes("galvanized wire rope") || pCat.includes("ungalvanized wire rope");
  }
  if (fCat === "ss wire rope (304/316)" || fCat === "ss wire rope") {
    return pCat === "ss wire rope" || pCat === "stainless steel wire rope";
  }
  if (fCat === "stainless steel wire rope") {
    return pCat === "stainless steel wire rope";
  }
  if (fCat === "pvc coated wire rope") {
    return pCat === "pvc coated wire rope";
  }
  if (fCat === "galvanized wire rope") {
    return pCat === "galvanized wire rope";
  }
  if (fCat === "strand rope" || fCat === "strand wire rope") {
    return pCat === "strand rope";
  }
  if (fCat === "ungalvanized wire rope") {
    return pCat === "ungalvanized wire rope";
  }
  
  return pCat.includes(fCat);
};

function parseDiameter(d: string): number {
  const match = d.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedCoatings, setSelectedCoatings] = useState<string[]>([]);
  const [diameterRange, setDiameterRange] = useState<[number, number]>([1, 16]);
  const [priceRange, setPriceRange] = useState<[number, number]>([5, 200]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const catParams = searchParams.getAll("category");
  const selectedCats = useMemo(() => {
    return catParams
      .map((p) => PARAM_TO_CAT_MAP[p])
      .filter((c): c is string => !!c);
  }, [catParams]);

  const toggle = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const toggleCat = (cat: string) => {
    const param = Object.keys(PARAM_TO_CAT_MAP).find((k) => PARAM_TO_CAT_MAP[k] === cat);
    if (!param) return;

    const currentParams = searchParams.getAll("category");
    let nextParams: string[];
    if (currentParams.includes(param)) {
      nextParams = currentParams.filter((p) => p !== param);
    } else {
      nextParams = [...currentParams, param];
    }

    const newParams = new URLSearchParams(searchParams);
    newParams.delete("category");
    nextParams.forEach((p) => newParams.append("category", p));
    setSearchParams(newParams);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const dia = parseDiameter(p.diameter);
      const inDia = dia === 0 || (dia >= diameterRange[0] && dia <= diameterRange[1]);
      const inPrice = p.priceNum >= priceRange[0] && p.priceNum <= priceRange[1];
      const inCat = selectedCats.length === 0 || selectedCats.some((c) => matchCategory(p.category, c));
      const inGrade = selectedGrades.length === 0 || selectedGrades.some((g) => p.grade.includes(g));
      const inCoating = selectedCoatings.length === 0 || selectedCoatings.some((c) => (p.coating || "Uncoated").toLowerCase().includes(c.toLowerCase()));
      return inDia && inPrice && inCat && inGrade && inCoating;
    });
  }, [selectedCats, selectedGrades, selectedCoatings, diameterRange, priceRange]);

  const clearAll = () => {
    setSelectedGrades([]);
    setSelectedCoatings([]);
    setDiameterRange([1, 16]);
    setPriceRange([5, 200]);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("category");
    setSearchParams(newParams);
  };

  const hasFilters = selectedCats.length > 0 || selectedGrades.length > 0 || selectedCoatings.length > 0 || diameterRange[0] > 1 || diameterRange[1] < 16 || priceRange[0] > 5 || priceRange[1] < 200;

  const SidebarContent = () => (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex items-center justify-between mb-5">
        <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1A1A1A" }}>Filter Products</h3>
        {hasFilters && (
          <button onClick={clearAll} className="text-xs" style={{ color: "#E87722" }}>Clear All</button>
        )}
      </div>

      {/* Category */}
      <FilterGroup title="Category">
        {CATS.map((c) => (
          <CheckItem key={c} label={c} checked={selectedCats.includes(c)} onChange={() => toggleCat(c)} />
        ))}
      </FilterGroup>

      {/* Material Grade */}
      <FilterGroup title="Material Grade">
        {GRADES.map((g) => (
          <CheckItem key={g} label={g} checked={selectedGrades.includes(g)} onChange={() => toggle(selectedGrades, setSelectedGrades, g)} />
        ))}
      </FilterGroup>

      {/* Diameter slider */}
      <FilterGroup title={`Diameter: ${diameterRange[0]}mm – ${diameterRange[1]}mm`}>
        <div className="space-y-2 mt-1">
          <input
            type="range"
            min={1} max={16} step={1}
            value={diameterRange[0]}
            onChange={(e) => setDiameterRange([Number(e.target.value), Math.max(Number(e.target.value), diameterRange[1])])}
            className="w-full accent-orange-500"
          />
          <input
            type="range"
            min={1} max={16} step={1}
            value={diameterRange[1]}
            onChange={(e) => setDiameterRange([Math.min(diameterRange[0], Number(e.target.value)), Number(e.target.value)])}
            className="w-full accent-orange-500"
          />
        </div>
      </FilterGroup>

      {/* Price slider */}
      <FilterGroup title={`Price: ₹${priceRange[0]} – ₹${priceRange[1]}/m`}>
        <div className="space-y-2 mt-1">
          <input
            type="range"
            min={5} max={200} step={5}
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), Math.max(Number(e.target.value), priceRange[1])])}
            className="w-full accent-orange-500"
          />
          <input
            type="range"
            min={5} max={200} step={5}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([Math.min(priceRange[0], Number(e.target.value)), Number(e.target.value)])}
            className="w-full accent-orange-500"
          />
        </div>
      </FilterGroup>

      {/* Coating */}
      <FilterGroup title="Coating">
        {COATINGS.map((c) => (
          <CheckItem key={c} label={c} checked={selectedCoatings.includes(c)} onChange={() => toggle(selectedCoatings, setSelectedCoatings, c)} />
        ))}
      </FilterGroup>

      <button
        onClick={() => setSidebarOpen(false)}
        className="w-full py-2.5 rounded-lg text-sm font-semibold mt-2 lg:hidden"
        style={{ backgroundColor: "#E87722", color: "#fff" }}
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero banner */}
      <div
        className="relative flex flex-col justify-end pb-8 pt-16 px-4"
        style={{ backgroundColor: "#0D1B2A", minHeight: "200px" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <nav className="flex items-center gap-2 text-xs mb-4" style={{ color: "#8A9BAD" }}>
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span style={{ color: "#E87722" }}>Our Products</span>
          </nav>
          <h1
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", lineHeight: 1.2 }}
          >
            Our Products
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#8A9BAD" }}>
            Complete range of stainless steel, galvanized, PVC coated and strand wire ropes — 1mm to 16mm
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <p className="text-sm" style={{ color: "#555" }}>{filtered.length} products found</p>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm"
            style={{ borderColor: "#E2E2E2", color: "#1A1A1A" }}
          >
            <SlidersHorizontal size={14} /> Filters {hasFilters && <span className="w-2 h-2 rounded-full bg-orange-500" />}
          </button>
        </div>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-5 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <span style={{ fontWeight: 700 }}>Filters</span>
                <button onClick={() => setSidebarOpen(false)}><X size={18} /></button>
              </div>
              <SidebarContent />
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 p-5 rounded-xl border" style={{ borderColor: "#E2E2E2" }}>
              <SidebarContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm" style={{ color: "#555" }}>Showing <strong>{filtered.length}</strong> products</p>
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p style={{ color: "#555", fontSize: "16px" }}>No products match your filters.</p>
                <button onClick={clearAll} className="mt-3 text-sm" style={{ color: "#E87722" }}>Clear all filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 pb-5 border-b" style={{ borderColor: "#E2E2E2" }}>
      <h4 className="text-xs uppercase mb-3" style={{ color: "#8A9BAD", letterSpacing: "0.1em", fontWeight: 600 }}>{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="accent-orange-500 w-3.5 h-3.5" />
      <span className="text-sm" style={{ color: checked ? "#E87722" : "#555555" }}>{label}</span>
    </label>
  );
}
