import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceFoodImage from "@/assets/service-food.jpg";
import serviceVaccineImage from "@/assets/service-vaccine.jpg";
import serviceToysImage from "@/assets/service-toys.jpg";
import serviceCareImage from "@/assets/service-care.jpg";

const Services = () => {
  const services = [
    {
      title: "Rações Premium",
      description: "Alimentos de alta qualidade para todas as idades e portes. Nutrição completa para seu pet.",
      image: serviceFoodImage,
      features: ["Rações super premium", "Petiscos naturais", "Suplementos", "Nutrição especializada"]
    },
    {
      title: "Vacinas e Cuidados",
      description: "Prevenção e cuidados veterinários essenciais para a saúde do seu companheiro.",
      image: serviceVaccineImage,
      features: ["Vacinas iniciais", "Vermífugos", "Antipulgas"]
    },
    {
      title: "Brinquedos e Diversão",
      description: "Uma seleção especial de brinquedos para manter seu pet ativo e feliz.",
      image: serviceToysImage,
      features: ["Brinquedos interativos", "Cordas e bolinhas", "Arranhadores", "Brinquedos educativos"]
    },
    {
      title: "Cuidados Especiais",
      description: "Produtos e serviços para o bem-estar completo do seu animal de estimação.",
      image: serviceCareImage,
      features: ["Acessórios", "Camas e casinhas", "Produtos de limpeza"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos tudo que seu pet precisa com qualidade e carinho.
            Conheça nossos principais serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover-scale transition-smooth shadow-warm border-0 bg-card/80 backdrop-blur-sm animate-enter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/60 to-transparent" />
                </div>
                <div className="p-6 pb-2">
                  <CardTitle className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;