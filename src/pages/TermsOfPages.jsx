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

const TermsOfService = () => {
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
        <title>Terms of Service | Technexra - Legal Agreement</title>
        <meta
          name="description"
          content="Read the comprehensive Terms of Service for Technexra IT consulting and digital transformation services. Learn about usage rights, limitations, and our legal policies."
        />
        <meta name="keywords" content="terms of service, legal policy, service agreement, Technexra" />
      </Helmet>

      <div className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-400">Last updated: November 23, 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-300">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using the Technexra website and services, you agree to be bound by these Terms of
              Service. If you do not agree with any part of these terms, you may not use our services. These terms apply
              to all users, including but not limited to browsers, vendors, customers, merchants, and contributors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">2. Use License</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Permission is granted to temporarily download and view materials on Technexra's website for personal,
                non-commercial use only. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use materials for commercial purposes without authorization</li>
                <li>Attempt to reverse engineer or decompile software</li>
                <li>Remove copyright or proprietary notations</li>
                <li>Transfer materials to third parties or mirror them on other servers</li>
                <li>Engage in any activity that disrupts service or infringes on others' rights</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">3. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              The materials and services on Technexra's website are provided on an "as is" basis. Technexra makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">4. Limitations of Liability</h2>
            <p className="leading-relaxed">
              In no event shall Technexra or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials or services on Technexra's website, even if Technexra or an authorized representative
              has been notified of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">5. Service Modifications</h2>
            <p className="leading-relaxed">
              Technexra reserves the right to modify or discontinue services, with or without notice. We shall not be
              liable for any modification, suspension, or discontinuation of services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">6. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All content, designs, text, graphics, logos, and other materials on Technexra's website are the property
              of Technexra or its content suppliers. Reproduction, distribution, or transmission of any materials
              without prior written consent is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">7. Acceptable Use Policy</h2>
            <p className="leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Engage in any illegal activities</li>
              <li>Harass, abuse, or threaten others</li>
              <li>Post defamatory, obscene, or offensive content</li>
              <li>Interfere with network functionality or security</li>
              <li>Transmit viruses or malware</li>
              <li>Engage in unauthorized data collection or hacking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">8. Payment Terms</h2>
            <p className="leading-relaxed">
              For services requiring payment, you agree to provide accurate billing information and authorize Technexra
              to charge your account. You are responsible for all taxes applicable to your payments. Refunds, if
              applicable, will be processed according to our refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">9. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless Technexra and its officers, directors, employees, and agents from
              any claims, damages, or costs arising from your use of the website, violation of these terms, or
              infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">10. Termination</h2>
            <p className="leading-relaxed">
              Technexra reserves the right to terminate your access to the website and services at any time for
              violation of these terms or any illegal or harmful conduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">11. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of Texas, and you
              irrevocably submit to the exclusive jurisdiction of the courts in Texas for any disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">12. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall
              continue in full force and effect.
            </p>
          </section>

          <section className="bg-card p-8 rounded-lg border border-red-600/20">
            <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">13. Contact Information</h2>
            <p className="leading-relaxed mb-4">For questions about these Terms of Service, please contact:</p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Email:</span> legal@technexra.com
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

export default TermsOfService
