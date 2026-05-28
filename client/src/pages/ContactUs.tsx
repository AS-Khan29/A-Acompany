import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Contact Us Page - Industrial Heritage Modernism
 * Animated contact form with map and company information
 * Design: Two-column layout, form animations, modern contact details
 */
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-concrete overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-display text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up">
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 animate-fade-in-up"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1 animate-slide-in-left"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-display text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              {/* Phone */}
              <motion.div
                className="mb-8 p-6 bg-white border-2 border-steel/20 hover:border-primary transition-all duration-300 group"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-display text-lg font-bold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+923212472470"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      0321-2472470
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="mb-8 p-6 bg-white border-2 border-steel/20 hover:border-primary transition-all duration-300 group"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-display text-lg font-bold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:tbz37@hotmail.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      tbz37@hotmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                className="p-6 bg-white border-2 border-steel/20 hover:border-primary transition-all duration-300 group"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-display text-lg font-bold text-foreground mb-2">Addresses</h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      F-95, 2nd Floor, Ruby Plaza, Preedy Street, Saddar, Karachi
                    </p>
                    <p className="text-sm text-foreground/70">
                      26-F, 2nd Floor, Sector C, Askari 5, Malir Cantt, Karachi
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                className="mt-8 p-6 bg-secondary border-l-4 border-accent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <h4 className="text-display text-lg font-bold text-foreground mb-3">Business Hours</h4>
                <p className="text-sm text-foreground/70 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-foreground/70">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-sm text-foreground/70">Sunday: Closed</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 animate-slide-in-right"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="bg-white p-8 border-2 border-steel/20 shadow-lg">
                <h2 className="text-display text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      className="mb-6 p-4 bg-accent/10 border-2 border-accent rounded-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-accent font-semibold">Thank you! Your message has been sent successfully.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-steel/20 focus:border-primary focus:outline-none transition-colors rounded-lg bg-background"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-steel/20 focus:border-primary focus:outline-none transition-colors rounded-lg bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-steel/20 focus:border-primary focus:outline-none transition-colors rounded-lg bg-background"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-steel/20 focus:border-primary focus:outline-none transition-colors rounded-lg bg-background"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-steel/20 focus:border-primary focus:outline-none transition-colors rounded-lg bg-background"
                    >
                      <option value="">Select a subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-steel/20 focus:border-primary focus:outline-none transition-colors rounded-lg bg-background resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-3 text-base font-semibold"
                  >
                    Send Message
                    <Send size={20} />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-primary/20 p-8 rounded-lg border-2 border-primary-foreground/20 animate-fade-in-up">
              <h3 className="text-display text-2xl font-bold mb-4">Saddar Office</h3>
              <p className="mb-4 leading-relaxed">
                F-95, 2nd Floor, Ruby Plaza, Preedy Street, Saddar, Karachi
              </p>
              <p className="text-sm text-primary-foreground/80">
                Our main office location serving central Karachi and surrounding areas.
              </p>
            </div>

            {/* Location 2 */}
            <div className="bg-primary/20 p-8 rounded-lg border-2 border-primary-foreground/20 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-display text-2xl font-bold mb-4">Malir Office</h3>
              <p className="mb-4 leading-relaxed">
                26-F, 2nd Floor, Sector C, Askari 5, Malir Cantt, Karachi
              </p>
              <p className="text-sm text-primary-foreground/80">
                Our operations center handling logistics and supply chain management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
