import { get } from '../base';
import { AssetsIconParams, AssetsIconResponse, AssetsParams, AssetsResponse } from './types';

const commonRequestParams = {
  prefixUrl: process.env.NEXT_PUBLIC_COIN_API_URL,
  headers: {
    'Accept': 'application/json',
    'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API_KEY,
  },
};

export const CoinAPI = {
  getAssets: (params: AssetsParams) => get('assets', {
    ...commonRequestParams,
    searchParams: {
      ...params,
      filter_asset_id: params.filter_asset_id.join(','),
    },
  }).json<AssetsResponse>(),
  getAssetsIcons: (params: AssetsIconParams) => get(`assets/icons/${params.size}`, {
      ...commonRequestParams,
    }).json<AssetsIconResponse>(),

};
