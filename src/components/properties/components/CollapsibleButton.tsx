import React from 'react';
import {
  AlignLeft,
  MapPlus,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

interface CollapsibleButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (isOpen: boolean) => void;
}

export const CollapsibleButton: React.FC<CollapsibleButtonProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  return (
    <>
      <div className="hidden md:block border-l border-r w-[32px] z-10 absolute top-0 right-0 bottom-0">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-[calc(100svh-125px)] w-full flex items-center justify-center cursor-pointer"
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="block md:hidden fixed bottom-[30px] left-1/2 -translate-1/2 z-50">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full bg-black text-white h-[40px] rounded-full flex items-center justify-center text-sm px-5 py-6"
        >
          {isCollapsed ? (
            <div className="flex items-center gap-2">
              <AlignLeft />
              <p>Properties</p>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <MapPlus />
              <p>Map</p>
            </div>
          )}
        </button>
      </div>
    </>
  );
};
