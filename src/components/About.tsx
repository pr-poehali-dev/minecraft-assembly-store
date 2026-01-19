import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Все сборки тщательно протестированы и оптимизированы для стабильной работы',
    },
    {
      icon: 'Zap',
      title: 'Быстрая установка',
      description: 'Простой установщик запустит вашу сборку за пару минут',
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Наша команда всегда готова помочь с любыми вопросами',
    },
    {
      icon: 'RefreshCw',
      title: 'Регулярные обновления',
      description: 'Постоянно добавляем новые моды и улучшаем баланс',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">О нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CloudMeGrup — это команда энтузиастов Minecraft, создающих качественные модпаки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Наши достижения</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2+ года</div>
              <div className="text-muted-foreground">На рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Уникальных сборки</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;