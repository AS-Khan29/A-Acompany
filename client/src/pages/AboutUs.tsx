import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * About Us Page - Industrial Heritage Modernism
 * Timeline with framer-motion: scroll-triggered entrances, animated line, staggered cards
 */
const timelineEvents = [
  {
    year: 1993,
    title: "Company Founded",
    description:
      "A & A Company established as a trusted general order supplies partner, beginning operations with the Central Ordnance Depot (COD) Karachi.",
    details:
      "Initial focus on providing essential ordnance-related items to the defense sector, establishing a foundation of reliability and precision.",
  },
  {
    year: 1998,
    title: "Diversification Begins",
    description:
      "Expanded portfolio to include supplies for Pakistan International Airlines (PIA), marking entry into the aviation sector.",
    details:
      "Successfully managed complex procurement requirements for one of the nation's largest public enterprises.",
  },
  {
    year: 2005,
    title: "Spare Parts Specialization",
    description:
      "Transitioned to become a specialist in defense vehicle spare parts, focusing on HINO, Defender, and Isuzu components.",
    details:
      "Developed deep expertise in supply chain management for military vehicle maintenance and operations.",
  },
  {
    year: 2012,
    title: "Logistics Support Program",
    description:
      "Successfully executed the Logistics Support Program (LSP) at the 305 Spare Depot in Karachi.",
    details:
      "Demonstrated capability to manage large-scale, time-sensitive defense logistics projects with precision and reliability.",
  },
  {
    year: 2015,
    title: "International Projects",
    description:
      "Contributed to global efforts through complex UN projects managed from the 602 Regionals Workshop Karachi.",
    details:
      "Expanded operational scope to include international supply chain management and coordination.",
  },
  {
    year: 2018,
    title: "DHA Partnership",
    description:
      "Began supplying auto parts and general order supplies to DHA Karachi, expanding into the private sector.",
    details:
      "Successfully adapted expertise to serve both government and private sector clients with equal precision.",
  },
  {
    year: 2020,
    title: "Industrial Supply Expansion",
    description:
      "Started supplying steel buckets to SCIPA Printing Press for ink storage, diversifying product portfolio.",
    details:
      "Demonstrated adaptability and capability to serve specialized industrial requirements.",
  },
  {
    year: 2024,
    title: "Digital Transformation",
    description:
      "Launched modern digital presence and enhanced supply chain visibility for clients.",
    details:
      "Committed to leveraging technology while maintaining the reliability and precision that defines A & A Company.",
  },
];

const coreValues = [
  { title: "Experience", description: "30+ years serving high-security defense and public sector organizations" },
  { title: "Reliability", description: "Proven track record executing large-scale, time-sensitive projects" },
  { title: "Specialization", description: "Deep expertise in defense vehicle logistics and spare parts supply" },
  { title: "Quality", description: "Strict adherence to supply standards mandated by COD and PIA" },
];

const easing = [0.4, 0, 0.2, 1] as const;

