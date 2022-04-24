/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 require('@nomiclabs/hardhat-ethers');

 const {ALCHEMY_API_URL, PRIVATE_KEY} = process.env; //environment variables are being loaded here.

 module.exports = {
   solidity: "0.8.1",
   defaultNetwork: 'rinkeby',
   networks: {
     hardhat: {},
     rinkeby: {
         url: ALCHEMY_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
     }
   }
 };
