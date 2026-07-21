
import Hero from "../Hero/Hero";
import TrustBar from "../TrustBar/TrustBar";
import AboutClinic from "../AboutClinic/AboutClinic";
import Treatments from "../Treatments/Treatments";
import Pricing from "../Pricing/Pricing";
import Process from "../Process/Process";
import Results from "../Results/Results";
import Offer from "../Offer/Offer";
import Testimonials from "../Testimonials/Testimonials";
import FinalCta from "../FinalCta/FinalCta";


function Home() {

  return (
    <>
      <Hero />
      <TrustBar/>
      <AboutClinic/>
      <Treatments />
      <Pricing/>
      <Process/>
      <Results />     
      <Offer />
      <Testimonials/>
      <FinalCta/>
    </>
  )
}

export default Home
