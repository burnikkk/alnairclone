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
import { useFilters } from '@/hooks/useFilters';
import { useLocation } from '@/hooks/useLocation';
import { useTranslations } from 'next-intl';

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  Dubai: { lat: 25.116987, lng: 55.496249 },
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

export const Location = () => {
  const t = useTranslations('Location');
  const { setAll } = useFilters();
  const { selectedCity, setSelectedCity } = useLocation();
  const [open, setOpen] = useState(false);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    const coords = cityCoordinates[city];
    if (coords) {
      setAll({ latitude: String(coords.lat), longitude: String(coords.lng) });
    }
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="rounded-full bg-violet text-white hover:bg-violet-light cursor-pointer"
          aria-label="Choose City"
        >
          <Navigation size={20} />
          {selectedCity}
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="md:max-w-[768px] p-6"
      >
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">
            {t('select_city')}
          </DialogTitle>
          <DialogDescription>{t('select_description')}</DialogDescription>
        </DialogHeader>

        <NavigationMenu>
          <NavigationMenuList className="grid grid-cols-3 gap-6 p-4 items-start">
            <NavigationMenuItem>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Flag code="AE" className="w-5 h-5" />
                United Arab Emirates
              </h3>
              {[
                'Dubai',
                'Abu Dhabi',
                'Sharjah',
                'Ras Al Khaimah',
                'Ajman',
                'Umm Al Quwain',
              ].map((city) => (
                <NavigationMenuLink asChild key={city}>
                  <button
                    onClick={() => handleCitySelect(city)}
                    className={`px-2 py-1 rounded hover:text-violet-light transition ${
                      selectedCity === city ? ' text-violet font-semibold' : ''
                    }`}
                  >
                    {city}
                  </button>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Flag code="TH" className="w-5 h-5" />
                Thailand
              </h3>
              {[
                'Phuket',
                'Samui',
                'Bangkok',
                'Pattaya',
                'Chiang Mai',
                'Hua Hin',
              ].map((city) => (
                <NavigationMenuLink asChild key={city}>
                  <button
                    onClick={() => handleCitySelect(city)}
                    className={`px-2 py-1 rounded hover:text-gray-700 bg-none transition ${
                      selectedCity === city ? ' text-violet font-semibold' : ''
                    }`}
                  >
                    {city}
                  </button>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Flag code="OM" className="w-5 h-5" />
                Oman
              </h3>
              {['Muscat', 'Salalah', 'Duqm'].map((city) => (
                <NavigationMenuLink asChild key={city}>
                  <button
                    onClick={() => handleCitySelect(city)}
                    className={`px-2 py-1 rounded hover:text-gray-700 bg-none transition ${
                      selectedCity === city ? ' text-violet font-semibold' : ''
                    }`}
                  >
                    {city}
                  </button>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>

            <NavigationMenuItem className="col-span-3">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Flag code="ID" className="w-5 h-5" />
                Indonesia
              </h3>
              <NavigationMenuLink asChild>
                <button
                  onClick={() => handleCitySelect('Bali')}
                  className={`px-2 py-1 rounded hover:text-gray-700 bg-none transition ${
                    selectedCity === 'Bali' ? ' text-violet font-semibold' : ''
                  }`}
                >
                  Bali
                </button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
};
