import "dotenv/config";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

const suppliedPublicKey = process.argv[2];
const keypair = getKeypairFromEnvironment('SECRET_KEY');

const publicKeyToCheck = suppliedPublicKey || keypair.publicKey;

const connection = new Connection(clusterApiUrl('mainnet-beta'));

try {
  const address = new PublicKey(publicKeyToCheck);
  const balance = await connection.getBalance(address);
  const balanceInSol = balance / LAMPORTS_PER_SOL;
  console.log(`💰 Finished! The balance of the account at ${address} is ${balanceInSol} SOL`);
} catch (error) {
  console.error('There was an error processing your request');
}
