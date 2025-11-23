"use client"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Button } from "@/components/ui/button"

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

const caseStudies = [
  {
    title: "Fintech Platform Scalability",
    client: "Innovate Bank",
    category: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1601429675201-f66be94607bb?w=600&h=400&fit=crop",
    description:
      "Migrated monolithic architecture to microservices-based cloud solution on AWS, resulting in 300% increase in transaction throughput and 99.99% uptime.",
  },
  {
    title: "Retail E-commerce Overhaul",
    client: "StyleHub",
    category: "Custom Development",
    image: "/sasas.png",
    description:
      "Developed headless e-commerce platform with React and Node.js, improving page load times by 50% and increasing conversion rates by 25%.",
  },
  {
    title: "Healthcare Data Security",
    client: "MediCare Secure",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    description:
      "Implemented zero-trust security framework achieving HIPAA compliance with zero data breaches and successful defense against multiple simulated cyber-attacks.",
  },
  {
    title: "Manufacturing IoT Implementation",
    client: "AutoWorks Inc.",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    description:
      "Deployed IoT sensor network providing real-time data analytics reducing production downtime by 40% and improving quality control significantly.",
  },
  {
    title: "Logistics Route Optimization",
    client: "Global-Trans",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    description:
      "Built machine learning model optimizing delivery routes, saving 15% on fuel costs and reducing average delivery times by 20%.",
  },
  {
    title: "SaaS Platform for Education",
    client: "LearnSphere",
    category: "Custom Development",
    image: "/Gemini_Generated_Image_fh6ihdfh6ihdfh6i.png",
    description:
      "Created multi-tenant SaaS platform scaling to over 1 million active users with robust, engaging user experience and seamless performance.",
  },
]

const CaseStudiesPage = () => {
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
        <title>Case Studies | TechNexra - Success Stories</title>
        <meta
          name="description"
          content="Discover how TechNexra has helped businesses achieve their goals through innovative technology solutions. Explore our portfolio of success stories across industries."
        />
      </Helmet>

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Our Portfolio of Success</h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Real-world results delivered for our clients across various industries and business sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="overflow-hidden h-40 md:h-56">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-xs md:text-sm text-red-400 font-semibold mb-2">{study.category}</p>
                  <h2 className="text-lg md:text-2xl font-bold mb-2">{study.title}</h2>
                  <p className="text-gray-400 text-xs md:text-sm font-semibold mb-3">{study.client}</p>
                  <p className="text-gray-400 text-sm md:text-base mb-4">{study.description}</p>
                  <Button variant="link" className="p-0 text-red-500 hover:text-red-400 text-sm md:text-base">
                    Read Case Study →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default CaseStudiesPage
