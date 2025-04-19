import { HeroSection } from "../components/HeroSection"
import { JewelWatchSection } from "../components/JewelWatchSection"
import { BestSeller } from "../components/BestSeller"
import { New_DiscountSection } from "../components/New_DiscountSection"
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
    <New_DiscountSection/>
    <SpamSection/>
    {/* <LocationSection/>
    <SpamSection2/>
    <Footer/> */}
    </>
   
  )
}

