import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ModPack {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  version: string;
  image: string;
  featured: boolean;
}

const Catalog = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const modpacks: ModPack[] = [
    {
      id: 1,
      title: 'ReallyWorld',
      description: 'Реалистичная сборка с улучшенной графикой и физикой',
      price: 150,
      category: 'all',
      version: '1.20.1',
      image: '🌍',
      featured: true,
    },
    {
      id: 2,
      title: 'HollyWorld',
      description: 'Магическая сборка с мистическими приключениями',
      price: 160,
      category: 'all',
      version: '1.20.1',
      image: '✨',
      featured: true,
    },
    {
      id: 3,
      title: 'FunTime',
      description: 'Развлекательная сборка с мини-играми и квестами',
      price: 230,
      category: 'all',
      version: '1.20.1',
      image: '🎉',
      featured: true,
    },
    {
      id: 4,
      title: 'BlueRise',
      description: 'Облегчённая сборка для комфортной игры',
      price: 100,
      category: 'all',
      version: '1.20.1',
      image: '🔵',
      featured: false,
    },
  ];

  const handlePurchase = (packTitle: string) => {
    window.open('https://t.me/bluerisepod', '_blank');
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section id="catalog" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Каталог сборок</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите готовую сборку для вашего сервера
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modpacks.map((pack, index) => (
            <Card
              key={pack.id}
              className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur"
                    onClick={() => toggleFavorite(pack.id)}
                  >
                    <Icon
                      name="Heart"
                      size={18}
                      className={favorites.includes(pack.id) ? 'fill-red-500 text-red-500' : ''}
                    />
                  </Button>
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl mb-4">
                  {pack.image}
                </div>
                <CardTitle className="text-xl">{pack.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{pack.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{pack.version}</Badge>
                  {pack.featured && <Badge className="bg-primary">Популярная</Badge>}
                </div>
                <div className="text-2xl font-bold text-primary">{pack.price} ₽</div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2" 
                  onClick={() => handlePurchase(pack.title)}
                >
                  <Icon name="ShoppingCart" size={18} />
                  Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;