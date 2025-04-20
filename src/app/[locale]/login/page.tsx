'use client';
import { Header } from '@/components/header';
import { Body } from '@/components/login/components/Body';
import { Separator } from '@/components/ui/separator';

export default function Login() {
  return (
    <div>
      <Header />
      <Separator />
      <Body />
    </div>
  );
}
