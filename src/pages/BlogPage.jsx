"use client"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

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

const blogPosts = [
  {
    title: "The Future of AI in Business: Trends to Watch in 2026",
    category: "Artificial Intelligence",
    date: "Nov 10, 2025",
    author: "Dr. Evelyn Reed",
    image: "/ai-brain-network-artificial-intelligence.jpg",
    excerpt:
      "AI is no longer a futuristic concept; it's a present-day reality transforming industries. Here are the key trends that will shape the business landscape...",
  },
  {
    title: "Automation Reduces Manual Effort by 80%: Real Case Studies",
    category: "Automation",
    date: "Nov 05, 2025",
    author: "Marcus Chen",
    image: "/business-process-automation-efficiency-workflow.jpg",
    excerpt:
      "Discover how enterprises are eliminating manual tasks and boosting productivity through intelligent automation solutions...",
  },
  {
    title: "Zero Trust: The New Paradigm in Enterprise Cybersecurity",
    category: "Cybersecurity",
    date: "Oct 28, 2025",
    author: "Aisha Khan",
    image: "/digital-security-shield-network-protection.jpg",
    excerpt:
      '"Never trust, always verify." We break down the principles of a Zero Trust architecture and why it\'s essential for modern enterprise security.',
  },
  {
    title: "Chatbot Development: Building Intelligent Customer Support Systems",
    category: "AI/Chatbots",
    date: "Oct 21, 2025",
    author: "David Miller",
    image: "/chatbot-ai-customer-service-conversation.jpg",
    excerpt:
      "Learn how to build and deploy intelligent chatbots that improve customer satisfaction while reducing support costs by 60%...",
  },
  {
    title: "Data-Driven Decision Making: From Raw Data to Actionable Insights",
    category: "Data Analytics",
    date: "Oct 15, 2025",
    author: "Marcus Chen",
    image: "/data-analytics-dashboard-charts-graphs.jpg",
    excerpt:
      "Your data holds the key to your future success. Learn how to build a data pipeline that transforms raw information into strategic business insights.",
  },
  {
    title: "Cloud Migration Best Practices: Reducing Downtime and Costs",
    category: "Cloud Computing",
    date: "Oct 08, 2025",
    author: "David Miller",
    image: "/cloud-computing-migration-infrastructure.jpg",
    excerpt:
      "Migrating to the cloud doesn't have to be complex. Discover the best practices for smooth, cost-effective cloud transformation.",
  },
]

const BlogPage = () => {
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
        <title>Blog & Insights | Technexra - AI, Automation & Technology Articles</title>
        <meta
          name="description"
          content="Stay ahead of the curve with expert insights from Technexra. Read articles on AI, automation, cloud computing, cybersecurity, and digital transformation."
        />
      </Helmet>

      <section className="py-24 bg-card bg-grid">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Technexra Insights</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert analysis on automation, AI, and the future of technology and business.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden border border-border flex flex-col hover:border-red-600/50 transition-all duration-300 h-full"
              >
                <div className="overflow-hidden bg-gradient-to-br from-red-600/10 to-background h-48">
                  <img
                    alt={post.title}
                    src={post.image || "/placeholder.svg"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-red-400 font-semibold mb-2">{post.category}</p>
                  <h2 className="text-xl font-bold mb-3 flex-grow line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-auto border-t border-border pt-4 flex justify-between items-center text-xs text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default BlogPage
