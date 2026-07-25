import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import SignatureCollection from "../components/SignatureCollection";
import WhyKaronPlus from "../components/WhyKaronPlus";
import Testimonials from "../components/Testimonials";
import CollectionCTA from "../components/CollectionCTA";
import KaronEssentials from "../components/KaronEssentials";
import CraftCare from "../components/CraftCare";

const Home = () => {
  return (
    <main>
      <Hero />

      <WelcomeSection />

      <CategorySection />

      <FeaturedProducts />

      <SignatureCollection />

      <WhyKaronPlus />

      <Testimonials />

      <CollectionCTA />

      <KaronEssentials />

      <CraftCare />
    </main>
  );
};

export default Home;