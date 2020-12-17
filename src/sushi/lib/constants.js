import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  sushi: {
    // updated for testnet
    // 97: '0x869446a92293DE6cEbb1b71CfcA6bd48f6bef6fC',
    97: '0x29f5b2959c1b0FE96985799Bd2E6c36187A16Ff1', 
    56:  '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    // 56: '0xbbB2aaEB8c9dA72bb7faDB42A9c84AACF26974Fd'
  },
  syrup: {
    // updated for testnet iSTAX
    97: '0x29f5b2959c1b0FE96985799Bd2E6c36187A16Ff1',
    56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
  },
  masterChef: {
    97: '0x683B1d0CC12c8862Ce102773B4E8fFd6370d3eDA',
    56: '0xC80991F9106e26e43Bf1C07C764829a85f294C71', //  real iSTAX chef
    // 56: '0x39447351Fe7939C064CDD9A258F22FC76233E28e'
  },
  sousChef: {
    97: '0x683B1d0CC12c8862Ce102773B4E8fFd6370d3eDA',
    56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95', //  real stax
  },
  weth: {
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  }
}

export const sousChefTeam = [
  {
    sousId: 5,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0x252B23B524F8a93506c02ff355780Ced62EA4004',
    },
    tokenName: 'STAX1M',
    tokenPerBlock: "2",
    multi: 'x3'
  },
  {
    sousId: 4,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0x2C43BC85A4a08757666219E0305a98b6CBdbb7eA',
    },
    tokenName: 'STAX2W',
    tokenPerBlock: "2",
    multi: 'x2'
  },
  {
    sousId: 3,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0xCe4Cf2251489bEe010719c5e4cfd8AFcc3d1D376',
    },
    tokenName: '2W-AIRDROP',
    tokenPerBlock: "2",
    multi: 'x2'
  },
  {
    sousId: 0,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0xB561f9f117acaa5512f2790354f59202b0C3642B',
    },
    tokenName: 'STAX2W',
    tokenPerBlock: "2",
    multi: 'x2'
  },
  {
    sousId: 1,
    contractAddress: {
      97: '0x108f53C0e26C005B9DC40131de7B0fb9D3303757',
      56: '0xb4239e11CC41562288cF9f9162540066b491D2c3',
    },
    tokenName: 'STAX1M',
    tokenPerBlock: "2",
    multi: 'x3'
  },
  {
    sousId: 2,
    contractAddress: {
      97: '0x6dA4eaff1B3fbe39E7915399EB3FD957B32608E7',
      56: '0x0c0C475e32212b748c328E451Ab3862FfE07369E',
    },
    tokenName: 'STAX1Y',
    multi: 'x8'
  },
]

export const iStaxStaking = [
  {
    sousId: 0,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0x252B23B524F8a93506c02ff355780Ced62EA4004',
    },
    tokenName: 'SWAPSC',
    tokenPerBlock: "0",
    multi: '31-03-21'
  },
  {
    sousId: 1,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0x2C43BC85A4a08757666219E0305a98b6CBdbb7eA',
    },
    tokenName: 'STAKESC',
    tokenPerBlock: "0",
    multi: '31-03-21'
  },
  {
    sousId: 2,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0xCe4Cf2251489bEe010719c5e4cfd8AFcc3d1D376',
    },
    tokenName: 'USDT ⬇️',
    tokenPerBlock: "0",
    multi: '31-03-21'
  },
  {
    sousId: 3,
    contractAddress: {
      97: '0x6Da1Bd6b8Ee135e96DefC087d83d99BE73965DDe',
      56: '0xB561f9f117acaa5512f2790354f59202b0C3642B',
    },
    tokenName: 'DAI ⬆️',
    tokenPerBlock: "0",
    multi: '31-03-21'
  },
  {
    sousId: 4,
    contractAddress: {
      97: '0x108f53C0e26C005B9DC40131de7B0fb9D3303757',
      56: '0xb4239e11CC41562288cF9f9162540066b491D2c3',
    },
    tokenName: 'DAI ⬇️',
    tokenPerBlock: "0",
    multi: '31-03-21'
  },
  {
    sousId: 5,
    contractAddress: {
      97: '0x6dA4eaff1B3fbe39E7915399EB3FD957B32608E7',
      56: '0x0c0C475e32212b748c328E451Ab3862FfE07369E',
    },
    tokenName: 'MAP20Q4',
    multi: '31-03-21'
  }
  // ,
  // {
  //   sousId: 6,
  //   contractAddress: {
  //     97: '0x6dA4eaff1B3fbe39E7915399EB3FD957B32608E7',
  //     56: '0x0c0C475e32212b748c328E451Ab3862FfE07369E',
  //   },
  //   tokenName: 'MAP21Q1',
  //   multi: '31-03-21'
  // }
]

