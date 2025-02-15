import useSWR from 'swr';
import { CoinAPI } from '@/services/API';

export const useCoinIconsData = (params: Parameters<typeof CoinAPI.getAssetsIcons>[0]) =>
  useSWR<Awaited<ReturnType<typeof CoinAPI.getAssetsIcons>>>(`/assets/icons?${JSON.stringify(params)}`, () => CoinAPI.getAssetsIcons(params));
