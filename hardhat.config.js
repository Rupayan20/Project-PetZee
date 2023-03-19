require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: ["0x432b2dba0a8b1aa0cc6d603648e38cf77fc3fd431487ff4cc269d544d83f6f63"],
    },
  },
};