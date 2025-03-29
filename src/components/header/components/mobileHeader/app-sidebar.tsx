import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { MobileNavMenu } from '@/components/header/components/mobileHeader/MobileNavMenu';
import { PopoverHeader } from '@/components/header/components/PopoverHeader';
import { RegistrationButton } from '@/components/header/components/RegistrationButton';
import { SquareArrowLeft, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Location } from '@/components/filters/Location';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="w-full p-3 grid grid-cols-[auto_auto_auto] items-center justify-between gap-2">
        <button>
          <SquareArrowLeft
            className="h-6 w-6 cursor-pointer"
            aria-hidden="true"
          />
        </button>

        <Location />

        <button>
          <X className="h-6 w-6 cursor-pointer" aria-hidden="true" />
        </button>
      </SidebarHeader>

      <SidebarContent className="w-full">
        <Separator className="p-0" />

        <div className="w-full flex justify-center bg-gray-100 rounded-lg p-2">
          <RegistrationButton />
        </div>

        <Separator className="p-0" />
        <MobileNavMenu />
      </SidebarContent>

      <SidebarFooter className="w-full p-1">
        <PopoverHeader />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
