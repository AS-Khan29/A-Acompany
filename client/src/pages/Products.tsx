import { useState } from "react";
import { Filter, Package } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Products Page - Industrial Heritage Modernism
 * Product categorization with filtering and grid layout
 * Design: Modular card system, category tabs, hover effects
 */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "vehicle", label: "Vehicle Parts" },
    { id: "components", label: "Components" },
    { id: "supplies", label: "General Supplies" },
    { id: "industrial", label: "Industrial Items" },
  ];

  const products = [
    {
      category: "vehicle",
      name: "HINO Engine Components",
      description: "Complete range of HINO engine parts and assemblies",
      specs: ["Turbos", "Fuel Injectors", "Gaskets", "Seals"],
    },
    {
      category: "vehicle",
      name: "Defender Transmission Parts",
      description: "High-quality transmission components for Defender vehicles",
      specs: ["Gearbox", "Clutch Kits", "Bearings", "Shafts"],
    },
    {
      category: "vehicle",
      name: "Isuzu Brake Systems",
      description: "Complete brake system components for Isuzu fleet vehicles",
      specs: ["Brake Pads", "Rotors", "Calipers", "Hydraulics"],
    },
    {
      category: "components",
      name: "Batteries & Electrical",
      description: "High-performance batteries and electrical components",
      specs: ["Heavy-Duty Batteries", "Alternators", "Starters", "Wiring"],
    },
    {
      category: "components",
      name: "Tyres & Wheels",
      description: "Durable tyres and wheel assemblies for defense vehicles",
      specs: ["All-Terrain Tyres", "Wheel Rims", "Suspension", "Bearings"],
    },
    {
      category: "components",
      name: "Filters & Fluids",
      description: "Maintenance filters and specialized fluids",
      specs: ["Oil Filters", "Air Filters", "Hydraulic Oil", "Coolants"],
    },
    {
      category: "supplies",
      name: "Fasteners & Hardware",
      description: "Industrial-grade fasteners and hardware supplies",
      specs: ["Bolts", "Nuts", "Washers", "Rivets"],
    },
    {
      category: "supplies",
      name: "Lubricants & Greases",
      description: "Specialized lubricants for military equipment",
      specs: ["Engine Oil", "Grease", "Transmission Fluid", "Coolant"],
    },
    {
      category: "industrial",
      name: "Steel Storage Containers",
      description: "Heavy-duty steel buckets and containers",
      specs: ["20L Buckets", "50L Drums", "100L Containers", "Custom Sizes"],
    },
    {
      category: "industrial",
      name: "Packaging Materials",
      description: "Industrial packaging and protective materials",
      specs: ["Boxes", "Wrapping", "Padding", "Labels"],
    },
    {
      category: "supplies",
      name: "Safety Equipment",
      description: "Personal protective equipment and safety gear",
      specs: ["Helmets", "Gloves", "Vests", "Goggles"],
    },
    {
      category: "components",
      name: "Suspension Parts",
      description: "Complete suspension system components",
      specs: ["Shock Absorbers", "Springs", "Bushings", "Stabilizers"],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-concrete overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
            Our Products
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up">
            Comprehensive range of defense vehicle parts and industrial supplies
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 animate-fade-in-up"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b-2 border-steel/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-primary" />
            <h2 className="text-display text-xl font-bold text-foreground">Filter by Category</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border-2 border-steel/20"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          <p className="text-sm text-foreground/60 mt-4">
            Showing {filteredProducts.length} product(s)
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {},
              }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={`${product.name}-${index}`}
                  className="group bg-white border-2 border-steel/20 hover:border-primary hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${(index % 9) * 0.05}s` }}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b-2 border-steel/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Package size={20} className="text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {categories.find((c) => c.id === product.category)?.label}
                      </span>
                    </div>
                    <h3 className="text-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <div>
                      <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                        Available Items
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-secondary px-3 py-1 rounded-full text-foreground/70 border-1 border-steel/10"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-secondary/50 border-t-2 border-steel/10 group-hover:bg-primary/5 transition-colors">
                    <motion.button
                      className="w-full text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <Package size={48} className="mx-auto text-foreground/30 mb-4" />
              <p className="text-lg text-foreground/60">No products found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-primary-foreground clip-diagonal-reverse">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Need Custom Products?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up">
            We can source and supply specialized items tailored to your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-foreground font-semibold rounded-lg transition-colors"
          >
            Contact Us for Custom Orders
          </a>
        </div>
      </section>
    </div>
  );
}
