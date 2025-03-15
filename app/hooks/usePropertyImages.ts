import useSWR from 'swr';
import axios from 'axios';

interface UnsplashImage {
  urls: {
    small: string;
  };
}

const fetcher = (url: string) =>
  axios
    .get<UnsplashImage>(url, {
      headers: {
        Authorization: `EzX2TnG_MUYHrS4lKMQnYF9dnJbOcF1yOBksT7H4Eyc`,
      },
    })
    .then((res) => res.data);

export default function usePropertyImage(query: string = 'modern apartment') {
  const { data, error, isLoading } = useSWR<UnsplashImage>(
    `https://api.unsplash.com/photos/random?query=${query}`,
    fetcher
  );

  return {
    imageUrl: data?.urls?.small || '/CardComponents/img.png',
    isLoading,
    error,
  };
}
