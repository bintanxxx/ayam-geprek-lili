import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
      </main>
    </>
  );
}
