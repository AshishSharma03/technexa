"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

const ContactPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. Our team will contact you within 24 business hours.",
        })
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-background"
    >
      <Helmet>
        <title>Contact Us | Technexra - Get in Touch</title>
        <meta
          name="description"
          content="Contact Technexra today to discuss your digital transformation needs. Schedule a consultation with our expert team."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-32 bg-card bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,62,62,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Let's Work Together</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              Have a project in mind? We'd love to hear from you. Get in touch with our team to discuss how we can help
              transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600/20">
                <MapPin className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Location</h3>
              <p className="text-gray-400 leading-relaxed">
                13010 Brokers Tip Lane
                <br />
                Frisco, TX 75035
                <br />
                United States
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <a
                href="tel:5869242234"
                className="text-gray-400 hover:text-red-500 transition-colors text-lg font-semibold"
              >
                (586) 924-2234
              </a>
              <p className="text-gray-500 text-sm mt-2">Mon-Fri, 9 AM - 6 PM (CT)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a
                href="mailto:hello@technexra.com"
                className="text-gray-400 hover:text-red-500 transition-colors font-semibold break-all"
              >
                hello@technexra.com
              </a>
              <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-400">
                Fill out the form below and one of our team members will get back to you promptly.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-lg border border-red-600/20 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 bg-card border border-red-600/20 rounded-lg focus:border-red-600/50 focus:ring-1 focus:ring-red-600/30 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full p-3 bg-card border border-red-600/20 rounded-lg focus:border-red-600/50 focus:ring-1 focus:ring-red-600/30 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full p-3 bg-card border border-red-600/20 rounded-lg focus:border-red-600/50 focus:ring-1 focus:ring-red-600/30 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and how we can help..."
                  required
                  rows="6"
                  className="w-full p-3 bg-card border border-red-600/20 rounded-lg focus:border-red-600/50 focus:ring-1 focus:ring-red-600/30 focus:outline-none resize-none transition-all duration-300"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-background border-t border-red-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-red-600/20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-red-500" />
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>
            <p className="text-gray-400 text-lg">Monday - Friday: 9:00 AM - 6:00 PM (Central Time)</p>
            <p className="text-gray-500 text-sm mt-2">We respond to all inquiries within 24 business hours</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage
