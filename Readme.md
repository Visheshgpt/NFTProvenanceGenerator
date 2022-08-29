# NFTProvenanceGenerator


## What is Provenance in NFTS?
Provenance is vital to NFTs since it allows you to validate changes in ownership information via the blockchain - it will give digital item tracking and tracing. The paperwork gives validity as well as the source.


## What it does
NFTProvenanceGenerator was created to make the process of creating provenance for an NFT project easier. It hashes thousands of NFTs images in seconds and returns a concatenated hash and a final hash based on the startingIndex retrieved from the smart contract. Provenance improves the fair allocation of NFT tokens.

## How it works

### Clone the project
```bash
  git clone git@github.com:Visheshgpt/NFTProvenanceGenerator.git
```

### Add your collection
```bash
 Place your collections under the images folder.
```

### Generate Individual Hash of Image
```bash
 node createImagehashes.js
```

### Generate Provenence Hash

#### Calculate your startingIndex from smartContact and paste in the generateProvenance file
```bash
 node generateProvenance.js
```

### Note
#### This tool is under development, will add more features in the future. Stay Tuned!
#### Happy Coding 😃



