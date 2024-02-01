// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SimpleRegistry = await ethers.getContractFactory("SimpleRegistry");
  const simpleRegistry = await SimpleRegistry.deploy("John Doe", 25); 

  console.log("SimpleRegistry deployed to:", simpleRegistry.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
