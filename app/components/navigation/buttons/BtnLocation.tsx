import React, { useState } from 'react';
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
import Flag from 'react-world-flags';
import { useFilters } from '@/app/hooks/useFilters';

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  Dubai: { lat: 25.276987, lng: 55.296249 },
  'Abu Dhabi': { lat: 24.453884, lng: 54.3773438 },
  Sharjah: { lat: 25.346255, lng: 55.420931 },
  'Ras Al Khaimah': { lat: 25.8006926, lng: 55.9761994 },
  Ajman: { lat: 25.4052165, lng: 55.5136433 },
  'Umm Al Quwain': { lat: 25.5269951, lng: 55.6195016 },
  Phuket: { lat: 7.8804479, lng: 98.3922048 },
  Samui: { lat: 9.5120163, lng: 100.0132931 },
  Bangkok: { lat: 13.7563, lng: 100.5018 },
  Pattaya: { lat: 12.9236, lng: 100.8825 },
  'Chiang Mai': { lat: 18.7883, lng: 98.9853 },
  'Hua Hin': { lat: 12.5684, lng: 99.9577 },
  Muscat: { lat: 23.588, lng: 58.3829 },
  Salalah: { lat: 17.019, lng: 54.089 },
  Duqm: { lat: 19.6601, lng: 57.7082 },
  Bali: { lat: -8.409518, lng: 115.188919 },
};

export const BtnLocation = () => {
  const { setCoordinates } = useFilters();
  const [selectedCity, setSelectedCity] = useState('Dubai');
  const [open, setOpen] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    const coords = cityCoordinates[city];
    if (coords) {
      setCoordinates(coords.lat, coords.lng);
      console.log(`Changing coordinates to: ${coords.lat}, ${coords.lng}`);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-[#4f5fd9] text-white hover:bg-[#6e7df0]">
          <Navigation size={20} />
          {selectedCity}
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
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Dubai')}>Dubai</button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Abu Dhabi')}>
                  Abu Dhabi
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Sharjah')}>
                  Sharjah
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Ras Al Khaimah')}>
                  Ras Al Khaimah
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Ajman')}>Ajman</button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Umm Al Quwain')}>
                  Umm Al Quwain
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <h3 className="font-bold text-lg">
                <Flag code="TH" className="w-5 h-5" />
                Thailand
              </h3>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Phuket')}>
                  Phuket
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Samui')}>Samui</button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Bangkok')}>
                  Bangkok
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Pattaya')}>
                  Pattaya
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Chiang Mai')}>
                  Chiang Mai
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Hua Hin')}>
                  Hua Hin
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <h3 className="font-bold text-lg">
                <Flag code="OM" className="w-5 h-5" />
                Oman
              </h3>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Muscat')}>
                  Muscat
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Salalah')}>
                  Salalah
                </button>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Duqm')}>Duqm</button>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="col-span-3">
              <h3 className="font-bold text-lg">
                <Flag code="ID" className="w-5 h-5" />
                Indonesia
              </h3>
              <NavigationMenuLink asChild>
                <button onClick={() => handleCitySelect('Bali')}>Bali</button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
};
