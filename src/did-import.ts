import { agent } from './veramo/setup.js'

async function main() {
    const account = `0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1`
    const did = `did:ethr:goerli:${account}`
    const controllerKeyId = `ethers-${account}`
    const identifier = await agent.didManagerImport({
      did,
      provider: 'did:ethr:goerli',
      controllerKeyId,
      keys: [
        {
          kid: controllerKeyId,
          type: 'Secp256k1',
          kms: 'web3',
          privateKeyHex: '',
          publicKeyHex: '',
          meta: {
            account,
            provider: 'ethers',
            algorithms: ['eth_signMessage', 'eth_signTypedData'],
          },
        },
      ],
    })

    console.log("identifier:", identifier);
}

main().catch(console.log)