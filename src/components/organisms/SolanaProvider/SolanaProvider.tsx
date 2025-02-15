'use client'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { FC, useMemo } from 'react';
import "@solana/wallet-adapter-react-ui/styles.css";
import { Props } from './types';

const endpoint = clusterApiUrl('devnet');
const SolanaProvider: FC<Props> = (props) => {
  const { children } = props;
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
SolanaProvider.displayName = 'SolanaProvider';

export default SolanaProvider;
