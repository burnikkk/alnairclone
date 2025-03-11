'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavigationMenuHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>О нас</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-0 m-0 box-border w-screen grid-cols-[auto_auto_auto] justify-start">
              <li className="pl-8 text-left">
                <h3 className="text-black font-bold mb-2">База знаний</h3>
                <ul className="p-0 text-sm text-left">
                  <ListItem href="#" title="Поиск" />
                  <ListItem href="#" title="Коммерческое предложение" />
                  <ListItem href="#" title="Фиды и интеграция" />
                  <ListItem href="#" title="Бронирование" />
                  <ListItem
                    href="#"
                    title="Создание агентства и управления пользователями"
                  />
                </ul>
              </li>

              <li className="min-w-max ml-4 text-left">
                <h3 className="text-black font-bold mb-2">Сервисы</h3>
                <ul className="space-y-1 text-sm">
                  <ListItem href="#" title="Все о нас" />
                  <ListItem href="#" title="Для агенств" />
                </ul>
              </li>

              <li className="min-w-max ml-4 text-left">
                <h3 className="text-black font-bold mb-2">
                  Условия использования
                </h3>
                <ul className="space-y-1 text-sm">
                  <ListItem href="#" title="Условия эксплуатации" />
                  <ListItem href="#" title="Политика конфиденциальности" />
                  <ListItem href="#" title="Политика cookie" />
                  <ListItem href="#" title="Контакты" />
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Застройщики
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Районы
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ForwardedRef<HTMLAnchorElement>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
