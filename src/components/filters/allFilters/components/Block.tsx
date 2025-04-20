import React, { FC, PropsWithChildren } from 'react';

type BlockProps = PropsWithChildren & {
  title: string;
};

export const Block: FC<BlockProps> = ({ title, children }) => {
  return (
    <div className={'flex flex-col gap-3'}>
      <h2 className="font-semibold text-xl">{title}</h2>
      {children}
    </div>
  );
};
