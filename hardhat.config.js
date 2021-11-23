require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "769a4ac559ec49d79bbccfe8146eba33"

module.exports = {

  networks: {

    hardhat: {
      chainId: 1337
    },

    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      //    url: "https://rpc-mumbai.matic.today",
      url: "https://matic-mumbai.chainstacklabs.com",
      // and change it from 2:15:00
      accounts: [privateKey]
    },
    mainnet: {
      //url: "/https://matic-mainnet.chainstacklabs.com/"
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },

  solidity: "0.8.4",
};
