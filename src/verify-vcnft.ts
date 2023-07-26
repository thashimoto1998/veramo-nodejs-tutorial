import { UploadToIPFS } from './uploadIPFS.js';
import axios from 'axios';
import { agent } from './veramo/setup.js'
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  //const identifier = await agent.didManagerGetByAlias({ alias: 'alice' })
  const verifiableCredential = await agent.createVerifiableCredential({
     credential: {
       issuer: { id:  'did:ethr:goerli:0x03c5b0ebe28f368103465e7b1ab01d16bd2ba6e6493f065eb06e246db8c766159b' },
       credentialSubject: {
        contractAddress: '0x00000A',
        tokenId: '1',
        issuerName: 'osaka expo'
      },
    },
    proofFormat: 'jwt',
  })
  console.log(verifiableCredential);

  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
  
  const uploadToIPFS = new UploadToIPFS(process.env.NFT_STORAGE_KEY!);
  const vcUrl = await uploadToIPFS.uploadVerifiableCredential(JSON.stringify(verifiableCredential));
  console.log(vcUrl);
  
  const metadataUrl = await uploadToIPFS.uploadMetadata('test name', 'test description', 'https://test.com/', vcUrl);
  console.log(metadataUrl);

  const metadata = (await axios.get(metadataUrl).catch(() => undefined))?.data;
  console.log(metadata);
  const fetchedVC = (await axios.get(metadata.verifiableCredentialUrl).catch(() => undefined))?.data;
  console.log(fetchedVC);
  console.log(JSON.parse(fetchedVC));
  const vc = JSON.parse(fetchedVC);

  const result = await agent.verifyCredential({
    credential: vc
  })
  console.log(`Credential verified`, result.verified)
  console.log("contract address:", vc.credentialSubject.contractAddress);
  console.log("token Id:", vc.credentialSubject.tokenId);
}

main().catch(console.log)