// The original version of the `permit2` is used. Only change in the `era-permit2` Permit2 address, should not affect `universal-router`
import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@matterlabs/hardhat-zksync-solc'
import '@matterlabs/hardhat-zksync-verify'
import '@matterlabs/hardhat-zksync-chai-matchers'
import '@matterlabs/hardhat-zksync-node'
import { task } from 'hardhat/config'
import deployZkSyncEra from './script/deploy_zksync_era'
import dotenv from 'dotenv'
dotenv.config()

const ZKSYNC_TEST_NODE_URL = 'http://localhost:8011'
// This variable is used by the hardhat-zksync-chai-matchers
process.env.ZKSYNC_WEB3_API_URL = ZKSYNC_TEST_NODE_URL

task('deploy')
  .addParam('privateKey', 'Private key used to deploy')
  .addParam('params', 'Path to params json')
  .addFlag('verify', 'Whether verify the contracts')
  .setAction(async (taskArgs) => {
    await deployZkSyncEra(taskArgs)
  })

export default {
  paths: {
    sources: './contracts',
  },
  networks: {
    hardhat: {
      zksync: true,
    },
    zkSyncTestnet: {
      url: 'https://testnet.era.zksync.dev',
      ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      zksync: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
    },
    zkSyncTestnetSepolia: {
      url: 'https://sepolia.era.zksync.dev',
      ethNetwork: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      zksync: true,
      verifyURL: 'https://explorer.sepolia.era.zksync.dev/contract_verification',
    },
    zkSyncMainnet: {
      url: 'https://mainnet.era.zksync.io',
      ethNetwork: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification',
    },
  },
  solidity: {
    version: '0.8.17',
  },
  zksolc: {
    version: '1.3.13',
    compilerSource: 'binary',
    settings: {},
  },
  mocha: {
    timeout: 100000,
  },
}
