import React from "react"
import Hero from "../components/Hero/Hero"
import HomeInfo from "../components/HomeInfo/HomeInfo"
import KKGroupSection from "../components/KKGroupSection/KKGroupSection"
import OurClients from "../components/OurClients/OurClients"

export default function Home() {
  return <>
    <Hero />
    <KKGroupSection />
    <OurClients />
    <HomeInfo />
  </>
}
