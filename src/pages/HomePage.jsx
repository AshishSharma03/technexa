"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Button } from "@/components/ui/button"
import { Code, Zap, Search, BrainCircuit, CheckCircle, Package, Cpu, ChevronUp, ChevronDown } from "lucide-react"
import { useRef, useState, useEffect } from "react"

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

const services = [
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Intelligent systems that reduce manual effort and boost productivity across your organization.",
  },
  {
    icon: Code,
    title: "Custom Solutions",
    desc: "Bespoke software and platforms engineered to solve your unique challenges efficiently.",
  },
  {
    icon: Package,
    title: "Managed Services",
    desc: "Proactive management ensuring reliability, security, and continuous optimization.",
  },
]

const methodology = [
  {
    icon: Search,
    title: "1. Discover",
    desc: "We start by understanding your business, challenges, and automation opportunities through in-depth analysis.",
  },
  {
    icon: BrainCircuit,
    title: "2. Strategize",
    desc: "Our experts craft a tailored roadmap to automate workflows and eliminate manual processes.",
  },
  {
    icon: Zap,
    title: "3. Implement",
    desc: "Using agile methodologies, we build and deploy automated solutions with precision.",
  },
  {
    icon: CheckCircle,
    title: "4. Evolve",
    desc: "Ongoing support and optimization ensure your automation keeps delivering value.",
  },
]

const portfolio = [
  {
    title: "Enterprise Automation Platform",
    company: "Global Finance Corp",
    desc: "Reduced manual processes by 75%, saving 40,000+ hours annually",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "AI-Powered Customer Service",
    company: "E-Commerce Leader",
    desc: "Implemented intelligent chatbots handling 90% of support queries",
    image: "public/3d-rendering-biorobots-concept.jpg",
  },
  {
    title: "Cloud Migration & Optimization",
    company: "Healthcare Provider",
    desc: "Migrated legacy systems, reduced infrastructure costs by 60%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "IoT & Manufacturing Automation",
    company: "Manufacturing Giant",
    desc: "Implemented IoT sensors reducing production time by 50%",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    title: "Real-Time Data Analytics Dashboard",
    company: "Financial Services",
    desc: "Real-time insights platform processing 10M+ transactions daily",
    image: "public/3d-graph-computer-illustration.jpg",
  },
  {
    title: "Security & Compliance Platform",
    company: "Enterprise Tech Corp",
    desc: "Automated compliance checks reducing audit time by 80%",
    image: "public/10222603.jpg",
  },
]

const industries = [
  {
    name: "Finance & Fintech",
    desc: "Streamline payment processing, fraud detection, and automated financial reporting to reduce manual workload by 80%.",
  },
  {
    name: "Healthcare",
    desc: "Automate patient data management, billing optimization, and appointment workflows for seamless operations.",
  },
  {
    name: "E-commerce",
    desc: "Eliminate manual inventory management and order processing with intelligent automation systems.",
  },
  {
    name: "Manufacturing",
    desc: "Reduce production downtime through IoT integration and supply chain automation.",
  },
  {
    name: "SaaS & Tech",
    desc: "Automate customer support, provisioning, and analytics for faster time-to-value.",
  },
  {
    name: "Insurance",
    desc: "Automate claims processing and policy management to improve customer experience.",
  },
  {
    name: "Real Estate",
    desc: "Streamline property management and tenant communication with intelligent workflows.",
  },
  {
    name: "Logistics",
    desc: "Optimize delivery routes and warehouse operations to save fuel costs and delivery time.",
  },
]

const trustedCompanies = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "CloudSys", logo: "CS" },
  { name: "InnovateLabs", logo: "IL" },
  { name: "FutureScale", logo: "FS" },
  { name: "DigitalPro", logo: "DP" },
]

