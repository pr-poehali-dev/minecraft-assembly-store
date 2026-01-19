import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '#home' },
    { name: 'Каталог', path: '#catalog' },
    { name: 'О нас', path: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            C
          </div>
          <span className="text-xl font-bold">CloudMeGrup</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)} className="hidden md:flex">
              Войти
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                {!isLoggedIn && (
                  <Button onClick={() => setIsLoggedIn(true)} className="mt-4">
                    Войти
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
