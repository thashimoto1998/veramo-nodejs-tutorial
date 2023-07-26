import { agent } from './veramo/setup.js'
import { TKeyType } from '@veramo/core'

async function main() {
  const keyData = {
    alias: 'charlie',
    kid: 'myImportedKey',
    kms: 'local',
    type: <TKeyType>'Ed25519',
    privateKeyHex: 'ed3991fa33d4df22c88b78249e4d73c509c640a873a66808ad5dce774334ce94ee5072bc20355b4cd5499e04ee70853591bffa1874b1b5467dedd648d5b89ecb',
    meta: { foo: 'bar' },
  }
  const key = await agent.keyManagerImport(keyData)
  console.log(key);
}

main().catch(console.log)