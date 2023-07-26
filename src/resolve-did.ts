import { agent } from './veramo/setup.js'

async function main() {
  const didDocument = await agent.resolveDid({
    didUrl: 'did:ethr:goerli:0x0361fe5fcf149e7abdb8bcfd624bfc8aa2aa71f90b9dbfc3d9c933caf36fad0d3c'
  })
  console.log(didDocument.didDocument)
}

main().catch(console.log)