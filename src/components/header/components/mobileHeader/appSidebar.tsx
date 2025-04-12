import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { MobileNavMenu } from '@/components/header/components/mobileHeader/MobileNavMenu';
import { PopoverHeader } from '@/components/header/components/PopoverHeader';
import { RegistrationButton } from '@/components/header/components/RegistrationButton';
import { SquareArrowLeft, X } from 'lucide-react';
import { Location } from '@/components/filters/Location';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="w-full p-3 grid grid-cols-[auto_auto_auto] items-center justify-between gap-2">
        <SidebarTrigger>
          <SquareArrowLeft
            className="size-6 cursor-pointer"
            aria-hidden="true"
          />
        </SidebarTrigger>

        <Location />
        <SidebarTrigger>
          <X className="size-6 cursor-pointer p-0" aria-hidden="true" />
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent className="w-full gap-0">
        <div className="w-full flex items-center justify-center px-4 py-6 bg-gray-100">
          <RegistrationButton />
        </div>
        <MobileNavMenu />
      </SidebarContent>

      <SidebarFooter className="bg-gray-200 ">
        <PopoverHeader />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
