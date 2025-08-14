import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Clock } from "lucide-react";
import vetImage from "@/assets/vet.png";

const About = () => {
  const stats = [
    { icon: Heart, label: "Anos de Experiência", value: "10+" },
    { icon: Users, label: "Clientes Satisfeitos", value: "500+" },
    { icon: Award, label: "Produtos Premium", value: "200+" },
    { icon: Clock, label: "Atendimento", value: "6 dias" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src={vetImage} 
                alt="Veterinário cuidando de um pet na Macedog"
                className="w-full h-auto rounded-2xl shadow-warm hover-scale"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Macedog
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Há mais de 10 anos cuidando com amor dos seus pets em Piraquara-PR. 
              A Macedog nasceu da paixão pelos animais e do compromisso em oferecer 
              produtos e serviços de qualidade.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso time de especialistas está sempre pronto para orientar sobre 
              nutrição, cuidados veterinários e bem-estar animal. Temos duas lojas 
              estrategicamente localizadas para atender melhor você e seu pet.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="text-center p-4 border-0 bg-muted/50 hover-scale transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="gradient-warm hover-scale shadow-warm"
              asChild
            >
              <a href="https://wa.me/5541999785930" target="_blank" rel="noopener noreferrer">
                Converse Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;