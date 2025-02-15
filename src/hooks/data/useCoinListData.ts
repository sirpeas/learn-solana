import useSWR from 'swr';
import { CoinAPI } from '@/services/API';

export const useCoinListData = (params: Parameters<typeof CoinAPI.getAssets>[0]) =>
  useSWR<Awaited<ReturnType<typeof CoinAPI.getAssets>>>(`/assets?${JSON.stringify(params)}`, () => CoinAPI.getAssets(params));
