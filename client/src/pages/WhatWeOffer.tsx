import { CheckCircle2, Zap, Shield, Truck } from "lucide-react";
import { motion } from "framer-motion";

/**
 * What We Offer Page - Industrial Heritage Modernism
 * Service categories with unique styling and visual hierarchy
 * Design: Asymmetric layout, card-based design, hover animations
 */
export default function WhatWeOffer() {
  const services = [
    {
      id: 1,
      title: "Defense Vehicle Spare Parts",
      icon: Shield,
      color: "primary",
      description:
        "Specialized spare parts for military vehicle fleets with precision and reliability.",
      features: [
        "HINO vehicle components",
        "Defender spare parts",
        "Isuzu components",
        "LRV breakdown parts",
        "Critical components (Tyres, Batteries)",
      ],
      image: "/images/hero-industrial-parts.jpg",
    },
    {
      id: 2,
      title: "Logistics Support Program",
      icon: Truck,
      color: "accent",
      description:
        "Comprehensive supply chain management for government and defense sector organizations.",
      features: [
        "305 Spare Depot operations",
        "Inventory management",
        "Timely delivery systems",
        "Quality assurance",
        "Documentation & compliance",
      ],
      image: "/images/hero-defense-logistics.jpg",
    },
    {
      id: 3,
      title: "General Order Supplies",
      icon: Zap,
      color: "primary",
      description:
        "Sourcing and procurement of essential items for industrial and government clients.",
      features: [
        "Cost-effective procurement",
        "Diverse product range",
        "Vendor management",
        "Bulk ordering capabilities",
        "Customized solutions",
      ],
      image: "/images/hero-defense-logistics.jpg",
    },
    {
      id: 4,
      title: "International Projects",
      icon: CheckCircle2,
      color: "accent",
      description:
        "Complex UN and international project support with proven execution capability.",
      features: [
        "UN project coordination",
        "Global supply chain",
        "Multi-stakeholder management",
        "Regulatory compliance",
        "Strategic partnerships",
      ],
      image: "/images/hero-industrial-parts.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-concrete overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
            What We Offer
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up">
            Comprehensive solutions tailored to your supply chain and logistics needs
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 animate-fade-in-up"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <motion.div
                  className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      Service {service.id}
                    </span>
                  </div>

                  <h2 className="text-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-accent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-foreground text-primary-foreground clip-diagonal">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            Why Choose A & A Company
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "30+ Years Experience",
                description: "Decades of proven excellence in defense and industrial logistics",
              },
              {
                title: "Trusted Partners",
                description: "Serving Pakistan Army, PIA, DHA Karachi, and SCIPA with distinction",
              },
              {
                title: "Quality Assured",
                description: "Strict adherence to international supply standards and regulations",
              },
              {
                title: "Specialized Expertise",
                description: "Deep knowledge of HINO, Defender, and Isuzu vehicle systems",
              },
              {
                title: "Reliable Delivery",
                description: "On-time, accurate supply chain management you can depend on",
              },
              {
                title: "Scalable Solutions",
                description: "From small orders to large-scale logistics programs",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 border-l-4 border-accent hover:border-primary-foreground transition-colors duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <h3 className="text-display text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-primary-foreground/80">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
