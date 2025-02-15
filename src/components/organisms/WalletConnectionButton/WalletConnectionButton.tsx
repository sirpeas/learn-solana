'use client'
import { Wallet, SignOut } from '@phosphor-icons/react/dist/ssr';
import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback } from 'react';


const WalletConnectionButton = () => {
  const { wallets, connect, disconnect, disconnecting, connecting, connected, select } = useWallet();
  const handleConnectionClick = useCallback(async () => {
    if (disconnecting || connecting) {
      return;
    }
    if (connected) {
      try {
        await disconnect();
      } catch (err) {
        console.error('Wallet Disconnection Error:', err);
      }
      return;
    }

    const detectedWallet = wallets.find(
      (w) => w.readyState === 'Installed' || w.readyState === 'Loadable'
    );

    if (detectedWallet) {
      try {
        await select(detectedWallet.adapter.name);
        await connect();
      } catch (err) {
        console.error('Wallet Connection Error:', err);
      }
    } else {
      alert('Sorry no compatible wallet detected.')
    }
  }, [connect, disconnect, select, disconnecting, connecting]);

  return (
    <button
      className="hover:bg-white hover:text-cyan-950 p-1 transition-colors rounded-full"
      onClick={handleConnectionClick}
      disabled={connecting || disconnecting}
    >
      {connected ? <SignOut size={24}/> : <Wallet size={24}/>}
    </button>
  );
};
WalletConnectionButton.displayName = 'WalletConnectionButton';

export default WalletConnectionButton;
