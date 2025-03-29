'use client';

import * as React from 'react';
import { ReactElement } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

type FormProps<Form extends FieldValues> = Omit<
  React.ComponentProps<'form'>,
  'onSubmit'
> & {
  context: UseFormReturn<Form>;
  onSubmit: SubmitHandler<Form>;
};

const Form = <T extends FieldValues>(props: FormProps<T>): ReactElement => {
  const { context, onSubmit, children, ...rest } = props;

  return (
    <FormProvider {...context}>
      <form onSubmit={context.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  );
};

export { Form };
