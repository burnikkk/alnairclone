'use client';

import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

export const TextLorem = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <p className="pt-4 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
        dignissimos excepturi, exercitationem id in incidunt minima nam natus
        necessitatibus perspiciatis quo rerum sint sit, soluta sunt suscipit
        voluptas voluptatibus.
        {expanded && (
          <>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            aspernatur dignissimos excepturi, exercitationem id in incidunt
            minima nam natus necessitatibus perspiciatis quo rerum sint sit,
            soluta sunt suscipit voluptas voluptatibus. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. A aspernatur dignissimos
            excepturi, exercitationem id in incidunt minima nam natus
            necessitatibus perspiciatis quo rerum sint sit, soluta sunt suscipit
            voluptas voluptatibus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. A aspernatur dignissimos excepturi, exercitationem
            id in incidunt minima nam natus necessitatibus perspiciatis quo
            rerum sint sit, soluta sunt suscipit voluptas voluptatibus.
          </>
        )}
      </p>

      <div className="w-full grid grid-cols-3 gap-2 items-center justify-center">
        <Separator />
        <button
          className="text-violet font-medium cursor-pointer"
          onClick={toggleReadMore}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
        <Separator />
      </div>
    </>
  );
};
