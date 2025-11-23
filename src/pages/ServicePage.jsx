"use client"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Zap, Code, BrainCircuit, Cloud, Shield, Smartphone, Database, GitBranch, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

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

const services = {
  automation: {
    title: "AI & Automation Solutions",
    icon: Zap,
    description:
      "Reduce manual effort by up to 80% with intelligent automation. Our AI-powered solutions streamline workflows, eliminate repetitive tasks, and free your team to focus on strategic initiatives.",
    items: [
      {
        id: "process-automation",
        icon: GitBranch,
        title: "Process Automation",
        description:
          "Automate complex business processes. Reduce errors, accelerate cycles, and cut operational costs significantly.",
      },
      {
        id: "ai-intelligence",
        icon: BrainCircuit,
        title: "AI Integration",
        description:
          "Integrate machine learning and AI into your operations. Predictive analytics, intelligent recommendations, and autonomous decision-making.",
      },
      {
        id: "chatbot-dev",
        icon: Cpu,
        title: "Chatbot Development",
        description:
          "Deploy intelligent chatbots that handle customer inquiries 24/7, reducing support costs while improving response times.",
      },
    ],
  },
  development: {
    title: "Custom Software Development",
    icon: Code,
    description:
      "Bespoke applications engineered to solve your unique challenges. From enterprise systems to mobile apps, we build scalable, secure, and innovative solutions.",
    items: [
      {
        id: "web-dev",
        icon: Code,
        title: "Web Solutions",
        description:
          "Modern web applications built with cutting-edge technologies. Scalable, responsive, and user-centric design.",
      },
      {
        id: "mobile-dev",
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps optimized for performance and user experience.",
      },
      {
        id: "backend-dev",
        icon: Database,
        title: "Backend Systems",
        description: "Robust backend architecture with microservices, APIs, and cloud-native design patterns.",
      },
    ],
  },
  cloud: {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description:
      "Modernize your infrastructure with cloud solutions. Migration, architecture, and ongoing management for AWS, Azure, and GCP.",
    items: [
      {
        id: "cloud-migration",
        icon: Cloud,
        title: "Cloud Migration",
        description: "Seamless migration to cloud platforms with zero downtime and minimal disruption.",
      },
      {
        id: "cloud-security",
        icon: Shield,
        title: "Cloud Security",
        description: "Enterprise-grade security, compliance, and data protection across your cloud infrastructure.",
      },
      {
        id: "devops",
        icon: GitBranch,
        title: "DevOps & CI/CD",
        description: "Accelerate deployment cycles with automated CI/CD pipelines and infrastructure as code.",
      },
    ],
  },
  security: {
    title: "Cybersecurity & Compliance",
    icon: Shield,
    description:
      "Comprehensive security solutions protecting your digital assets. From threat detection to compliance management.",
    items: [
      {
        id: "threat-management",
        icon: Shield,
        title: "Threat Detection & Response",
        description: "24/7 monitoring, threat detection, and rapid incident response to protect your systems.",
      },
      {
        id: "compliance",
        icon: CheckCircle,
        title: "Compliance Management",
        description: "Ensure regulatory compliance with HIPAA, GDPR, PCI-DSS, and SOC 2 standards.",
      },
      {
        id: "security-audit",
        icon: Zap,
        title: "Security Audits",
        description: "Comprehensive vulnerability assessments and penetration testing to identify and eliminate risks.",
      },
    ],
  },
}

// Import CheckCircle icon
import { CheckCircle } from "lucide-react"

const ServiceCategory = ({ category }) => (
  <section id={category.title.toLowerCase().split(" ")[0]} className="py-16 first:pt-0">
    <div className="flex items-center gap-4 mb-8">
      <div className="bg-card p-3 border border-border rounded-lg">
        <category.icon className="h-8 w-8 text-red-500" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{category.title}</h2>
        <p className="text-gray-400">{category.description}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card p-6 rounded-lg border border-border hover:border-red-600/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4 mb-3">
            <item.icon className="h-6 w-6 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const ServicesPage = () => {
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
        <title>IT Services & Solutions | Technexra - AI Automation, Custom Development, Cloud Security</title>
        <meta
          name="description"
          content="Technexra offers comprehensive IT services including AI automation, custom software development, cloud solutions, and cybersecurity. We reduce manual effort and accelerate digital transformation."
        />
        <meta
          name="keywords"
          content="IT services, automation, AI development, chatbot development, cloud solutions, cybersecurity, software development, managed services"
        />
        <meta property="og:title" content="Our Services | Technexra - Automation & Custom Solutions" />
        <meta
          property="og:description"
          content="Discover our comprehensive suite of automation, development, and security services designed to transform your business."
        />
      </Helmet>

      <section className="py-24 bg-card bg-grid">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-balance">
            Comprehensive solutions designed to automate operations, accelerate innovation, and drive sustainable
            growth.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 divide-y divide-border">
        <ServiceCategory category={services.automation} />
        <ServiceCategory category={services.development} />
        <ServiceCategory category={services.cloud} />
        <ServiceCategory category={services.security} />
      </div>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how our automation and custom solutions can help you eliminate manual effort, reduce costs,
            and accelerate growth.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700 font-bold text-lg py-6 px-8 rounded-full transition-transform hover:scale-105"
          >
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </motion.div>
  )
}

export default ServicesPage
