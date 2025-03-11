import React, { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import styles from '@/app/page.module.css';

interface CollapsibleButtonProps {
  isCollapsed: boolean;
  setIsCollapsed: (isOpen: boolean) => void;
}

export const CollapsibleButton: React.FC<CollapsibleButtonProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  return (
    <div className={styles['collapse_project_list_button']}>
      <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
        <div className="flex items-center justify-between space-x-4">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-full w-full">
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2"></CollapsibleContent>
      </Collapsible>
    </div>
  );
};
