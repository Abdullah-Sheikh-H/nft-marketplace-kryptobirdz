require("@nomiclabs/hardhat-waffle");

const fs = require('fs')

const dataKey = fs.readFileSync('./p-key.txt', {encoding: 'utf8', flag: 'r'})

projectId = '604d50e0109b44d09fb7af121dd508c1'


module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337
    },
    ropsten: {
      url: `https://mainnet.infura.io/v3/${projectId}`, 
      accounts:[dataKey]
    },
    mainnet:{
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[dataKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
};
