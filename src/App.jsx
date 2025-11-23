"use client"
import { Routes, Route, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Home from "@/pages/HomePage"
import ServicesPage from "@/pages/ServicePage"
import AboutPage from "@/pages/AboutPage"
import CaseStudiesPage from "@/pages/CaseStudiesPage"
import BlogPage from "@/pages/BlogPage"
import ContactPage from "@/pages/ContactPage"
import { Toaster } from "@/components/ui/toaster"
// import PrivacyPolicy from "@/pages/PrivacyPolicy"
import TermsOfService from "@/pages/TermsOfPages"

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Technexra",
    url: "https://www.technexra.com",
    logo: "/images/company-logo-transparent.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-586-924-2234",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "13010 Brokers Tip Lane",
      addressLocality: "Frisco",
      addressRegion: "TX",
      postalCode: "75035",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/technexra",
      "https://www.twitter.com/technexra",
      "https://www.linkedin.com/company/technexra",
    ],
    description:
      "Technexra is a leading IT consulting and digital transformation company. We provide expert solutions in cloud computing, cybersecurity, custom software development, and data analytics to redefine digital experiences.",
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Toaster />
        <Footer />
      </div>
    </>
  )
}

export default App
