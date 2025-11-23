"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"
import HomePage from "@/src/pages/HomePage"
import AboutPage from "@/src/pages/AboutPage"
import ContactPage from "@/src/pages/ContactPage"

export default function Page() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
