import useSWR from 'swr';
import axios from 'axios';

interface UnsplashImage {
  urls: {
    small: string;
  };
}

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Client-ID EzX2TnG_MUYHrS4lKMQnYF9dnJbOcF1yOBksT7H4Eyc`,
      },
    })
    .then((res) => res.data);

export default function useObjectImages(query: string) {
  const { data, error, isLoading } = useSWR<UnsplashImage[]>(
    `https://api.unsplash.com/photos/random?query=${query}&count=5`,
    fetcher
  );

  const rawImages = data?.map((img) => img.urls.small) ?? [];

  const images = Array.from(
    { length: 5 },
    (_, i) => rawImages[i] || '/icons/img.png'
  );

  return {
    images,
    isLoading,
    error,
  };
}
