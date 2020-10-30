import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getSousEarned, getSousChefContract, getMasterChefContract, getSousEndBlock, getSousStartBlock } from '../sushi/utils'
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
      buttonText = `Farming starts in ${(start - block).toLocaleString()} Blocks`
    }
    else if(block > end) {
      buttonText = 'Finished'
    }
    else {
      buttonText = `Farming ends in ${(end - block).toLocaleString()} Blocks`
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

export default useEarnings
