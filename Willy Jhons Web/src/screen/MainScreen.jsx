import { HeroSection } from "../components/HeroSection"
import { JewelWatchSection } from "../components/JewelWatchSection"
import { BestSeller } from "../components/BestSeller"
import {  NewDiscountSection } from "../components/NewDiscountSection"
import { SpamSection } from "../components/SpamSection"
import { SpamSection2 } from "../components/SpamSection2"
import { LocationSection } from "../components/LocationSection"
import { Footer } from "../components/Footer"


export const MainScreen = () => {
  return (
    
    <>
    <HeroSection/>
    <JewelWatchSection/>
    <BestSeller/>
    <NewDiscountSection/>
    <SpamSection/>
    <LocationSection/>
    <SpamSection2/>
    <Footer/>
    </>
   
  )
}

