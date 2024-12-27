import { HeroSection } from "@/components/HeroSection";
import AboutPage from "./about/page";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <AboutPage />
    </>
  );
}
