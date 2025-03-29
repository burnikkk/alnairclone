'use client';

import { DesktopHeader } from '@/components/header/components/desktopHeader';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/header/components/mobileHeader/appSidebar';
import { AvatarHeader } from '@/components/header/components/Avatar';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { AllFilters } from '@/components/filters/AllFilters';

export const Header = () => {
  return (
    <div className="h-14">
      <div className="hidden md:block flex items-center justify-between p-2">
        <header>
          <DesktopHeader />
        </header>
      </div>

      <div className="block md:hidden h-14 flex items-top justify-between p-3 relative">
        <div className="flex-shrink-0">
          <AllFilters>
            <Button className="rounded-full">
              <Search size={20} />
            </Button>
          </AllFilters>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <AvatarHeader />
        </div>

        <div className="flex-shrink-0">
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};
