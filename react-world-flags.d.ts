declare module 'react-world-flags' {
  import React from 'react';

  interface FlagProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    code: string;
    fallback?: React.ReactNode;
  }

  const Flag: React.FC<FlagProps>;
  export default Flag;
}
