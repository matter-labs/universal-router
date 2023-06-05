import hre from 'hardhat'
const { ethers } = hre

// Router Helpers
export const MAX_UINT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
export const MAX_UINT160 = '0xffffffffffffffffffffffffffffffffffffffff'
export const DEADLINE = 2000000000
export const CONTRACT_BALANCE = '0x8000000000000000000000000000000000000000000000000000000000000000'
export const ALREADY_PAID = 0
export const ALICE_PRIVATE_KEY = '0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110'
export const ALICE_ADDRESS = '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049'
export const BOB_PRIVATE_KEY = '0xac1e735be8536c6534bb4f17f06f6afc73b2b5ba84ac2cfb12f7461b20c0bbe3'
export const BOB_ADDRESS = '0xa61464658AfeAf65CccaaFD3a512b69A83B77618'
export const ETH_ADDRESS = ethers.constants.AddressZero
export const ZERO_ADDRESS= ethers.constants.AddressZero
export const ONE_PERCENT_BIPS = 100
export const MSG_SENDER: string = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS: string = '0x0000000000000000000000000000000000000002'
export const SOURCE_MSG_SENDER: boolean = true
export const SOURCE_ROUTER: boolean = false

// Constructor Params
export const V2_FACTORY_MAINNET = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V3_FACTORY_MAINNET = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const V3_INIT_CODE_HASH_MAINNET = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
export const V2_INIT_CODE_HASH_MAINNET = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const ROUTER_REWARDS_DISTRIBUTOR = '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049'
export const LOOKSRARE_REWARDS_DISTRIBUTOR = '0x0000000000000000000000000000000000000000'
export const LOOKSRARE_TOKEN = '0x0000000000000000000000000000000000000000'

export const OPENSEA_CONDUIT = '0x1e0049783f008a0085193e00003d00cd54003c71'
export const OPENSEA_CONDUIT_KEY = '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000'


