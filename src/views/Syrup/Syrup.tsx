import React, {useEffect, useMemo} from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/syrup.png'

import {useParams} from 'react-router-dom'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'

import Spacer from '../../components/Spacer'
import Page from '../../components/Page'
import Button from '../../components/Button'
import PageHeader from '../../components/PageHeader'
import {getContract} from '../../utils/erc20'
import useSushi from '../../hooks/useSushi'
import {getPools} from '../../sushi/utils'

import PoolCard from './components/PoolCard'
import Coming from './components/Coming'
import {sousChefTeam} from '../../sushi/lib/constants';

interface SyrupRowProps {
  syrupAddress: string
  sousId: number
  tokenName: string
  projectLink: string
  multi: string
}

const SyrupRow: React.FC<SyrupRowProps> = ({syrupAddress, sousId, tokenName, projectLink, multi}) => {
  const {ethereum} = useWallet()

  const syrup = useMemo(() => {
    return getContract(ethereum as provider, '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4')
  }, [ethereum])

  return (
    <StyledCardWrapper>
      <PoolCard
        syrup={syrup}
        {...{sousId, tokenName, projectLink, multi}}
      />
      <StyledSpacer />
    </StyledCardWrapper>
  )

}

const Farm: React.FC = () => {
  const sushi = useSushi()
  const pools = getPools(sushi) || sousChefTeam

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Page>
      <>

      <PageHeader
          title="NEW 500% APY FLEX STAKING"
          subtitle="STACK your STAX simply by HODLing in your own wallet!"
        />
        <a target = "_blank" rel = "noopener noreferrer" href="https://medium.com/stablexswap/funds-are-safu-fixing-our-fixed-term-staking-and-introducing-the-new-stax-500-apy-flexible-647d15efd224">Learn More on Our Medium</a>

        <PageHeader
          title="PREVIOUS LOCKED POOLS"
          subtitle="STACK your STAX, to earn more STAX"
        />
        <Spacer size="lg"/>
        <StyledFarm>
          <StyledCardsWrapper>
            {pools.map((pool, index) =>
              <>
              <SyrupRow {...pool} />
              {(index%2 === 0) && <StyledSpacer />}
              </>
            )}
            <StyledCardWrapper>
              <StyledSpacer />
            </StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg"/>
          <StyledInfo>
            👀 Stake your STAX to STAX2W, STAX1M, and STAX1Y pools to earn additional vested STAX rewards! Rewards will be calculated per block but will be distributed at the end of each vesting period for each respective pool
          </StyledInfo>
          <Spacer size="lg"/>
        </StyledFarm>
      </>
    </Page>
  )
}

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const Title = styled.div`
  color: ${(props) => props.theme.colors.blue[100]};
  font-size:20px;
  width: 50vw;

  font-weight: 900;
  line-height:  2rem;
`

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  flex-flow: row wrap;
  @media (max-width: 800px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
  flex-direction: column;
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.colors.grey[400]};
  font-size: 16px;
  font-weight: 400;
  width: 600px;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    width: 80%;
  }

`

export default Farm
