import axios from 'axios';
import { UploadToIPFS } from './uploadIPFS.js';
import { agent } from './veramo/setup.js'
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  //const identifier = await agent.didManagerGetByAlias({ alias: 'alice' })

  const verifiableCredential = await agent.createVerifiableCredential({
     credential: {
       issuer: { id:  'did:ethr:goerli:0x0361fe5fcf149e7abdb8bcfd624bfc8aa2aa71f90b9dbfc3d9c933caf36fad0d3c'},
       credentialSubject: {
        contractAddress: '0x00000A',
        tokenId: '1',
        issuerName: 'osaka expo'
      },
    },
    proofFormat: 'jwt',
  })
  console.log(verifiableCredential);

  /** 
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

  const metadata = (await axios.get(metadataUrl).catch(() => undefined))?.data;
  console.log(metadata);
  const fetchedVC = (await axios.get(metadata.verifiableCredentialUrl).catch(() => undefined))?.data;
  console.log(fetchedVC);
  console.log(JSON.parse(fetchedVC));
  */
}

main().catch(console.log)