import { agent } from './veramo/setup.js'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      "credentialSubject": {
        "contractAddress": "0x00000A",
        "tokenId": "1",
        "issuerName": "osaka expo"
      },
      "issuer": {
        "id": "did:ethr:goerli:0x0216f17afc876c83d0d69d8fb3f8ea86da823da1b32043538226fe8f4dda05117b"
      },
      "type": [
        "VerifiableCredential"
      ],
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      "issuanceDate": "2023-07-25T13:47:35.000Z",
      "proof": {
        "type": "JwtProof2020",
        "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImNvbnRyYWN0QWRkcmVzcyI6IjB4MDAwMDBBIiwidG9rZW5JZCI6IjEiLCJpc3N1ZXJOYW1lIjoib3Nha2EgZXhwbyJ9fSwibmJmIjoxNjkwMjkyODU1LCJpc3MiOiJkaWQ6ZXRocjpnb2VybGk6MHgwMjE2ZjE3YWZjODc2YzgzZDBkNjlkOGZiM2Y4ZWE4NmRhODIzZGExYjMyMDQzNTM4MjI2ZmU4ZjRkZGEwNTExN2IifQ.LEmKGHJ0yUP2YYNETKSkNhS6CULNx_YrH-tMx9Ok9ZFKLewfapaQFuTv9Q4geLsTXFhXMIywk7OtQMOoryvK_g"
      }
    }
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)