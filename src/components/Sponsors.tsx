import { Card, CardContent } from '@/components/ui/card';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'RBShop',
      description: 'Лучший магазин игровых товаров',
      emoji: '🛒',
    },
    {
      name: 'MCShop',
      description: 'Всё для Minecraft серверов',
      emoji: '⛏️',
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши спонсоры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Партнёры, которым мы доверяем
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card
              key={sponsor.name}
              className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="text-5xl">{sponsor.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{sponsor.name}</h3>
                  <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
