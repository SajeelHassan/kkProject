import React from "react"
import '../assets/css/global.css';
import Footer from "../components/Footer/Footer"
import NavbarMain from "../components/Navbar/Navbar"
import ServicesHeader from "../components/ServicesHeader/ServicesHeader"
import ServicesMain from "../components/ServicesMain/ServicesMain";

export default function Services() {
    return <>
        <NavbarMain class='services-page-navbar' />
        <ServicesHeader />
        <ServicesMain />
        <Footer />
    </>
}