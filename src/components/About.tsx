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

            <p className="text-xl text-bold mb-2">Missão</p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Proporcionar saúde, bem-estar e felicidade aos animais de estimação,
              oferecendo produtos de alta qualidade, atendimento próximo e informações
              que ajudem os tutores a cuidarem melhor de seus pets.
            </p>

            <p className="text-xl text-bold mb-2">Visão</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ser referência na região como a loja de produtos para animais mais confiável,
              reconhecida pelo carinho com que trata cada cliente e pelo compromisso com a qualidade e a satisfação.
            </p>

            <p className="text-xl text-bold mb-2">Quem somos</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O Aviário Macedog nasceu da paixão pelos animais e do desejo de oferecer o melhor para eles. Aqui,
              cada produto é escolhido com cuidado, pensando na nutrição, saúde e felicidade dos pets.
              Trabalhamos com rações de qualidade, acessórios, brinquedos e itens de higiene, sempre
              buscando unir preço justo e excelente atendimento.

              Mais do que uma loja, somos um ponto de encontro para quem ama animais e quer vê-los
              vivendo com mais energia, beleza e alegria.
            </p>

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