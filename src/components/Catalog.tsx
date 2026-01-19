import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
      title: 'Технологическая сборка',
      description: 'Индустриальные моды для автоматизации и создания машин',
      price: 299,
      category: 'tech',
      version: '1.20.1',
      image: '⚙️',
      featured: true,
    },
    {
      id: 2,
      title: 'Магическая сборка',
      description: 'Волшебство, заклинания и мистические артефакты',
      price: 349,
      category: 'magic',
      version: '1.19.4',
      image: '🔮',
      featured: true,
    },
    {
      id: 3,
      title: 'Приключения',
      description: 'Новые биомы, структуры и квесты для исследования',
      price: 399,
      category: 'adventure',
      version: '1.20.1',
      image: '🗺️',
      featured: false,
    },
    {
      id: 4,
      title: 'PvP арена',
      description: 'Оптимизированная сборка для битв с друзьями',
      price: 249,
      category: 'pvp',
      version: '1.20.1',
      image: '⚔️',
      featured: false,
    },
    {
      id: 5,
      title: 'Средневековье',
      description: 'Постройки, замки и жизнь в средневековом мире',
      price: 329,
      category: 'adventure',
      version: '1.19.2',
      image: '🏰',
      featured: true,
    },
    {
      id: 6,
      title: 'Космическая одиссея',
      description: 'Освоение космоса, ракеты и межпланетные путешествия',
      price: 449,
      category: 'tech',
      version: '1.20.1',
      image: '🚀',
      featured: false,
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const categories = [
    { value: 'all', label: 'Все сборки' },
    { value: 'tech', label: 'Технологии' },
    { value: 'magic', label: 'Магия' },
    { value: 'adventure', label: 'Приключения' },
    { value: 'pvp', label: 'PvP' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredModpacks =
    activeCategory === 'all'
      ? modpacks
      : modpacks.filter((pack) => pack.category === activeCategory);

  return (
    <section id="catalog" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Каталог сборок</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите готовую сборку или закажите уникальную под ваши пожелания
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModpacks.map((pack, index) => (
            <Card
              key={pack.id}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
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
                      name={favorites.includes(pack.id) ? 'Heart' : 'Heart'}
                      size={18}
                      className={favorites.includes(pack.id) ? 'fill-red-500 text-red-500' : ''}
                    />
                  </Button>
                </div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-6xl mb-4">
                  {pack.image}
                </div>
                <CardTitle className="text-xl">{pack.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{pack.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{pack.version}</Badge>
                  {pack.featured && <Badge variant="default">Популярная</Badge>}
                </div>
                <div className="text-2xl font-bold text-primary">{pack.price} ₽</div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1 gap-2">
                  <Icon name="ShoppingCart" size={18} />
                  Купить
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Info" size={18} />
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
