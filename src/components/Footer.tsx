import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
                C
              </div>
              <span className="text-lg font-bold">CloudMeGrup</span>
            </div>
            <p className="text-sm opacity-80">
              Профессиональные сборки модов для Minecraft с 2020 года
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#home" className="hover:opacity-100 transition-opacity">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:opacity-100 transition-opacity">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  О нас
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Инструкции
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm opacity-80">
          © 2026 CloudMeGrup. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
