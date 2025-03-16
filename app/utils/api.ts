import axios from 'axios';
import { config } from '@/app/utils/config';

export const api = axios.create({
  baseURL: `${config.apiUrl}/api`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // 'Cache-Control': 'no-cache',
    // Pragma: 'no-cache',
    // Expires: '0',
  },
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
