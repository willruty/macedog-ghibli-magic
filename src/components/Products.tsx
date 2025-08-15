import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import productFoodImage from "@/assets/artigos-pesca-2.jpg";
import productToyImage from "@/assets/toys-2.jpg";
import productBedImage from "@/assets/casinhas.jpg";
import productVacineImage from "@/assets/vet.png";

const Products = () => {
    const products = [
        {
            title: "Produtos de Pesca",
            description: "Variedade e qualidade em itens de pesca uma para a melhor experiencia.",
            image: productFoodImage,
            features: ["Iscas", "Facas", "Varas", "Carretilhas"]
        },
        {
            title: "Brinquedos Interativos",
            description: "Diversão garantida para estimular corpo e mente do seu animal.",
            image: productToyImage,
            features: ["Cordas resistentes", "Bolinhas macias", "Brinquedos sonoros", "Opções para cães e gatos"]
        },
        {
            title: "Camas e Casinhas",
            description: "Conforto e segurança para momentos de descanso do seu companheiro.",
            image: productBedImage,
            features: ["Tecido lavável", "Espuma ortopédica", "Modelos para todas as raças", "Design moderno"]
        },
        {
            title: "Vacinas e Cuidados",
            description: "Prevenção e cuidados veterinários essenciais para a saúde do seu companheiro.",
            image: productVacineImage,
            features: ["Vacinas iniciais", "Vermífugos", "Antipulgas"]
        },
    ];

    return (
        <section id="products" className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Nossos Produtos
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Selecionamos os melhores produtos para garantir saúde, conforto e diversão para seu pet.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <Card
                            key={product.title}
                            className="hover-scale transition-smooth shadow-warm border-0 bg-card/80 backdrop-blur-sm animate-enter"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardHeader className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-48 object-cover hover:scale-110 transition-smooth"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/60 to-transparent" />
                                </div>
                                <div className="p-6 pb-2">
                                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                                        {product.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">
                                        {product.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="px-6 pb-6">
                                <ul className="space-y-2">
                                    {product.features.map((feature) => (
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

export default Products;
