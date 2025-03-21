'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import {
  RegisterOptions,
  useController,
  useFormContext,
} from 'react-hook-form';
import { useIMask } from 'react-imask';
import { FactoryOpts } from 'imask';
import { CircleX } from 'lucide-react';
import { Input } from '../input';
import { cn, mergeRefs } from '@/src/lib/utils';
import { FormField, FormFieldProps } from '@/src/components/ui/form/formField';

type InputRules = Pick<RegisterOptions, 'required' | 'validate'>;

type FormInputProps = FormFieldProps &
  React.ComponentProps<'input'> & {
    name: string;
    rules?: InputRules;
    clearable?: boolean;
    IMask?: FactoryOpts;
  };

const FormInput = ({
  name,
  rules,
  label,
  clearable,
  IMask,
  ...rest
}: FormInputProps) => {
  const form = useFormContext();
  if (!form) throw new Error('FormInput must be used within <Form>');

  const isError = form.formState.errors[name];

  const inputRef = useRef<HTMLInputElement>(null);
  const { field, formState } = useController({ name, rules });

  const mask = useIMask(
    { overwrite: 'shift', eager: true, ...IMask },
    {
      onAccept: (_, { _unmaskedValue }) => {
        field.onChange(_unmaskedValue);
      },
    }
  );

  useEffect(() => {
    mask.setUnmaskedValue(field.value ?? '');
    if (!field.value && inputRef.current?.value) {
      inputRef.current.value = '';
    }
  }, [field.value, mask]);

  const clearField = () => {
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
    mask.setUnmaskedValue('');
    field.onChange('');
  };

  const ref = mergeRefs(inputRef, field.ref, mask.ref);

  return (
    <FormField name={name} label={label}>
      {(id) => (
        <div className="relative">
          <Input
            id={id}
            {...rest}
            name={name}
            className={cn(
              clearable && field.value ? 'pr-8' : '',
              isError && 'border-red-500'
            )}
            disabled={rest.disabled || formState.isSubmitting || field.disabled}
            onChange={(e) => {
              if (!IMask) field.onChange(e);
            }}
            value={IMask ? undefined : (field.value ?? '')}
            ref={ref}
          />
          {clearable && field.value && (
            <CircleX
              size={16}
              className="absolute top-3 right-3 cursor-pointer"
              onClick={clearField}
            />
          )}
        </div>
      )}
    </FormField>
  );
};

FormInput.displayName = 'FormInput';

export { FormInput };
