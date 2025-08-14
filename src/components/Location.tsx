import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const Location = () => {
  const locations = [
    {
      name: "Loja Centro",
      address: "Av. Centenário do Paraná, 193",
      neighborhood: "Centro, Piraquara – PR",
      mapUrl: "https://maps.google.com/maps?q=Av.+Centenário+do+Paraná,+193+Centro+Piraquara+PR"
    },
    {
      name: "Loja Jardim Bela Vista",
      address: "Barão do Cerro Azul, 1363",
      neighborhood: "Jardim Bela Vista, Piraquara – PR",
      mapUrl: "https://maps.google.com/maps?q=Barão+do+Cerro+Azul,+1363+Jardim+Bela+Vista+Piraquara+PR"
    }
  ];

  const schedule = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "8h às 14h" },
    { day: "Domingo", hours: "Fechado" }
  ];

  const contacts = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(41) 99978-5930",
      link: "https://wa.me/5541999785930"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@mace_dog",
      link: "https://instagram.com/mace_dog"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Localização e Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nossas lojas em Piraquara-PR. Estamos prontos para atender você e seu pet!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Locations */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Nossas Lojas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <Card 
                  key={location.name} 
                  className="hover-scale transition-smooth shadow-warm border-0 bg-card/80 backdrop-blur-sm animate-enter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <MapPin className="w-5 h-5 text-primary mr-2" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{location.address}</p>
                    <p className="text-muted-foreground mb-4">{location.neighborhood}</p>
                    <a 
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="story-link text-primary hover:text-primary-glow transition-smooth"
                    >
                      Ver no Google Maps
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Schedule and Contact */}
          <div className="space-y-8">
            {/* Schedule */}
            <Card className="shadow-warm border-0 bg-card/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-warm border-0 bg-card/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="text-foreground">Fale Conosco</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-smooth hover-scale"
                    >
                      <contact.icon className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="text-foreground font-medium">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;