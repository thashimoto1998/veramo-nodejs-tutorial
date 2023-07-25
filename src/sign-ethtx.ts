import { agent } from './veramo/setup.js'

async function main() {
  const signedTx = await agent.keyManagerSignEthTX({
    kid: '0416f17afc876c83d0d69d8fb3f8ea86da823da1b32043538226fe8f4dda05117baf3623f13d0123b58c584978f0125c05e51415da6db84f9423efbf47f44ea554',
    transaction: {
      to: '0xce31a19193d4b23f4e9d6163d7247243bAF801c3',
      data: '0x0000',
      value: 300000,
      gasLimit: 43092000,
      gasPrice: 20000000000,
      nonce: 1,
    }
  })
  console.log(signedTx)
}

main().catch(console.log)