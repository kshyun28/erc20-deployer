require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*'
        },
        eth_mainnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
            network_id : 1
        },
        eth_goerli: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://rpc.ankr.com/eth_goerli'),
            network_id: 5
        },
        matic_testnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://rpc-mumbai.maticvigil.com'),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        matic_mainnet: {
            provider: () => HDWalletProvider(process.env.MNEMONIC, 'https://rpc-mainnet.matic.network'),
            network_id: 137,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        bsc_testnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true
        },
        bsc_mainnet: {
            provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://bsc-dataseed1.binance.org'),
            network_id: 56,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};
