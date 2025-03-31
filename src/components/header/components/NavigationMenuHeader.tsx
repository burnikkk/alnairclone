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
import { useTranslation } from 'next-i18next';

export function NavigationMenuHeader() {
  const { t } = useTranslation('NavigationMenuHeader');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('about_us')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 box-border w-screen grid-cols-[auto_auto_auto] justify-start">
              <li className="pl-8 text-left">
                <h3 className="text-black font-bold mb-2">
                  {t('knowledge_base')}
                </h3>
                <ul className="p-0 text-sm text-left">
                  <ListItem href="#" title={t('search')} />
                  <ListItem href="#" title={t('commercial_offer')} />
                  <ListItem href="#" title={t('feeds_integration')} />
                  <ListItem href="#" title={t('booking')} />
                  <ListItem href="#" title={t('agency_management')} />
                </ul>
              </li>

              <li className="min-w-max ml-4 text-left">
                <h3 className="text-black font-bold mb-2">{t('services')}</h3>
                <ul className="space-y-1 text-sm">
                  <ListItem href="#" title={t('about_us_full')} />
                  <ListItem href="#" title={t('for_agencies')} />
                </ul>
              </li>

              <li className="min-w-max ml-4 text-left">
                <h3 className="text-black font-bold mb-2">
                  {t('terms_of_use')}
                </h3>
                <ul className="space-y-1 text-sm">
                  <ListItem href="#" title={t('operating_terms')} />
                  <ListItem href="#" title={t('privacy_policy')} />
                  <ListItem href="#" title={t('cookie_policy')} />
                  <ListItem href="#" title={t('contacts')} />
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            {t('developers')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            {t('districts')}
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
