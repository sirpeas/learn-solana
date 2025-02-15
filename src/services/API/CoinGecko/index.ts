import { get } from '../base';

import { MarketCoinsParams, MarketCoinsResponseType } from './types';

export const CoinGeckoAPI = {
  getMarketCoins: (params: MarketCoinsParams) => get('/coins/markets', {
    searchParams: params,
  }).json<MarketCoinsResponseType>(),
};
