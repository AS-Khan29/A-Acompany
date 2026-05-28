import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Navigation Component - Industrial Heritage Modernism
 * Sticky header with asymmetric layout
 * Features: Mobile-responsive hamburger menu, steel blue accent, minimal design
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "What We Offer", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-background border-b-2 border-steel shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/">
          <a className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <div className="w-10 h-10 bg-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/90">
              <span className="text-primary-foreground font-bold text-lg">A&A</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-display text-lg font-bold text-foreground">A & A Company</h1>
              <p className="text-xs text-muted-foreground">Defense Contractor</p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.25 }}
            >
              <Link href={item.href}>
                <a className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group inline-block">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded transition-colors"
          whileTap={{ scale: 0.92 }}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t-2 border-steel bg-secondary overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.2 }}
                >
                  <Link href={item.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-3 px-2 rounded hover:bg-background/50"
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
