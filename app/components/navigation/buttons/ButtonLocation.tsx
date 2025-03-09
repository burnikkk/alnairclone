import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Navigation } from 'lucide-react';
import React from 'react';
import Flag from 'react-world-flags';

export const ButtonLocation = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-[#4f5fd9] text-white hover:bg-[#6e7df0]">
          <Navigation size={20} />
          Dubai
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[768px] p-[60px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-3xl">
            Выберите город
          </DialogTitle>
          <DialogDescription>
            Alnair работает в 16 городах в 9 странах
          </DialogDescription>
        </DialogHeader>
        <NavigationMenu>
          <NavigationMenuList className="grid grid-cols-[1fr_1fr_1fr] gap-x-16 gap-y-16 p-4 items-start">
            <NavigationMenuItem>
              <h3 className="font-bold text-lg">
                <Flag code="AE" className="w-5 h-5" />
                United Arab Emirates
              </h3>
              <NavigationMenuLink href="#">Dubai</NavigationMenuLink>
              <NavigationMenuLink href="#">Abu Dhabi</NavigationMenuLink>
              <NavigationMenuLink href="#">Sharjah</NavigationMenuLink>
              <NavigationMenuLink href="#">Ras Al Khaimah</NavigationMenuLink>
              <NavigationMenuLink href="#">Ajman</NavigationMenuLink>
              <NavigationMenuLink href="#">Umm Al Quwain</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <h3 className="font-bold">
                <Flag code="TH" className="w-5 h-5" />
                Thailand
              </h3>
              <NavigationMenuLink href="#">Phuket</NavigationMenuLink>
              <NavigationMenuLink href="#">Samui</NavigationMenuLink>
              <NavigationMenuLink href="#">Bangkok</NavigationMenuLink>
              <NavigationMenuLink href="#">Pattaya</NavigationMenuLink>
              <NavigationMenuLink href="#">Chiang Mai</NavigationMenuLink>
              <NavigationMenuLink href="#">Hua Hin</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <h3 className="font-bold">
                <Flag code="OM" className="w-5 h-5" />
                Oman
              </h3>
              <NavigationMenuLink href="#">Muscat</NavigationMenuLink>
              <NavigationMenuLink href="#">Salalah</NavigationMenuLink>
              <NavigationMenuLink href="#">Duqm</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="col-span-3">
              <h3 className="font-bold">
                <Flag code="ID" className="w-5 h-5" />
                Indonesia
              </h3>
              <NavigationMenuLink href="#">Bali</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
};
