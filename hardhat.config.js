require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');
const privateKey = fs.readFileSync("privateKey.secret").toString().trim();
const alchemyKey = fs.readFileSync("alchemyKey.secret").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
    defaultNetwork: "hardhat",
    paths: {
      artifacts: './react-dapp/src/artifacts',
    },
    networks: {
      hardhat: {},
      ropsten: {
        url: `https://ropsten.infura.io/v3/${alchemyKey}`,
        accounts: [privateKey]
      }
    },
    solidity: "0.8.9",
  };