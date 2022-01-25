const { ethers } = require("hardhat");

async function main() {
    const nftContrat = await ethers.getContractFactory("GameItem");

    const deployedNftContract = await nftContrat.deploy();

    console.log("NFT Contract Address:", deployedNftContract.address);
}

main().then(() => process.exit(0)).catch((err) => {
    console.log(err);
    process.exit(1);
});