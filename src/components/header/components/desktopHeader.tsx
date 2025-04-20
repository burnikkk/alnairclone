import { NavigationMenuHeader } from '@/components/header/components/NavigationMenuHeader';
import { AvatarHeader } from '@/components/header/components/Avatar';
import { PopoverHeader } from '@/components/header/components/PopoverHeader';
import { RegistrationButton } from '@/components/header/components/RegistrationButton';

export const DesktopHeader = () => {
  return (
    <div className="hidden md:flex h-full items-center justify-between w-full">
      <div className="flex gap-4">
        <NavigationMenuHeader />
      </div>

      <div className="relative">
        <AvatarHeader />
      </div>

      <div className="flex items-center gap-4 pr-4">
        <PopoverHeader />
        <RegistrationButton />
      </div>
    </div>
  );
};
