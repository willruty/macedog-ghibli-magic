import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Location />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppFloat />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Macedog - Aviário e Pet Shop",
            "description": "Aviário e pet shop em Piraquara-PR. Rações, vacinas, brinquedos e cuidados para seus pets.",
            "url": window.location.origin,
            "telephone": "+55-41-99978-5930",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. Centenário do Paraná, 193",
                "addressLocality": "Piraquara",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              {
                "@type": "PostalAddress", 
                "streetAddress": "Barão do Cerro Azul, 1363",
                "addressLocality": "Piraquara",
                "addressRegion": "PR",
                "addressCountry": "BR"
              }
            ],
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 08:00-14:00"
            ],
            "sameAs": [
              "https://instagram.com/mace_dog"
            ],
            "priceRange": "$$"
          })
        }}
      />
    </div>
  );
};

export default Index;