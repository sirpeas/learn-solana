'use client';
import { FC } from 'react';
import { SWRConfig } from 'swr'
import { Props } from './types';

const SWRProvider: FC<Props> = ({ children }) => {
  return (
    <SWRConfig value={{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
      errorRetryCount: 0,
      refreshInterval: 0,
    }}>
      {children}
    </SWRConfig>
  );
};
SWRProvider.displayName = 'SWRProvider';

export default SWRProvider;
