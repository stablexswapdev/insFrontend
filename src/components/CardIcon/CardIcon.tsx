import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  background: ${(props) => props.theme.colors.cardBg};
  font-size: 56px;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    height: 30px;
    width: 30px;
  }
`

export default CardIcon