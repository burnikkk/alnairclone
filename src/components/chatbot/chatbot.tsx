import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Chatbot = () => {
  return (
    <div className="fixed bottom-3 right-3 z-50">
      <button
        className={cn(
          'rounded-full bg-[#4f5fd9] w-[75px] h-[75px]',
          ' items-center justify-center flex',
          'hover:shadow-md hover:shadow-gray-500 duration-300'
        )}
      >
        <MessageCircle className=" text-white " />
      </button>
    </div>
  );
};
