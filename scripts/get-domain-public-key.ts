import { getDomainKeySync, NameRegistryState } from "@bonfida/spl-name-service";

const suppliedDomainName = process.argv[2];

try {
  const { pubkey } = getDomainKeySync(suppliedDomainName);
  console.log(`Public key of ${suppliedDomainName} is ${pubkey.toBase58()}`)
} catch (error) {
  console.error('There was an error processing your request');
}
