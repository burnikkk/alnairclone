import React from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface CollapsibleButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (isOpen: boolean) => void;
}

export const CollapsibleButton: React.FC<CollapsibleButtonProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  return (
    <div className="border-l border-r w-[32px] h-full z-10 absolute top-0 right-0 bottom-0 flex items-center">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="h-full w-full flex items-center justify-center bg-transparent border-none cursor-pointer"
      >
        {isCollapsed ? (
          <PanelLeftOpen className="h-4 w-4" />
        ) : (
          <PanelLeftClose className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};
