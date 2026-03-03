import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeritageSection from "@/components/HeritageSection";
import ProductionProcess from "@/components/ProductionProcess";
import CategoriesSection from "@/components/CategoriesSection";
import PackagingSection from "@/components/PackagingSection";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <HeroSection /> */}
        <HeritageSection />
        <ProductionProcess />
        <CategoriesSection />
        <PackagingSection />
        <FAQSection />
      </main>
    </>
  );
}