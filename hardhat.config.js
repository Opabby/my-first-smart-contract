require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL = process.env.API_URL;

 module.exports = {
   solidity: "0.8.0",
   networks: {
     rinkeby: {
       url: 
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
 };