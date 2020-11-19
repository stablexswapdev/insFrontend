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
    97: '0xEc4070F7Cb3Cb944Af729D8c23F3350dF24f1003',
    56:  '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    // 56: '0xbbB2aaEB8c9dA72bb7faDB42A9c84AACF26974Fd'
  },
  syrup: {
    97: '0xEc4070F7Cb3Cb944Af729D8c23F3350dF24f1003',
    56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
  },
  masterChef: {
    97: '0x683B1d0CC12c8862Ce102773B4E8fFd6370d3eDA',
    56: '0xC80991F9106e26e43Bf1C07C764829a85f294C71', //  real stax chef
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
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x7FB0017195470bc6978659396eC9D750A35C51fE'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    },
    name: 'STAX STAKING',
    tokenSymbol: 'STAX',
    symbol: 'STAX-BNB FLIP',
    multiplier: '5X'
  },
  {
    pid: 4,
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x13AbFA7B781bEe80cA7FAe7Ec71045488d876A8d'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    symbol: 'STAX-BUSD FLIP',
    tokenSymbol: 'BUSD',
    multiplier: '5X'
  },
  {
    pid: 1,
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    name: 'Cake STAKING',
    symbol: 'BUSD-USDT FLIP',
    tokenSymbol: 'BUSD',
    multiplier: '3X'
  },
  {
    pid: 2,
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    name: 'Cake Party!',
    symbol: 'BUSD-DAI FLIP',
    tokenSymbol: 'DAI',
    multiplier: '3X'
  },
  {
    pid: 3,
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0xb3c4217AB2b265bF8c69718D280E3708b5E50577'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x55d398326f99059ff775485246999027b3197955'
    },
    name: 'Cake Party!',
    symbol: 'USDT-DAI FLIP',
    tokenSymbol: 'USDT',
    multiplier: '3X'
  },
  {
    pid: 8,
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x85f8628bfff75d08f1aa415e5c7e85d96bfd7f57'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
    },
    name: 'Cake Party!',
    symbol: 'USDT-USDC FLIP',
    tokenSymbol: 'USDC',
    multiplier: '3X'
  }
//   ,
//   {
//     pid: 10,
//     lpAddresses: {
//       97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
//       56: '0xC1400900705F85544A6AbBe21B688411D58fb98A'
//     },
//     tokenAddresses: {
//       97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//       56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
//     },
//     name: 'Cake Party!',
//     symbol: 'BUSD-USDT SLP',
//     tokenSymbol: 'BUSD',
//     multiplier: '4X'
//   },
//   {
//     pid: 11,
//     lpAddresses: {
//       97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
//       56: '0xcFaFFc0728f1D2521E90A6A49e4bEc54D93c107a'
//     },
//     tokenAddresses: {
//       97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//       56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
//     },
//     name: 'Cake Party!',
//     symbol: 'BUSD-DAI SLP',
//     tokenSymbol: 'DAI',
//     multiplier: '4X'
//   },
//   {
//     pid: 12,
//     lpAddresses: {
//       97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
//       56: '0xefD05F48e337A50CDF36c60baa32FE3d3a7aCbE6'
//     },
//     tokenAddresses: {
//       97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//       56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
//     },
//     name: 'Cake Party!',
//     symbol: 'BUSD-USDC SLP',
//     tokenSymbol: 'USDC',
//     multiplier: '1X'
//   },
//   {
//     pid: 13,
//     lpAddresses: {
//       97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
//       56: '0x9897D186087e8aDb05B657B0DC9A326D898FF7B1'
//     },
//     tokenAddresses: {
//       97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//       56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'
//     },
//     name: 'Cake Party!',
//     symbol: 'DAI-USDT SLP',
//     tokenSymbol: 'DAI',
//     multiplier: '2X'
//   },
//   {
//     pid: 14,
//     lpAddresses: {
//       97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
//       56: '0xBB1F42E75C83917FdeDd25080dE5AA0E78c35f82'
//     },
//     tokenAddresses: {
//       97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//       56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
//     },
//     name: 'Cake Party!',
//     symbol: 'USDC-USDT SLP',
//     tokenSymbol: 'USDC',
//     multiplier: '3X'
//   },
//   {
//     pid: 15,
//     lpAddresses: {
//       97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
//       56: '0x68D93eFCd107A044F2dc201548B59A0EBF4181c6'
//     },
//     tokenAddresses: {
//       97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//       56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
//     },
//     name: 'Cake Party!',
//     symbol: 'DAI-USDC SLP',
//     tokenSymbol: 'USDC',
//     multiplier: '2X'
//   }
]

export const forShowPools = [
  {
    pid: 0,
    name: 'STAX Liquidity',
    symbol: 'STAX-BNB',
    tokenSymbol: 'STAX',
    multiplier: '5X',
  },
  {
    pid: 4,
    symbol: 'STAX-BUSD',
    tokenSymbol: 'STAX',
    multiplier: '5X',
  },
  {
    pid: 1,
    symbol: 'BUSD-USDT',
    tokenSymbol: 'BUSDUSDT',
    multiplier: '3X',
  },
  {
    pid: 2,
    symbol: 'BUSD-DAI',
    tokenSymbol: 'BUSDDAI',
    multiplier: '3X',
  },
  {
    pid: 3,
    symbol: 'USDT-DAI',
    tokenSymbol: 'USDTDAI',
    multiplier: '3X',
  },
  {
    pid: 4,
    symbol: 'USDT-USDC',
    tokenSymbol: 'USDTUSDC',
    multiplier: '3X',
  },
]
