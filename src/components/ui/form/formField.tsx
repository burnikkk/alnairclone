import * as React from 'react';
import { FC } from 'react';
import { cn } from '@/src/lib/utils';

export type FormFieldProps = {
  name: string;
  label?: string;
  className?: string;
};

type FormFieldInnerProps = {
  children: (id: string) => React.ReactNode;
};

const FormField: FC<FormFieldProps & FormFieldInnerProps> = ({
  name,
  label,
  className,
  children,
}) => {
  const id = `${name}-${crypto.randomUUID()}`;

  if (!label) {
    return children(id);
  }

  return (
    <div className={cn('w-full flex flex-col gap-1', className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children(id)}
    </div>
  );
};

FormField.displayName = 'FormField';

export { FormField };
