import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import FarmCards from '../Farms/components/FarmCards'

const Home: React.FC = () => {
  return (
    <Page>
      <Blank>🍊</Blank>
      <Container>
        <Balances />
        <Spacer  />
        <FarmCards removed={false}/>
      </Container>
      <Spacer size="lg" />
    </Page>
  )
}

const Blank = styled.div`
  height: 100px;
  font-size: 60px;
  @media (max-width: 500px) {
    height: 60px;
  }
`


const StyledInfo = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.colors.primary};
  }
`

export default Home
