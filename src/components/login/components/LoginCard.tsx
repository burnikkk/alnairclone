'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

type LoginFormInputs = {
  email: string;
};

export const LoginCard = () => {
  const t = useTranslations('Price');
  const tr = useTranslations('Login');

  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const onSubmit = (data: LoginFormInputs) => {
    console.log('✅ Email submitted:', data.email);
  };

  return (
    <Card
      className={cn(
        'w-full h-full pt-[100px] px-[30px]',
        'md:max-w-[640px] md:h-auto flex flex-col items-start'
      )}
    >
      <CardHeader className="p-0">
        <CardTitle className="font-semibold text-3xl pb-8">
          {tr('sign')}
        </CardTitle>
      </CardHeader>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col flex-1"
      >
        <CardContent className="w-full flex flex-col gap-6">
          <Input
            type="email"
            placeholder={tr('email')}
            className="bg-gray-100 text-gray-500 h-15 rounded-xl font-semibold"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
          />
          <div className="flex flex-col items-center gap-2 w-full">
            <Button
              type="submit"
              className="w-full text-white text-md bg-violet h-15 rounded-xl hover:bg-violet/90"
            >
              {t('show')}
            </Button>
            <p className="text-xs text-gray-500">{tr('credit_card')}</p>
          </div>
        </CardContent>
      </form>
      <CardFooter className="h-[60px] w-full flex flex-col items-center justify-center">
        <p className="text-xs text-gray-400 mt-2 text-center">{tr('info')}</p>
      </CardFooter>
    </Card>
  );
};
