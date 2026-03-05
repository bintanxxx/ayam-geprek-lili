import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";
import AboutLocationSection from "@/components/about-location-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutLocationSection />
      </main>
      <Footer />
    </>
  );
}
