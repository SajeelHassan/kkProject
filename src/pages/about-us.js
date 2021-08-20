import React from "react"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import AboutUs from "../components/About/About"
import ContactForm from "../components/Contact/Contact"
import Team from "../components/Team/Team"

export default function About() {
    return <>
        <Hero />
        <AboutUs />
        <ContactForm />
        <Team />
        <Footer />
    </>
}