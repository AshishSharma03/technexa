"use client"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Target, Eye, Handshake, Cpu, ShieldCheck, BarChart, Users, Zap, Award } from "lucide-react"

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

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses to achieve their full potential through strategic, innovative, and reliable technology solutions that drive growth and transformation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted and impactful digital transformation partner for enterprises worldwide, enabling them to think, automate, and transform.",
  },
  {
    icon: Handshake,
    title: "Our Values",
    description:
      "Integrity, Innovation, Excellence, and Client Success are the pillars that guide every decision and action we take.",
  },
]

const expertise = [
  {
    icon: Cpu,
    title: "Enterprise Architecture",
    description:
      "Designing scalable and resilient systems that support long-term growth, agility, and digital innovation at enterprise scale.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description:
      "Implementing robust security frameworks and ensuring regulatory compliance to protect your critical assets and data.",
  },
  {
    icon: BarChart,
    title: "Data Science & Analytics",
    description:
      "Leveraging advanced analytics and AI to unlock insights, drive data-informed decision-making, and create intelligent systems.",
  },
  {
    icon: Users,
    title: "Product Engineering",
    description:
      "End-to-end product development from ideation and UX/UI design through launch, scaling, and continuous optimization.",
  },
  {
    icon: Zap,
    title: "Cloud Transformation",
    description:
      "Seamless migration to cloud platforms with modern architecture, DevOps practices, and infrastructure optimization.",
  },
  {
    icon: Award,
    title: "Strategic Consulting",
    description:
      "Expert guidance on technology roadmaps, digital strategy, and organizational transformation to align with business objectives.",
  },
]

const teamMembers = [
  {
    name: "Shaleen Taneja",
    role: "Founder & CEO",
    image: "/images/shaleen-20taneja.jpeg",
    bio: "Visionary leader driving Technexra's mission to redefine digital transformation. With deep expertise in enterprise technology and strategic innovation, Shaleen leads our company with a passion for client success and continuous innovation.",
  },
  {
    name: "Rajeev Kalsi",
    role: "Chief Technology Officer",
    image: "/images/rajeev-20kalsi.jpeg",
    bio: "Technology strategist with 20+ years of experience in enterprise architecture and digital transformation. Rajeev ensures our solutions are cutting-edge, scalable, and aligned with industry best practices.",
  },
  {
    name: "Afanaseva Kristina",
    role: "Chief Human Resources Officer",
    image: "/images/afanaseva-20kristina.jpeg",
    bio: "People-first leader committed to building a high-performing team culture. Kristina drives our talent strategy, ensuring we attract and retain the best minds in technology and innovation.",
  },
  {
    name: "Eric Nyakora",
    role: "Chief Operating Officer",
    image: "/images/eric-20nyakora.jpeg",
    bio: "Operations excellence specialist focused on delivering exceptional client outcomes. Eric ensures seamless project execution, efficient resource management, and sustainable business growth.",
  },
]

const AboutPage = () => {
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
        <title>About Us | Technexra - Digital Transformation Leaders</title>
        <meta
          name="description"
          content="Meet the leadership team at Technexra. We're dedicated to redefining digital experiences through innovative technology solutions and strategic consulting."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-32 bg-card bg-grid relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,62,62,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Technexra</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              We are architects of the digital future—a collective of innovators, strategists, and engineers committed
              to transforming businesses through cutting-edge technology and strategic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold mb-3">{value.title}</h2>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions spanning enterprise architecture, security, analytics, and strategic
              transformation.
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-6 bg-background p-6 rounded-lg border border-red-600/20 hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 bg-accent p-4 rounded-lg border border-red-600/20 group-hover:bg-red-600/20 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced visionaries driving innovation and excellence across every aspect of our organization.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-red-600/20 rounded-lg overflow-hidden hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-600/10 to-background">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-red-500 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">50+</p>
              <p className="text-gray-400 text-lg">Enterprise Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">200+</p>
              <p className="text-gray-400 text-lg">Projects Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">15+</p>
              <p className="text-gray-400 text-lg">Years Combined Experience</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default AboutPage
