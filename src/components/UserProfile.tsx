import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Purchase {
  id: number;
  title: string;
  date: string;
  price: number;
  status: 'completed' | 'pending';
}

interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const UserProfile = () => {
  const [purchases] = useState<Purchase[]>([
    {
      id: 1,
      title: 'Технологическая сборка',
      date: '15.01.2026',
      price: 299,
      status: 'completed',
    },
    {
      id: 2,
      title: 'Магическая сборка',
      date: '10.01.2026',
      price: 349,
      status: 'completed',
    },
  ]);

  const [favorites] = useState<FavoriteItem[]>([
    { id: 3, title: 'Приключения', price: 399, image: '🗺️' },
    { id: 5, title: 'Средневековье', price: 329, image: '🏰' },
  ]);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold mb-4">
            У
          </div>
          <h2 className="text-3xl font-bold mb-2">Личный кабинет</h2>
          <p className="text-muted-foreground">user@example.com</p>
        </div>

        <Tabs defaultValue="purchases" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="purchases">История покупок</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
          </TabsList>

          <TabsContent value="purchases" className="space-y-4 mt-6">
            {purchases.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Icon name="ShoppingBag" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">У вас пока нет покупок</p>
                </CardContent>
              </Card>
            ) : (
              purchases.map((purchase) => (
                <Card key={purchase.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{purchase.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{purchase.date}</p>
                      </div>
                      <Badge variant={purchase.status === 'completed' ? 'default' : 'secondary'}>
                        {purchase.status === 'completed' ? 'Завершено' : 'Ожидание'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{purchase.price} ₽</span>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Icon name="Download" size={16} />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4 mt-6">
            {favorites.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Icon name="Heart" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">У вас пока нет избранных сборок</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {favorites.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{item.image}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <p className="text-xl font-bold text-primary mt-1">{item.price} ₽</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                      <Button className="flex-1 gap-2">
                        <Icon name="ShoppingCart" size={16} />
                        Купить
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Heart" size={18} className="fill-red-500 text-red-500" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UserProfile;
