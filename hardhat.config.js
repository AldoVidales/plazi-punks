require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const proyectId=process.env.INFURA_PROJECT_ID
const privateKey=process.env.DEPLOYER_SIGNER_PRIVATE_KEY

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${proyectId}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}