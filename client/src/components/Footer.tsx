import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

/**
 * Footer Component - Industrial Heritage Modernism
 * Minimal footer with contact info and navigation links
 */
const footerColVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-foreground text-primary-foreground mt-20 border-t-4 border-accent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={footerColVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h3 className="text-display text-lg font-bold mb-4">A & A Company</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Excellence in Supply Chain & Logistics Since 1993
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={footerColVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
              ].map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link href={link.href}>
                    <a className="hover:text-accent transition-colors duration-300 inline-block hover:translate-x-1">
                      {link.label}
                    </a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={footerColVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+923212472470" className="hover:text-accent transition-colors duration-300">
                  0321-2472470
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:tbz37@hotmail.com" className="hover:text-accent transition-colors duration-300">
                  tbz37@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </motion.div>

          {/* Specializations */}
          <motion.div variants={footerColVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <h4 className="font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-sm">
              {["HINO Parts", "Defender Parts", "Isuzu Parts", "General Orders"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t-2 border-accent/30 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/70">
            <p>&copy; {currentYear} A & A Company. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Ensuring Operational Readiness, Component by Component</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
