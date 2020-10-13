// @ts-nocheck
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
  const [currentTime, setCurrentTime] = React.useState(Date.parse(new Date())/1000);

  const endTime = 1602592200
  const seconds  = (endTime - currentTime) % 60
  const minutes  = (endTime - currentTime) % 3600 / 60
  const hours  = (endTime - currentTime) % (3600 * 24) / 3600
  const days  = (endTime - currentTime) / (3600 * 24)

  const tick = () => {
    setCurrentTime(currentTime + 1)
  };

  React.useEffect(() => {
    // 执行定时
    let timerID = setInterval(() => tick(), 1000);
    // 卸载组件时进行清理
    return () => clearInterval(timerID);
  });

  return (
    <Page>
      <Blank>🍊</Blank>
      <Title>Oranges will start farming in</Title>
      <StyledInfo>
        <Countdown>{parseInt(days ? days : '0')}</Countdown>D
        <Countdown>{parseInt(hours)}</Countdown>H
        <Countdown>{parseInt(minutes)}</Countdown>M
        <Countdown>{seconds}</Countdown>S
      </StyledInfo>
      <Spacer />
      <Container>
        <Balances />
        <Spacer  />
        <FarmCards removed={false}/>
      </Container>
      <Spacer size="lg" />
    </Page>
  )
}


const Title = styled.div`
  color:  ${(props) => props.theme.colors.primary};
  line-height: 60px;
  font-size: 20px;
  font-family: "Kaushan Script",sans-serif;
`
const Countdown = styled.div`
  display: inline-block;
  width: 80px;
  background: linear-gradient(180deg, #54DADE 0%, #24C7D6 76.22%);
  border-radius: 12.8px;
  font-family: monospace;
  font-size: 58px;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0;
  text-align: center;
  margin-left: 10px;
  text-shadow: 0 2px 21px rgba(10,16,128,0.08);
  font-family: "Kaushan Script",sans-serif;
`

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
