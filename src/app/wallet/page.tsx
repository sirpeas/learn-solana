'use client'
import WalletBalance from '@/components/organisms/WalletBalance';
import SendSolForm from '@/components/organisms/SendSolForm';
import { useWallet } from '@solana/wallet-adapter-react';


export default function Wallet() {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <div className="text-center font-bold">
        Connect Wallet to continue
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <WalletBalance />
      <SendSolForm />
    </div>
  );
}
