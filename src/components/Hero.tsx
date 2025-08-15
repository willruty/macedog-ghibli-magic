import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fachada.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-hero-bg relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg/90 to-hero-bg/70" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Bem-vindo ao Aviário{" "}
              <span className="text-primary-glow">Macedog</span>{" "}
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              No Aviário Macedog, nossa paixão por animais vai muito além da venda —
              cuidamos com carinho e dedicação para oferecer o melhor para seus pets.
              Trabalhamos com rações de qualidade, acessórios, produtos de higiene e muito mais,
              sempre pensando no bem-estar e na saúde dos seus companheiros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="gradient-warm hover-scale shadow-warm"
                asChild
              >
                <a href="https://wa.me/5541999785930" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary-glow text-primary-glow hover:bg-primary-glow hover:text-hero-bg hover-scale transition-smooth"
                asChild
              >
                <a href="#services">
                  Nossos Serviços
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Cachorros felizes na Macedog"
                className="w-full h-auto rounded-2xl shadow-glow hover-scale"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;