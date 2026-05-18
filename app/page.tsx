import { BestsellersSection } from "@/sections/BestsellersSection";
import { FAQSection } from "@/sections/FAQSection";
import { FeaturedCollection } from "@/sections/FeaturedCollection";
import { HeroSection } from "@/sections/HeroSection";
import { InstagramGallery } from "@/sections/InstagramGallery";
import { NewArrivalsSection } from "@/sections/NewArrivalsSection";
import { StorySection } from "@/sections/StorySection";
import { TallerMediaSection } from "@/sections/TallerMediaSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <NewArrivalsSection />
      <BestsellersSection />
      <StorySection />
      <TallerMediaSection />
      <TestimonialsSection />
      <InstagramGallery />
      <FAQSection />
    </>
  );
}