const testimonials = [
  {
    quote:
      "Technexra's automation solutions reduced our manual processes by 70%. Their team is truly exceptional and dedicated to our success.",
    name: "John Carter",
    role: "CEO, Creative Minds Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The AI-powered systems they implemented transformed our operations completely. Outstanding results and professional service.",
    name: "Sophia Loren",
    role: "CTO, DataSecure LLC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Best investment we made. Their automation expertise saved us thousands of hours annually. Highly recommended!",
    name: "Michael Zhang",
    role: "CFO, Global Corp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    quote: "Exceptional service and technical expertise. They understood our needs and delivered beyond expectations.",
    name: "Emily Watson",
    role: "VP Operations, Tech Ventures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
]

const HomePage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0)
  const autoScrollTestimonialRef = useRef(null)
  const autoScrollIndustryRef = useRef(null)

  useEffect(() => {
    autoScrollTestimonialRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(autoScrollTestimonialRef.current)
  }, [])

  useEffect(() => {
    autoScrollIndustryRef.current = setInterval(() => {
      setCurrentIndustryIndex((prev) => (prev + 1) % industries.length)
    }, 4000)
    return () => clearInterval(autoScrollIndustryRef.current)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    clearInterval(autoScrollTestimonialRef.current)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    clearInterval(autoScrollTestimonialRef.current)
  }

  const nextIndustry = () => {
    setCurrentIndustryIndex((prev) => (prev + 1) % industries.length)
    clearInterval(autoScrollIndustryRef.current)
  }

  const prevIndustry = () => {
    setCurrentIndustryIndex((prev) => (prev - 1 + industries.length) % industries.length)
    clearInterval(autoScrollIndustryRef.current)
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
        <title>Technexra - AI Automation & Digital Transformation Solutions</title>
        <meta
          name="description"
          content="Reduce manual effort with AI automation and digital transformation. Technexra provides intelligent solutions for enterprise automation, custom development, and managed services."
        />
        <meta
          name="keywords"
          content="AI automation, digital transformation, business automation, enterprise solutions, RPA, chatbot development"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-background text-white py-40 md:py-56 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,62,62,0.1)_0%,_rgba(0,0,0,0)_60%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/company-logo-transparent.png"
              alt="Technexra Logo"
              className="h-20 md:h-36 w-auto mx-auto mb-1"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance"
          >
            Redefining Digital Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 text-balance"
          >
            Harness the power of automation to eliminate manual effort, reduce costs, and accelerate your digital
            transformation journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-red-600 text-white hover:bg-red-700 font-bold text-lg py-6 px-8 rounded-full transition-transform hover:scale-105"
            >
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-white hover:bg-red-600/20 font-bold text-lg py-6 px-8 rounded-full transition-transform hover:scale-105 bg-transparent"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Core Expertise Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reduce manual effort and amplify productivity with intelligent automation solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-red-600/10"
              >
                <div className="inline-block bg-accent p-3 md:p-4 rounded-full mb-4">
                  <service.icon className="h-6 md:h-8 w-6 md:w-8 text-red-500" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm md:text-base text-balance">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio of Success Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio of Success</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results delivered across industries through intelligent automation and transformation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolio.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="h-40 md:h-48 overflow-hidden bg-gradient-to-br from-red-600/10 to-background">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-red-500 text-xs md:text-sm font-semibold mb-2">{project.company}</p>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Proven Process</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {methodology.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve - Vertical Auto Slider */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Delivering automation solutions across diverse sectors</p>
          </motion.div>

          <div className="max-w-2xl mx-auto relative">
            <motion.div
              key={currentIndustryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 md:p-10 rounded-lg border border-red-600/20 min-h-48 md:min-h-56 flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-500">
                {industries[currentIndustryIndex].name}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {industries[currentIndustryIndex].desc}
              </p>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevIndustry}
                className="p-2 md:p-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 rounded-lg transition-all duration-300"
              >
                <ChevronUp size={20} className="text-red-500" />
              </button>
              <button
                onClick={nextIndustry}
                className="p-2 md:p-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 rounded-lg transition-all duration-300"
              >
                <ChevronDown size={20} className="text-red-500" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {industries.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndustryIndex(i)
                    clearInterval(autoScrollIndustryRef.current)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndustryIndex ? "bg-red-500 w-6" : "bg-red-600/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say - Vertical Auto Slider */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Hear from the businesses we've transformed</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background p-8 md:p-10 rounded-lg border border-red-600/20 min-h-64 md:min-h-72 flex flex-col justify-center relative"
            >
              <div className="absolute top-4 right-6 text-4xl text-red-600/20">"</div>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed italic">
                {testimonials[currentTestimonialIndex].quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonialIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonialIndex].name}
                  className="w-12 md:w-14 h-12 md:h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-sm md:text-base">{testimonials[currentTestimonialIndex].name}</p>
                  <p className="text-red-500 text-xs md:text-sm">{testimonials[currentTestimonialIndex].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 md:p-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 rounded-lg transition-all duration-300"
              >
                <ChevronUp size={20} className="text-red-500" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 md:p-3 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 rounded-lg transition-all duration-300"
              >
                <ChevronDown size={20} className="text-red-500" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentTestimonialIndex(i)
                    clearInterval(autoScrollTestimonialRef.current)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonialIndex ? "bg-red-500 w-6" : "bg-red-600/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Companies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-gray-400">Partnering with enterprises to drive digital transformation</p>
          </motion.div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustedCompanies.map((company, i) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-red-600/20 hover:border-red-600/50 rounded-lg p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-600/10 rounded-lg flex items-center justify-center group-hover:from-red-600/30 group-hover:to-red-600/20 transition-all duration-300">
                    <span className="text-xl font-bold text-red-500">{company.logo}</span>
                  </div>
                  <p className="text-sm font-semibold text-center">{company.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default HomePage
