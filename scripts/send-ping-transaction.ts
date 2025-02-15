import {
  Connection,
  Transaction,
  PublicKey,
  TransactionInstruction,
  clusterApiUrl,
  sendAndConfirmTransaction,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import 'dotenv/config';
import {
  getKeypairFromEnvironment,
  airdropIfRequired,
} from '@solana-developers/helpers';

const PING_PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PING_PROGRAM_DATA_ADDRESS =
  "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

(async () => {
  const payer = getKeypairFromEnvironment('SECRET_KEY');
  const connection = new Connection(clusterApiUrl('devnet'));

  await airdropIfRequired(
    connection,
    payer.publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
  );

  const transaction = new Transaction();
  const programId = new PublicKey(PING_PROGRAM_ADDRESS);
  const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS);

  const instruction = new TransactionInstruction({
    keys: [
      {
        pubkey: pingProgramDataId,
        isSigner: false,
        isWritable: true,
      },
    ],
    programId,
  });

  transaction.add(instruction);

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer],
  );

  console.log(`✅ Transaction completed! Signature is ${signature}`);
  console.log(`You can view your transaction on Solana Explorer at:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`);
})();
