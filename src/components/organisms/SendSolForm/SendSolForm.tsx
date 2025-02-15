'use client'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  PublicKey, SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { FormEvent, useCallback, useState } from 'react';

const SendSolForm = () => {
  const [isFormProcessing, setIsFormProcessing] = useState(false);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setIsFormProcessing(true);
      event.preventDefault();
      const target = event.target as typeof event.target & {
        wallet_address: { value: string };
        sol_amount: { value: string };
      };

      const destinationAddress = target.wallet_address.value;
      const amount = parseFloat(target.sol_amount.value);

      if (publicKey) {
        try {
          const destinationPubkey = new PublicKey(destinationAddress);

          const transaction = new Transaction().add(
            SystemProgram.transfer({
              fromPubkey: publicKey,
              toPubkey: destinationPubkey,
              lamports: amount * LAMPORTS_PER_SOL,
            })
          );

          const signature = await sendTransaction(transaction, connection);
          console.log("Transaction Signature:", signature);
        } catch (error) {
          console.error("Transaction failed:", error);
        }
      }

      setIsFormProcessing(false);
    },
    [connection, publicKey, sendTransaction]
  );

  if (!publicKey) {
    return null;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} >
        <div className="block mb-4">
          <label htmlFor="wallet_address" className="block mb-2 text-sm font-medium text-cyan-950">
            Destination Wallet Address
          </label>
          <input
            id="wallet_address"
            type="text"
            className="bg-white border border-gray-300 text-cyan-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
            placeholder="Wallet Address"
            required
          />
        </div>
        <div className="block mb-4">
          <label htmlFor="wallet_address" className="block mb-2 text-sm font-medium text-cyan-950">
            Amount in SOL
          </label>
          <input
            id="sol_amount"
            type="number"
            className="bg-white border border-gray-300 text-cyan-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors"
            placeholder="SOL Amount"
            min={0}
            required
          />
        </div>
        <button
          className="bg-cyan-950 text-white px-6 py-2 rounded-md w-full hover:bg-cyan-900 transition-colors"
          disabled={isFormProcessing}
        >
          Send
        </button>
      </form>
    </div>
  );
};
SendSolForm.displayName = 'SendSolForm';

export default SendSolForm;
