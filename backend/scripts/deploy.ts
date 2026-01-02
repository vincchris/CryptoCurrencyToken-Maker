import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Deploying TokenFactory...");

  // Deploy TokenFactory
  const TokenFactory = await ethers.getContractFactory("TokenFactory");
  const tokenFactory = await TokenFactory.deploy();

  await tokenFactory.waitForDeployment();

  const address = await tokenFactory.getAddress();

  console.log("✅ TokenFactory deployed to:", address);

  // Wait a bit to ensure everything is settled
  await new Promise(resolve => setTimeout(resolve, 1000));
}

main()
  .then(() => {
    console.log("✨ Deployment completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });