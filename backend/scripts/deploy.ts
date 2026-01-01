import { ethers } from "hardhat";

async function main() {
  console.log("Deploying TokenFactory....")

  // Deploy TokenFactory
  const TokenFactory = await ethers.getContractFactory("TokenFactory")
  const tokenFactory = await TokenFactory.deploy()

  await tokenFactory.waitForDeployment()

  const address = await tokenFactory.getAddress()

  console.log("TokenFactory Deployed to: ", address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })