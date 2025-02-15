import { ReactNode } from 'react';

export type TableHeader<Data, ExtraData> = {
  label: string;
  key: string;
  accessorFn?: (rowData: Data, extraData: ExtraData) => ReactNode;
};

export type Props<Data, ExtraData> = {
  headers: TableHeader<Data, ExtraData>[];
  rows: Data[];
  extraData: ExtraData
};
