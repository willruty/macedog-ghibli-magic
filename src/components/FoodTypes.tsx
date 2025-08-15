import { Card } from "@/components/ui/card";
import standardImage from "@/assets/racao-granel.jpg";
import premiumImage from "@/assets/racoes.jpg";
import premiumSpecialImage from "@/assets/racoes.jpg";
import superPremiumImage from "@/assets/racoes.jpg";

const foodTypes = [
    {
        title: "Ração Standard",
        image: standardImage,
        points: [
            "Custo: mais barata.",
            "Composição: contém muitos subprodutos de origem animal e vegetal, como farinha de penas, ossos e milho integral.",
            "Nutrientes: menor valor nutricional, precisa de maior quantidade para saciar.",
            "Indicação: para quem busca custo baixo, mas não oferece o melhor para a saúde a longo prazo.",
            "Impacto no pet: pode gerar fezes volumosas, odor forte e menos brilho na pelagem."
        ]
    },
    {
        title: "Ração Premium",
        image: premiumImage,
        points: [
            "Custo: intermediário.",
            "Composição: ingredientes melhores que a standard, com um pouco mais de proteína de qualidade.",
            "Nutrientes: equilíbrio razoável, mas ainda usa alguns subprodutos e corantes.",
            "Benefícios: melhora um pouco a digestibilidade e a saúde da pelagem.",
            "Indicação: opção de transição para quem quer algo melhor que o básico."
        ]
    },
    {
        title: "Ração Premium Especial",
        image: premiumSpecialImage,
        points: [
            "Custo: intermediário-alto.",
            "Composição: proteínas de melhor qualidade (frango, carne, peixe) e menor quantidade de subprodutos.",
            "Nutrientes: maior absorção, contém vitaminas e minerais mais equilibrados.",
            "Benefícios: fezes mais firmes e com menos odor, pelagem mais bonita e mais energia.",
            "Indicação: boa relação custo-benefício para quem quer qualidade sem chegar no valor de uma super premium."
        ]
    },
    {
        title: "Ração Super Premium",
        image: superPremiumImage,
        points: [
            "Custo: mais cara.",
            "Composição: proteínas nobres, sem subprodutos, com ingredientes selecionados e alta digestibilidade.",
            "Nutrientes: formuladas para atender necessidades específicas de raça, porte, idade ou condição de saúde.",
            "Benefícios: máxima absorção dos nutrientes, pelagem brilhante, saúde digestiva e longevidade.",
            "Indicação: ideal para quem busca o melhor em nutrição e prevenção de problemas de saúde."
        ]
    }
];

const FoodTypes = () => {
    return (
        <section id="types-of-food" className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Tipos de Ração
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Conheça as diferenças entre os principais tipos de ração e escolha a melhor opção para seu pet.
                    </p>
                </div>

                <div className="space-y-10">
                    {foodTypes.map((food, index) => (
                        <Card
                            key={food.title}
                            className="flex flex-col md:flex-row items-center bg-card/80 rounded-xl shadow-warm overflow-hidden hover-scale transition-smooth backdrop-blur-sm animate-enter"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Imagem */}
                            <div className="md:w-2/5 w-full">
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="w-full h-80 object-cover"
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="md:w-3/5 w-full p-6 space-y-4">
                                <h3 className="text-2xl font-semibold text-foreground">
                                    {food.title}
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    {food.points.map((point) => (
                                        <li key={point} className="flex items-start">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoodTypes;
