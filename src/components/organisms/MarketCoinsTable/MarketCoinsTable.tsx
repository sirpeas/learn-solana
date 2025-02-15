'use client'
import { FC, useMemo } from 'react';
import Spinner from '@/components/atoms/Spinner';
import Table from '@/components/molecules/Table';
import { useCoinIconsData } from '@/hooks/data/useCoinIconsData';
import { useCoinListData } from '@/hooks/data/useCoinListData';
import { CryptoAsset, CryptoIcon } from '@/types/CoinAPI';
import { headers } from './constants';
import { Props } from './types';

const MarketCoinsTable: FC<Props> = (props) => {
  const { } = props;
  const { data } = useCoinListData({
    filter_asset_id: ['BTC', 'ETH', 'XRP', 'XLM', 'DOGE', 'LINK', 'ADA', 'PEPE'],
  });
  const { data: iconsData } = useCoinIconsData({
    size: 32,
  });

  const extraDataMap = useMemo(() =>
    (iconsData || []).reduce((acc, curr) => ({
      ...acc,
      [curr.asset_id]: curr,
    }), {}),
  [iconsData]);

  if (!data || !iconsData) {
    return <div className="flex justify-center items-center">
      <Spinner />
    </div>;
  }

  return (
    <Table<CryptoAsset, Record<string, CryptoIcon>>
      headers={headers}
      rows={data}
      extraData={extraDataMap}
    />
  );
};
MarketCoinsTable.displayName = 'MarketCoinsTable';

export default MarketCoinsTable;
