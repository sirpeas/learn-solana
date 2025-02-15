'use client';
import { SWRConfig } from 'swr'
import { FC } from 'react';

import { Props } from './types';

const SWRProvider: FC<Props> = ({ children }) => {
  return <SWRConfig>{children}</SWRConfig>;
};
SWRProvider.displayName = 'SWRProvider';

export default SWRProvider;
