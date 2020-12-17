import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getSousEarned, getSousChefContract, getiPoolChefContract, getMasterChefContract, getSousEndBlock, getSousStartBlock, getiPoolStartBlock, getiPoolEndBlock } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, sushi])

  return balance
}

export const useSousEarnings = (sousId) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const sousChefContract = getSousChefContract(sushi, sousId)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getSousEarned(sousChefContract, account)
    console.log('balance',  balance.toString())
    setBalance(new BigNumber(balance))
  }, [account, block, sousChefContract, setBalance, sushi])

  useEffect(() => {
    if (account && sousChefContract) {
      fetchBalance()
    }
  }, [account, block, sousChefContract, setBalance, sushi])

  return balance
}

export const useSousLeftBlocks = (sousId) => {
  const [text, setText] = useState('')
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const sousChefContract = getSousChefContract(sushi, sousId)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const start = await getSousStartBlock(sousChefContract)
    const end = await getSousEndBlock(sousChefContract)
    console.log(block, start, end)
    let buttonText = ''
    if (!block) {
      buttonText= '-'
    }
    else if (block < start) {
      // @ts-ignore
      buttonText = `Farming starts in ${Math.floor((start - block)/1200)} Hours ${Math.floor((start - block)/20)%60} Mins`
    }
    else if(block > end) {
      buttonText = 'Finished'
    }
    else {
      buttonText = `Farming ends in ${Math.floor((end - block)/1200)} Hours ${Math.floor((end - block)/20)%60} Mins`
    }
    setText(buttonText)
  }, [account, block, sousChefContract, sushi])

  useEffect(() => {
    if (account && sousChefContract && sushi) {
      fetchBalance()
    }
  }, [account, block, sousChefContract, setText, sushi])

  return text
}


export const useSousLeftBlocksStatus = (sousId) => {
  const [text, setText] = useState(0)
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const sousChefContract = getSousChefContract(sushi, sousId)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const start = await getSousStartBlock(sousChefContract)
    const end = await getSousEndBlock(sousChefContract)
    console.log(block, start, end)
    let buttonText = 0
    if (!block) {
      buttonText= 0
    }
    else if (block < start) {
      buttonText = 1;
    }
    else if(block > end) {
      buttonText = 3;
    }
    else {
      buttonText = 2;
    }
    setText(buttonText)
  }, [account, block, sousChefContract, sushi])

  useEffect(() => {
    if (account && sousChefContract && sushi) {
      fetchBalance()
    }
  }, [account, block, sousChefContract, setText, sushi])

  return text
}


// export const useiStaxLeftBlocks = (iPoolId) => {
//   const [text, setText] = useState('')
//   const {
//     account,
//     ethereum,
//   }: { account: string; ethereum: provider } = useWallet()
//   const sushi = useSushi()
//   const insurancePoolsContract = getiPoolChefContract(sushi, iPoolId)
//   const block = useBlock()

//   const fetchBalance = useCallback(async () => {
//     const start = await getSousStartBlock(insurancePoolsContract)
//     const end = await getSousEndBlock(insurancePoolsContract)
//     console.log(block, start, end)
//     let buttonText = ''
//     if (!block) {
//       buttonText= '-'
//     }
//     else if (block < start) {
//       // @ts-ignore
//       buttonText = `Coverage starts in ${Math.floor((start - block)/1200)} Hours ${Math.floor((start - block)/20)%60} Mins`
//     }
//     else if(block > end) {
//       buttonText = 'Finished'
//     }
//     else {
//       buttonText = `Coverage ends in ${Math.floor((end - block)/1200)} Hours ${Math.floor((end - block)/20)%60} Mins`
//     }
//     setText(buttonText)
//   }, [account, block, insurancePoolsContract, sushi])

//   useEffect(() => {
//     if (account && insurancePoolsContract && sushi) {
//       fetchBalance()
//     }
//   }, [account, block, insurancePoolsContract, setText, sushi])

//   return text
// }

// export const useiStaxLeftBlocksStatus = (iPoolId) => {
//   const [text, setText] = useState(0)
//   const {
//     account,
//     ethereum,
//   }: { account: string; ethereum: provider } = useWallet()
//   const sushi = useSushi()
//   const insurancePoolContract = getiPoolChefContract(sushi, iPoolId)
//   const block = useBlock()

//   const fetchBalance = useCallback(async () => {
//     const start = await getSousStartBlock(insurancePoolContract)
//     const end = await getSousEndBlock(insurancePoolContract)
//     console.log(block, start, end)
//     let buttonText = 0
//     if (!block) {
//       buttonText= 0
//     }
//     else if (block < start) {
//       buttonText = 1;
//     }
//     else if(block > end) {
//       buttonText = 3;
//     }
//     else {
//       buttonText = 2;
//     }
//     setText(buttonText)
//   }, [account, block, insurancePoolContract, sushi])

//   useEffect(() => {
//     if (account && insurancePoolContract && sushi) {
//       fetchBalance()
//     }
//   }, [account, block, insurancePoolContract, setText, sushi])

//   return text
// }



export default useEarnings
