require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.18",
    networks: {
        // goerli: {
        //     url: process.env.GOERLI_HTTPS,
        //     accounts: [process.env.PRIVATE_KEY],
        // },
        // sepolia: {
        //     url: process.env.SEPOLIA_HTTPS,
        //     accounts: [process.env.PRIVATE_KEY],
        // },
        // mumbai: {
        //     url: process.env.MUMBAI_HTTPS,
        //     accounts: [process.env.PRIVATE_KEY],
        // },
        // bscTestnet: {
        //     url: process.env.BINANCE_HTTPS,
        //     accounts: [process.env.PRIVATE_KEY],
        // },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    // etherscan: {
    //     apiKey: {
    //         polygonMumbai: process.env.POLYGONSCAN_API_KEY,
    //         bscTestnet: process.env.BSCSCAN_API_KEY,
    //     },
    // },
};
