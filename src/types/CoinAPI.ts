export type ChainAddress = {
  chain_id?: string;
  network_id?: string;
  address?: string;
};

export type CryptoAsset = {
  asset_id: string;
  name: string;
  type_is_crypto: number;
  data_quote_start: string;
  data_quote_end: string;
  data_orderbook_start: string;
  data_orderbook_end: string;
  data_trade_start: string;
  data_trade_end: string;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  price_usd: number;
  id_icon: string;
  // supply_current: number;
  // supply_total: number;
  // supply_max: number;
  chain_addresses: ChainAddress[];
  data_start: string;
  data_end: string;
};

export type CryptoIcon = {
  exchange_d: string;
  asset_id: string;
  url: string;
}
