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
import { useTranslations } from 'next-intl';

export const NavigationMenuHeader = () => {
  const t = useTranslations('NavigationMenuHeader');
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('about_us')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-screen grid grid-cols-[auto_auto_auto] gap-4 justify-start p-4 pl-12 box-border font-semibold">
              <li className="text-left">
                <h3 className="pb-2">{t('knowledge_base')}</h3>
                <ul>
                  <ListItem href="#" title={t('search')} />
                  <ListItem href="#" title={t('commercial_offer')} />
                  <ListItem href="#" title={t('feeds_integration')} />
                  <ListItem href="#" title={t('booking')} />
                  <ListItem href="#" title={t('agency_management')} />
                </ul>
              </li>

              <li className="text-left pr-10">
                <h3 className="pb-2">{t('services')}</h3>
                <ul>
                  <ListItem href="#" title={t('about_us_full')} />
                  <ListItem href="#" title={t('for_agencies')} />
                </ul>
              </li>

              <li className="min-w-max text-left">
                <h3 className="pb-2">{t('terms_of_use')}</h3>
                <ul>
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
};

const ListItem = React.forwardRef<
  React.ForwardedRef<HTMLAnchorElement>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn('block select-none hover:text-gray-700', className)}
          {...props}
        >
          <div className="text-sm font-semibold">{title}</div>
          <p className="text-sm text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
