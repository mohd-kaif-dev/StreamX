import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HowItWorks from "./Components/HowItWorks";
import KeyFeatures from "./Components/KeyFeatures";
import Navbar from "./Components/Navbar";
import PricingPlans from "./Components/PricingPlans";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
