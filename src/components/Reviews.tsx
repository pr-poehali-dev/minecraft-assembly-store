import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  pack: string;
}

const Reviews = () => {
  const initialReviews: Review[] = [
    {
      id: 1,
      author: 'Андрей М.',
      rating: 5,
      text: 'ReallyWorld — потрясающая сборка! Графика на высоте, всё работает стабильно.',
      date: '19.01.2026',
      pack: 'ReallyWorld',
    },
    {
      id: 2,
      author: 'Мария К.',
      rating: 5,
      text: 'FunTime превзошла все ожидания. Куча мини-игр, друзья в восторге!',
      date: '18.01.2026',
      pack: 'FunTime',
    },
    {
      id: 3,
      author: 'Дмитрий П.',
      rating: 4,
      text: 'BlueRise — отличная бюджетная сборка. Идеально для слабых ПК.',
      date: '17.01.2026',
      pack: 'BlueRise',
    },
    {
      id: 4,
      author: 'Елена С.',
      rating: 5,
      text: 'HollyWorld создаёт невероятную атмосферу! Магия и квесты на уровне.',
      date: '16.01.2026',
      pack: 'HollyWorld',
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newReviews: Review[] = [
        {
          id: Date.now(),
          author: ['Александр Т.', 'Ирина Д.', 'Максим Л.', 'Ольга В.', 'Игорь Н.'][
            Math.floor(Math.random() * 5)
          ],
          rating: Math.random() > 0.3 ? 5 : 4,
          text: [
            'Сборка просто огонь! Всем рекомендую 🔥',
            'Отличная работа, всё работает без лагов',
            'Лучшая сборка из всех что пробовал',
            'Качество на высоте, спасибо разработчикам!',
            'Очень доволен покупкой, стоит своих денег',
          ][Math.floor(Math.random() * 5)],
          date: new Date().toLocaleDateString('ru-RU'),
          pack: ['ReallyWorld', 'HollyWorld', 'FunTime', 'BlueRise'][
            Math.floor(Math.random() * 4)
          ],
        },
      ];

      setReviews((prev) => [...newReviews, ...prev].slice(0, 8));
      setHighlightedId(newReviews[0].id);
      
      setTimeout(() => setHighlightedId(null), 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium">Отзывы в реальном времени</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Что говорят игроки</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы от наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className={`transition-all duration-500 ${
                highlightedId === review.id
                  ? 'ring-2 ring-primary shadow-lg shadow-primary/20 animate-scale-in'
                  : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {review.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{review.author}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={
                        i < review.rating
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-muted-foreground/20'
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
                <div className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  <Icon name="Package" size={12} />
                  {review.pack}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
