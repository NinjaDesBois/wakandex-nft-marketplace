require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim()

const projectId = "7cb24ea0f92d4bc4a5c324a2af2fc236"


module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337
        },
        mumbai: {
            url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
            accounts: [privateKey]
        },
        mainnet: {
            url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
            accounts: [privateKey]
        },
    },
    solidity: "0.8.4",
    settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};