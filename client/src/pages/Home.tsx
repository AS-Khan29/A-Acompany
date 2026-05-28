import { Link } from "wouter";
import { ArrowRight, Shield, Truck, Cog, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

/**
 * Home Page - Industrial Heritage Modernism
 * Hero section with animations, service overview, and company value proposition
 * Design: Asymmetric layout, diagonal cuts, parallax scrolling effects
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-concrete">
        {/* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/hero-industrial-parts.jpg"
            alt="Industrial parts warehouse"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-slide-in-left">
              <div className="mb-4 flex items-center gap-2">
                <div className="w-12 h-1 bg-accent"></div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Since 1993
                </span>
              </div>

              <h1 className="text-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Ensuring Operational Readiness
              </h1>

              <p className="text-lg text-foreground/80 mb-8 max-w-lg leading-relaxed">
                30+ years of excellence in defense vehicle spare parts and general order supplies. Trusted by Pakistan Army, PIA, DHA Karachi, and SCIPA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <a>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-base transition-shadow duration-300 hover:shadow-lg">
                        Explore Services
                        <ArrowRight size={20} />
                      </Button>
                    </motion.div>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="outline" className="border-2 border-foreground px-8 py-6 text-base transition-all duration-300 hover:shadow-md">
                        Get in Touch
                      </Button>
                    </motion.div>
                  </a>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-steel/20">
                <div>
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-foreground/60">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">4+</p>
                  <p className="text-sm text-foreground/60">Major Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-sm text-foreground/60">Reliability</p>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:block animate-slide-in-right">
              <img
                src="/images/abstract-industrial-pattern.jpg"
                alt="Industrial blueprint pattern"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Provide
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: Shield,
                title: "Defense Vehicle Parts",
                description: "Specialized spare parts for HINO, Defender, and Isuzu fleets",
              },
              {
                icon: Truck,
                title: "Logistics Support",
                description: "Reliable supply chain management for government and industrial clients",
              },
              {
                icon: Cog,
                title: "General Order Supplies",
                description: "Comprehensive procurement of essential items and components",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Strict adherence to supply standards mandated by COD and PIA",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-white border-2 border-steel/20 hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-display text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-foreground text-primary-foreground relative overflow-hidden clip-diagonal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 opacity-10 bg-blueprint"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact A & A Company today to discuss your supply chain and logistics needs.
          </p>
          <Link href="/contact">
            <a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-accent hover:bg-accent/90 text-foreground gap-2 px-8 py-6 text-base transition-shadow duration-300 hover:shadow-xl">
                  Get Started
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
            </a>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