// BUSD-BNB LP
// 0x1b96b92314c44b159149f7e0303511fb2fc4774f
// BAKE-BNB LP
// 0x3da30727ed0626b78c212e81b37b97a8ef8a25bb
// BUSD-BAKE LP
// 0xe2d1b285d83efb935134f644d00fb7c943e84b5b

// 56 MAINNET
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x7FB0017195470bc6978659396eC9D750A35C51fE'
    },
    tokenAddresses: {
      97: '0x29f5b2959c1b0FE96985799Bd2E6c36187A16Ff1', 
      // 97: '0x869446a92293DE6cEbb1b71CfcA6bd48f6bef6fC',
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    },
    name: 'BUSD Staking',
    tokenSymbol: 'iSTAX',
    symbol: 'TESTNET BUSD',
    multiplier: '1X'
  },
  {
    pid: 1,
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x7FB0017195470bc6978659396eC9D750A35C51fE'
    },
    tokenAddresses: {
      97: '0x29f5b2959c1b0FE96985799Bd2E6c36187A16Ff1', 
      // 97: '0x869446a92293DE6cEbb1b71CfcA6bd48f6bef6fC',
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    },
    name: 'STAX STAKING',
    tokenSymbol: 'iSTAX',
    symbol: 'STAX-BNB FLIP',
    multiplier: '5X'
  },
  {
    pid: 2,
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x7FB0017195470bc6978659396eC9D750A35C51fE'
    },
    tokenAddresses: {
      97: '0x29f5b2959c1b0FE96985799Bd2E6c36187A16Ff1', 
      // 97: '0x869446a92293DE6cEbb1b71CfcA6bd48f6bef6fC',
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    },
    name: 'STAX STAKING',
    tokenSymbol: 'iSTAX',
    symbol: 'BUSD-USDT STAXLP',
    multiplier: '3X'
  },
  {
    pid: 3,
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x7FB0017195470bc6978659396eC9D750A35C51fE'
    },
    tokenAddresses: {
      97: '0x29f5b2959c1b0FE96985799Bd2E6c36187A16Ff1', 
      // 97: '0x869446a92293DE6cEbb1b71CfcA6bd48f6bef6fC',
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    },
    name: 'STAX STAKING',
    tokenSymbol: 'iSTAX',
    symbol: 'BUSD-DAI STAXLP',
    multiplier: '3X'
  },
  

  
]

export const forShowPools = [
  {
    pid: 0,
    name: 'STAX Liquidity',
    symbol: 'BUSD',
    tokenSymbol: 'iSTAX',
    multiplier: '1X',
  },
  {
    pid: 1,
    name: 'STAX Liquidity',
    symbol: 'STAX-BNB',
    tokenSymbol: 'iSTAX',
    multiplier: '5X',
  },
  {
    pid: 2,
    name: 'STAX Liquidity',
    symbol: 'BUSD-USDT',
    tokenSymbol: 'iSTAX',
    multiplier: '3X',
  },
  {
    pid: 3,
    name: 'STAX Liquidity',
    symbol: 'BUSD-DAI',
    tokenSymbol: 'iSTAX',
    multiplier: '3X',
  }
]