function TimelineItem({
  event,
  index,
  isLeft,
  expandedYear,
  setExpandedYear,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isLeft: boolean;
  expandedYear: number | null;
  setExpandedYear: (y: number | null) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-stretch md:items-center min-h-[120px] md:min-h-0"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {/* Left column: card when isLeft (desktop only) */}
      <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-10 order-1" : "order-1 justify-start"}`}>
        {isLeft && (
          <motion.div
            className="w-full md:max-w-md"
            variants={{
              hidden: { opacity: 0, x: -48 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easing } },
            }}
          >
            <TimelineCard event={event} expandedYear={expandedYear} setExpandedYear={setExpandedYear} align="right" />
          </motion.div>
        )}
      </div>

      {/* Center: timeline dot + line segment */}
      <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex flex-col items-center w-4">
        <motion.div
          className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg shrink-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        />
        {index < timelineEvents.length - 1 && (
          <motion.div
            className="w-0.5 flex-1 min-h-[48px] md:min-h-[72px] bg-gradient-to-b from-accent to-primary/60 rounded-full origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, ease: easing, delay: 0.1 }}
          />
        )}
      </div>

      {/* Right column: card when !isLeft (desktop only) */}
      <div className={`hidden md:flex w-1/2 ${!isLeft ? "justify-start pl-10 order-3" : "order-3"}`}>
        {!isLeft && (
          <motion.div
            className="w-full md:max-w-md"
            variants={{
              hidden: { opacity: 0, x: 48 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easing } },
            }}
          >
            <TimelineCard event={event} expandedYear={expandedYear} setExpandedYear={setExpandedYear} align="left" />
          </motion.div>
        )}
      </div>

      {/* Mobile: card below center (single column) */}
      <div className="md:hidden w-full mt-2 pl-10 flex-1">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easing } },
          }}
        >
          <TimelineCard event={event} expandedYear={expandedYear} setExpandedYear={setExpandedYear} align="left" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelineCard({
  event,
  expandedYear,
  setExpandedYear,
  align,
}: {
  event: (typeof timelineEvents)[0];
  expandedYear: number | null;
  setExpandedYear: (y: number | null) => void;
  align: "left" | "right";
}) {
  const easing = [0.4, 0, 0.2, 1] as const;
  return (
    <motion.div
      className={`bg-white p-6 md:p-8 border-2 border-steel/20 rounded-xl shadow-sm cursor-pointer group overflow-hidden ${align === "right" ? "md:text-right" : ""}`}
      whileHover={{ y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.12)", borderColor: "var(--color-primary)" }}
      transition={{ duration: 0.25, ease: easing }}
      onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
    >
      <div className={`flex items-center gap-2 mb-4 ${align === "right" ? "md:justify-end" : ""}`}>
        <span className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
          {String(event.year).slice(-2)}
        </span>
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">{event.year}</span>
      </div>
      <h3 className="text-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>
      <p className="text-foreground/70 text-sm leading-relaxed mb-4">{event.description}</p>
      <button
        type="button"
        className={`inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors ${align === "right" ? "md:ml-auto" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setExpandedYear(expandedYear === event.year ? null : event.year);
        }}
      >
        {expandedYear === event.year ? (
          <>Show Less <ChevronUp size={16} /></>
        ) : (
          <>Learn More <ChevronDown size={16} /></>
        )}
      </button>
      <AnimatePresence initial={false}>
        {expandedYear === event.year && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easing }}
          >
            <p className="text-sm text-foreground/60 leading-relaxed pt-4 mt-4 border-t-2 border-steel/10">
              {event.details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AboutUs() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 md:py-32 bg-concrete overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-timeline-vintage.jpg"
            alt="Company heritage"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            className="text-display text-5xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Heritage
          </motion.h1>
          <motion.p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Three decades of excellence, reliability, and precision in defense logistics and supply chain management.
          </motion.p>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ originX: 0.5 }}
          />
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-foreground/60 text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            From 1993 to today — key milestones that shaped A & A Company.
          </motion.p>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line (full height, behind content) */}
            <motion.div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent/80 to-primary -translate-x-1/2 hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: easing }}
              style={{ originY: 0 }}
            />

            <div className="space-y-0">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={event.year}
                  event={event}
                  index={index}
                  isLeft={index % 2 === 0}
                  expandedYear={expandedYear}
                  setExpandedYear={setExpandedYear}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <motion.section
        className="py-20 md:py-24 bg-foreground text-primary-foreground clip-diagonal-reverse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-display text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 md:p-8 border-b-4 border-accent rounded-lg hover:border-primary-foreground transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easing } },
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <h3 className="text-display text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              To ensure the continuous readiness and operational efficiency of our clients by delivering
              authenticated, high-quality supplies and specialized spare parts. We are committed to building
              lasting partnerships through reliability, precision, and unwavering dedication to excellence.
            </p>
            <motion.div
              className="w-16 h-1 bg-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0.5 }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
