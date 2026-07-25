import Header from "@/components/Header";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import HowItWorks from "./sections/HowItWorks";
import Reviews from "./sections/Reviews";
import WhyMEILID from "./sections/WhyMEILID";
import WhoItsFor from "./sections/WhoItsFor";
import Sustainability from "./sections/Sustainability";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Reviews />
      <WhyMEILID />
      <WhoItsFor />
      <Sustainability />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
