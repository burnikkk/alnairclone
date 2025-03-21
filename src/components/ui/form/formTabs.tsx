'use client';

import * as React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { FormField, FormFieldProps } from '@/src/components/ui/form/formField';
import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { cn } from '@/src/lib/utils';

type Option = { value: string; label: React.ReactNode };

type FormSwitchProps = FormFieldProps & {
  options: [Option, Option];
  small?: boolean;
};

const triggerCN = 'w-full flex gap-2 items-center';

const FormTabs = ({ name, label, options, small }: FormSwitchProps) => {
  const form = useFormContext();
  if (!form) throw new Error('FormSwitch must be used within <Form>');
  const [leftOption, rightOption] = options;

  const { field } = useController({ name });

  return (
    <FormField name={name} label={label}>
      {(id) => (
        <Tabs id={id} value={field.value} onValueChange={field.onChange}>
          <TabsList className={cn('w-full', small && 'h-7')}>
            <TabsTrigger
              value={leftOption.value}
              className={cn(triggerCN, small && 'h-5')}
            >
              {leftOption.label}
            </TabsTrigger>
            <TabsTrigger
              value={rightOption.value}
              className={cn(triggerCN, small && 'h-5')}
            >
              {rightOption.label}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      )}
    </FormField>
  );
};

FormTabs.displayName = 'FormTabs';

export { FormTabs };
