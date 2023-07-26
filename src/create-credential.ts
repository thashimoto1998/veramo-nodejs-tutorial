import { agent } from './veramo/setup.js'

async function main() {
  const identifier = await agent.didManagerGetByAlias({ alias: 'alice' })

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: identifier.did },
      credentialSubject: {
        contractAddress: '0x00000A',
        tokenId: '1',
        issuerName: 'vwbl team'
      },
    },
    proofFormat: 'jwt',
  })
  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)