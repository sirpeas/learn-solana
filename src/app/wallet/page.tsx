'use client'
import { useWallet } from '@solana/wallet-adapter-react';
import SendSolForm from '@/components/organisms/SendSolForm';
import WalletBalance from '@/components/organisms/WalletBalance';


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
