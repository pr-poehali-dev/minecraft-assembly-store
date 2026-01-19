import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Лучшие сборки для Minecraft
            </h1>
            <p className="text-lg text-muted-foreground">
              Профессионально собранные модпаки с проработанным балансом. Готовы к игре сразу после установки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#catalog">
                  <Icon name="ShoppingCart" size={20} />
                  Смотреть каталог
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#about">
                  <Icon name="Info" size={20} />
                  О нас
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Довольных игроков</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Готовых сборки</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-8xl">🎮</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} />
                <div>
                  <div className="font-bold">4.9/5.0</div>
                  <div className="text-xs opacity-90">Рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;