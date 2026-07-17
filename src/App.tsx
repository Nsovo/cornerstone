import { About } from "./components/About";
import { FeaturedStudies } from "./components/FeaturedStudies";
import { GivingSection } from "./components/GivingSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MediaSection } from "./components/MediaSection";
import { WeeklyActivities } from "./components/WeeklyActivities";

import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Hero />
        <About />
        <WeeklyActivities />
        <FeaturedStudies />
        <MediaSection />
        <GivingSection />
      </main>

      <Footer />
    </div>
  );
}