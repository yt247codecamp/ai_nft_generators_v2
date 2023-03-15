require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.18",
    networks: {
        goerli: {
            url: process.env.GOERLI_HTTPS,
            accounts: [process.env.PRIVATE_KEY],
        },
        // sepolia: {
        //     url: process.env.SEPOLIA_HTTPS,
        //     accounts: [process.env.PRIVATE_KEY],
        // },
    },
    etherscan: {
        apiKey: "H25ZCF74VN1INBPFUC2K79A41PQ14V7GRK",
    },
};
