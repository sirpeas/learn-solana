import Image from 'next/image';
import { TableHeader } from '@/components/molecules/Table/types';
import { numberFormatter } from '@/helpers/numberFormatter';
import { CryptoAsset, CryptoIcon } from '@/types/CoinAPI';

export const headers: TableHeader<CryptoAsset, Record<string, CryptoIcon>>[] = [{
  label: 'Asset',
  key: 'name',
  accessorFn: (rowData, extraData) => {
    console.log(rowData, extraData)
    return (
      <div className="flex justify-start items-center">
        {extraData[rowData.asset_id]?.url ? <Image src={extraData[rowData.asset_id]?.url} width={32} height={32} alt={rowData.name}/> : null}
        <span className="ml-2">{rowData.name}</span>
      </div>
    )
  },
  }, {
    label: 'Price (USD)',
    key: 'price_usd',
    accessorFn: (rowData) => `$${numberFormatter(rowData.price_usd)}`,
  }, {
    label: 'Volume (1 hour)',
    key: 'volume_1hrs_usd',
    accessorFn: (rowData) => `$${numberFormatter(rowData.volume_1hrs_usd, {notation: 'compact'})}`,
  }, {
    label: 'Volume (1 day)',
    key: 'volume_1day_usd',
    accessorFn: (rowData) => `$${numberFormatter(rowData.volume_1day_usd, {notation: 'compact'})}`,
  }, {
    label: 'Volume (1 month)',
    key: 'volume_1mth_usd',
    accessorFn: (rowData) => `$${numberFormatter(rowData.volume_1mth_usd, {notation: 'compact'})}`,
  }];
