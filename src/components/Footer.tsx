import { Heart, MapPin, Phone, Instagram, Clock } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="Macedog" className="w-20 h-20 rounded-lg" />
              <span className="text-xl font-bold text-primary-glow">Macedog</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Cuidando com amor, alimentando com qualidade.
              Seu pet shop de confiança em Piraquara-PR.
            </p>
            <div className="flex items-center text-primary-foreground/60">
              <Heart className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm">Feito com amor para os pets</span>
            </div>
          </div>

          {/* Locations */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold text-primary-glow mb-4">Nossas Lojas</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm">
                    <div className="font-medium">Jardim Bela Vista</div>
                    <div>Av. Centenário do Paraná, 193</div>
                    <div>Jardim Bela Vista, Piraquara – PR</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div className="text-primary-foreground/80 text-sm">
                    <div className="font-medium">Centro</div>
                    <div>Barão do Cerro Azul, 1363</div>
                    <div>Centro, Piraquara – PR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold text-primary-glow mb-4">Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-primary mr-2" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Seg-Sáb: 9h às 18h45</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-primary mr-2" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Domingo: 9h às 12h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold text-primary-glow mb-4">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5541999785930"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-glow transition-smooth"
              >
                <Phone className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm">(41) 99978-5930</span>
              </a>

              <a
                href="https://instagram.com/mace_dog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary-glow transition-smooth"
              >
                <Instagram className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm">@mace_dog</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Macedog. Todos os direitos reservados. | Aviário e Pet Shop em Piraquara-PR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;