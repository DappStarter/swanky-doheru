require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rate sad arrow include praise army gesture'; 
let testAccounts = [
"0xdb2e3d2b0d6ab33e12aca83b2d59fe9977f95baf720604e5f1e028a378e5b88a",
"0x0f3a879d5ae0bb4157234a05712b712eb531397cddea7f1067bc530164343e39",
"0xc018a7345a5837bc2ecfc8c03881b3ea5a187eb4b2e133cbf43398e570ffb350",
"0xd65958e6dfdd31ea4d75c45ee4cb7f2166cccab83577fb96dbdb0688873cfcb9",
"0xd7610c1cf71d61b1e6a3c213e60af04494a7f39373da20a5fdf50fd085cdf378",
"0xfd59ebe547f5c8e212d6b8c4006482e6849820dfb1e69094874c1c89339bc1ee",
"0x57b262a5e47e815d6140c25c1dbe4ef97810bbd38e8a233d43e734aa9593f708",
"0x895ec552f5f4688c26319504c41dabd76c3a482fa5940cbbffca50b7339faf37",
"0x1ffcb22aaa024621b0a1258d893ae878c2d54c2b7957e65c27e974a0f7bb96bc",
"0x6df7ae8f69f41a6c9da1c8d9c6396fb6e1edfcfc4a9214252289ad779991735a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
