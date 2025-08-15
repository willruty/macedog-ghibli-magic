import galleryFacadeImage from "@/assets/fachada.jpg";
import galleryInteriorImage from "@/assets/casinhas.jpg";
import galleryDogToyImage from "@/assets/toys-1.jpg";
import galleryCatBedImage from "@/assets/front-door.jpg";

const Gallery = () => {
  const images = [
    {
      src: galleryFacadeImage,
      alt: "Fachada acolhedora da Macedog",
      title: "Nossa Fachada"
    },
    {
      src: galleryInteriorImage,
      alt: "Interior organizado da loja Macedog",
      title: "Interior da Loja"
    },
    {
      src: galleryDogToyImage,
      alt: "Brinquedos para Cachorros",
      title: "Brinquedos para Cachorros"
    },
    {
      src: galleryCatBedImage,
      alt: "Fachada da loja",
      title: "Parcerias com outras marcas"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos espaços e veja momentos especiais dos nossos clientes de quatro patas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.title}
              className="group relative overflow-hidden rounded-2xl shadow-warm hover-scale transition-smooth animate-enter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/80 via-hero-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-smooth">
                  <h3 className="text-primary-foreground font-semibold text-lg opacity-0 group-hover:opacity-100 transition-smooth">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Venha nos visitar e veja pessoalmente nosso carinho pelos pets!
          </p>
          <a 
            href="https://wa.me/5541999785930" 
            target="_blank" 
            rel="noopener noreferrer"
            className="story-link text-primary hover:text-primary-glow text-lg font-medium transition-smooth"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;