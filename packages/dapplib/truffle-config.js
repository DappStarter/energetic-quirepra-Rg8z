require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purchase install entire off they'; 
let testAccounts = [
"0x1ae1f5d088fe006812b2a020328364f180587b567a16526aa85daa9318bf9fb9",
"0xf27a8a09e42e6d6257bd418a7203ae77aa78a2fcbce9678bbde871a24baecb5c",
"0x56c93d281ec80967f27d2ef91cc57a4dc78c15ac8f3729e06db74f6cfd5f7d3d",
"0x55ca17b1eb9904502e8217562a239a8114f338ccd6819f903738934f032b1783",
"0xabd9429132c21b8b3c0ef8a1198abb95b0285b4723b7a9954ab0353e1be5fff8",
"0x6fade0917f4491335e26865619dbb22d446566d0de4601de28e49feb02fe43a3",
"0x5bf00316313ccad7d3344859c9576e50895443707402bcbb9b4514c6f5364963",
"0xf4fb847e554e4dd919b3fdfee1791a4b321fd66d386dfe2218a0ed521c93c9eb",
"0x4971c59e06322337c1d1471ec9ff1c4a3ff8aa2fea49cd44f227ea557c1fe9a8",
"0x911342cfb778ec3e8aec42f957853522a574dbc2fd00582c706e7a6677cc1985"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

