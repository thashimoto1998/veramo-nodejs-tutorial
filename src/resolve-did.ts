import { agent } from './veramo/setup.js'

async function main() {
  const didDocument = await agent.resolveDid({
    //didUrl: 'did:ethr:goerli:0x0361fe5fcf149e7abdb8bcfd624bfc8aa2aa71f90b9dbfc3d9c933caf36fad0d3c'
    didUrl: 'did:ethr:goerli:0x03c5b0ebe28f368103465e7b1ab01d16bd2ba6e6493f065eb06e246db8c766159b'
  })
  console.log(didDocument.didDocument)
}

main().catch(console.log)