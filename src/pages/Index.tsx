import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Reviews from '@/components/Reviews';
import Sponsors from '@/components/Sponsors';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <Reviews />
        <Sponsors />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;