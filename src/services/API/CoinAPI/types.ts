import { CryptoAsset, CryptoIcon } from '@/types/CoinAPI';

export type AssetsParams = {
  filter_asset_id: string[];
};

export type AssetsResponse = CryptoAsset[];

export type AssetsIconParams = {
  size: number;
};

export type AssetsIconResponse = CryptoIcon[];
