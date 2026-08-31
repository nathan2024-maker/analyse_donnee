import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModuleOverview } from "@/components/ModuleOverview";
import { LearningObjectives } from "@/components/LearningObjectives";
import { Calendar } from "@/components/Calendar";
import { Curriculum } from "@/components/Curriculum";
import { TargetAudience } from "@/components/TargetAudience";
import { ExpertProfile } from "@/components/ExpertProfile";
import { Pricing } from "@/components/Pricing";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Header />
      <Hero />

      <div className="bg-[#f4f7fb]">
        <ModuleOverview />
      </div>

      <div className="bg-[#f4f7fb]">
        <LearningObjectives />
      </div>

      <div className="bg-white">
        <Calendar />
      </div>

      <div className="bg-[#f4f7fb]">
        <Curriculum />
      </div>

      <div className="bg-white">
        <TargetAudience />
      </div>

      <div className="bg-[#f4f7fb]">
        <ExpertProfile />
      </div>

      <div className="bg-[#f4f7fb]">
        <Pricing />
      </div>

      <div className="bg-white">
        <BookingForm />
      </div>

      <Footer />
    </main>
  );
}
