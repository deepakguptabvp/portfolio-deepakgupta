import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}