import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Product } from './components/Product';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080B12] text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}