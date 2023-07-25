import { agent } from './veramo/setup.js'

async function main() {
  const didDocument = await agent.resolveDid({
    didUrl: 'did:ethr:goerli:0x0216f17afc876c83d0d69d8fb3f8ea86da823da1b32043538226fe8f4dda05117b'
  })
  console.log(didDocument)
}

main().catch(console.log)