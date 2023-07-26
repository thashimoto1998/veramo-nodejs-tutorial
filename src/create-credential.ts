import { UploadToIPFS } from './uploadIPFS.js';
import { agent } from './veramo/setup.js'
import dotenv from 'dotenv';
import { NftContract } from './blockchain/nftContract.js';
dotenv.config();

async function main() {
  const verifiableCredential = await agent.createVerifiableCredential({
     credential: {
       issuer: { id:  'did:ethr:goerli:0x0304ec43e1510029d2bc230d41c17b27a9ac3f132dc254d3453e1f0b6a21f2fdd1'},
       credentialSubject: {
        contractAddress: '0xd7E08464E8a8451732F0A8212C033f89bB190a5D',
        tokenId: '4',
        issuerName: 'osaka expo'
      },
    },
    proofFormat: 'jwt',
  })
  console.log(verifiableCredential);
  
  const uploadToIPFS = new UploadToIPFS(process.env.NFT_STORAGE_KEY!);
  const vcUrl = await uploadToIPFS.uploadVerifiableCredential(JSON.stringify(verifiableCredential));
  console.log(vcUrl);
  
  const metadataUrl = await uploadToIPFS.uploadMetadata('test name', 'test description', 'https://test.com/', vcUrl);
  console.log(metadataUrl);

  const nftContract = new NftContract(process.env.PROVIDER_URL!, process.env.PRIVATE_KEY!, '0xd7E08464E8a8451732F0A8212C033f89bB190a5D')
  nftContract.safeMint('0x88a3473dA09Cc38Ee29aDD599DAbb8E590bA6fF1', 4, metadataUrl);
}

main().catch(console.log)
