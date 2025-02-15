'use client'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useEffect, useState } from 'react';

const WalletBalance = () => {
  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();

  useEffect(() => {
    const updateBalance = async () => {
      if (!connected) {
        return;
      }
      if (!connection || !publicKey) {
        console.error('Wallet not connected or connection unavailable');
      }

      try {
        if (publicKey) {
          connection.onAccountChange(
            publicKey,
            (updatedAccountInfo) => {
              console.log(updatedAccountInfo)
              setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
            },
            'confirmed',
          );

          const accountInfo = await connection.getAccountInfo(publicKey);
          if (accountInfo) {
            setBalance(accountInfo.lamports / LAMPORTS_PER_SOL);
          } else {
            console.error('Account info not found');
          }
        }
      } catch (error) {
        console.error('Failed to retrieve account info:', error);
      }
    };

    updateBalance();
  }, [connection, publicKey]);

  if (!publicKey) {
    return null;
  }

  return (
    <div className="bg-cyan-950 inline-block p-4 text-white rounded-lg">
      {publicKey ? `Balance: ${balance} SOL` : ""}
    </div>
  );
};
WalletBalance.displayName = 'WalletBalance';

export default WalletBalance;
