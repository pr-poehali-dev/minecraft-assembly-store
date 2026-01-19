import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
                C
              </div>
              <span className="text-lg font-bold">CloudMeGrup</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональные сборки модов для Minecraft
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-foreground transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-foreground transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Связь</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://t.me/bluerisepod" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a
                href="https://t.me/bluerisepod"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 CloudMeGrup. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;