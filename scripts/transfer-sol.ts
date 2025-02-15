import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import "dotenv/config";
import { airdropIfRequired, getKeypairFromEnvironment } from '@solana-developers/helpers';

const suppliedPublicKey = process.argv[2] || null;
const amountSOL = parseInt(process.argv[3], 10) || null;

(async () => {
  const senderKeypair = getKeypairFromEnvironment('SECRET_KEY');

  if (!suppliedPublicKey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }

  if (!amountSOL) {
    console.log(`Please provide an amount of SOL to send`);
  }

  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  // Supply if needed
  const toPubkey = new PublicKey(suppliedPublicKey);
  if (amountSOL) {
    await airdropIfRequired(
      connection,
      toPubkey,
      amountSOL * LAMPORTS_PER_SOL,
      amountSOL * LAMPORTS_PER_SOL,
    );

    await airdropIfRequired(
      connection,
      senderKeypair.publicKey,
      amountSOL * LAMPORTS_PER_SOL,
      amountSOL * LAMPORTS_PER_SOL,
    );
    console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`);

  // Start transaction
    const transaction = new Transaction();

    const transferStart = Date.now();
    const sendSolInstruction = SystemProgram.transfer({
      fromPubkey: senderKeypair.publicKey,
      toPubkey,
      lamports: amountSOL * LAMPORTS_PER_SOL,
    });
    const currentTransaction = transaction.add(sendSolInstruction);

    const signature = await sendAndConfirmTransaction(connection, transaction, [
      senderKeypair,
    ]);
    const transferEnd = Date.now();
    const transferTime = (transferEnd - transferStart) / 1000;

    console.log(`💸 Finished! Sent ${amountSOL * LAMPORTS_PER_SOL} to the address ${toPubkey}. `);
    console.log(`Fee payed for transaction is ${currentTransaction.feePayer || 0} and transfer took ${transferTime} seconds.`);
    console.log(`Transaction signature is ${signature}!`);
    console.log(`You can view your transaction on Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`);
  }
})();
