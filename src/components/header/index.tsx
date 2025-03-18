'use client';

import { NavigationMenuHeader } from '@/src/components/header/components/NavigationMenuHeader';
import { AvatarHeader } from '@/src/components/header/components/Avatar';
import { PopoverHeader } from '@/src/components/header/components/PopoverHeader';
import { RegistrationButton } from '@/src/components/header/components/RegistrationButton';

export const Header = () => {
  return (
    <header className="h-14">
      <div className="h-full items-center justify-between px-4 relative hidden md:flex">
        <div className="flex items-center gap-4">
          <NavigationMenuHeader />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <AvatarHeader />
        </div>

        <div className="flex items-center gap-4">
          <PopoverHeader />
          <RegistrationButton />
        </div>
      </div>
    </header>
  );
};
