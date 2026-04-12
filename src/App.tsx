import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Features />
    </div>
  );
}
