import { UploadToIPFS } from './uploadIPFS.js';
import { agent } from './veramo/setup.js'
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  // const identifier = await agent.didManagerGetByAlias({ alias: 'alice' })

  // const verifiableCredential = await agent.createVerifiableCredential({
  //   credential: {
  //     issuer: { id: identifier.did },
  //     credentialSubject: {
  //       contractAddress: '0x00000A',
  //       tokenId: '1',
  //       issuerName: 'osaka expo'
  //     },
  //   },
  //   proofFormat: 'jwt',
  // })

  const verifiableCredential = {
    issuer: 'aaa',
    proofFormat: 'jwt'
  };

  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
  
  const uploadToIPFS = new UploadToIPFS(process.env.NFT_STORAGE_KEY!);
  const vcUrl = await uploadToIPFS.uploadVerifiableCredential(JSON.stringify(verifiableCredential));
  console.log(vcUrl);
  
  const metadataUrl = await uploadToIPFS.uploadMetadata('test name', 'test description', 'https://test.com/', vcUrl);
  console.log(metadataUrl);
  
}

main().catch(console.log)