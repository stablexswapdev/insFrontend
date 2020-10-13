import React from 'react'
import styled, { keyframes } from 'styled-components'

import CardIcon from '../CardIcon'

interface LoaderProps {
  text?: string
}

const Loader: React.FC<LoaderProps> = ({ text }) => {


  return (
    <StyledLoader>
      <CardIcon>
        <StyledSushi>🍊</StyledSushi>
      </CardIcon>
      {!!text && <StyledText>{text}</StyledText>}
    </StyledLoader>
  )
}

const StyledInfo = styled.div`
    background: #FFFDFA;
    box-shadow: 0px 2.2623px 11.3115px rgba(171, 133, 115, 0.16);
    border-radius: 50px;
    font-size: 25px;
    color: ${(props) => props.theme.colors.blue[100]};
    font-weight: 900;
    height: 120px;
    padding: 20px;
    width: 600px;

    padding-top: 200px;
    position: relative;
    margin-top: -200px;
    z-index: -1;

  > b {
    color: ${(props) => props.theme.colors.primary};
  }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledSushi = styled.div`
  font-size: 32px;
  position: relative;
  animation: 1s ${spin} infinite;
`

const StyledText = styled.div`
  color: ${(props) => props.theme.colors.grey[400]};
`

export default Loader
