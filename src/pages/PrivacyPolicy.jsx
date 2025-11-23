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

const PrivacyPolicy = () => {
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
        <title>Privacy Policy | Technexra - Data Protection & Privacy</title>
        <meta
          name="description"
          content="Read the comprehensive privacy policy for Technexra. Learn how we collect, use, protect, and manage your personal information with transparency and security."
        />
        <meta name="keywords" content="privacy policy, data protection, GDPR, data security, Technexra" />
      </Helmet>

      <div className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Last updated: November 23, 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">Introduction</h2>
            <p className="leading-relaxed">
              Technexra ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring you have
              a positive experience on our website and when using our services. This Privacy Policy explains how we
              collect, use, disclose, and otherwise process personal information in connection with our website,
              products, and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">1.1 Information You Provide</h3>
                <p className="leading-relaxed mb-3">We collect information you voluntarily provide when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out contact forms or inquiries on our website</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Create an account with us</li>
                  <li>Request our services or products</li>
                  <li>Participate in surveys or feedback</li>
                  <li>Communicate with us directly via email or other channels</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">1.2 Automatically Collected Information</h3>
                <p className="leading-relaxed mb-3">When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral source and analytics data</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send promotional communications and updates</li>
              <li>Process transactions and payments</li>
              <li>Analyze website usage and optimize performance</li>
              <li>Detect and prevent fraudulent activities</li>
              <li>Comply with legal obligations</li>
              <li>Enhance user experience and security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">3. Information Sharing & Disclosure</h2>
            <p className="leading-relaxed">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Service providers and contractors assisting us</li>
              <li>Business partners with your consent</li>
              <li>Legal authorities when required by law</li>
              <li>Successors in case of merger or acquisition</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We never sell your personal information to third parties without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures including encryption, secure servers, and access controls
              to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">5. Your Rights & Choices</h2>
            <p className="leading-relaxed mb-4">Depending on your jurisdiction, you may have rights including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise these rights, please contact us using the information in the Contact section below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">6. Cookies & Tracking Technologies</h2>
            <p className="leading-relaxed">
              We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage, and
              deliver personalized content. You can manage cookie preferences in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">7. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              Please review their privacy policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">8. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children. If we become aware of such collection, we will delete the information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">9. Policy Updates</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy periodically. Significant changes will be communicated to you via email
              or website notification. Your continued use of our services indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="bg-card p-8 rounded-lg border border-red-600/20">
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">10. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span> privacy@technexra.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (586) 924-2234
              </p>
              <p>
                <span className="font-semibold">Address:</span> 13010 Brokers Tip Lane, Frisco, TX 75035
              </p>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default PrivacyPolicy
