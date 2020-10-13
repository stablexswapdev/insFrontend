import React from 'react'
import styled from 'styled-components'

import Button from '../../Button'
import Card from '../../Card'
import CardContent from '../../CardContent'
import CardIcon from '../../CardIcon'
import CardTitle from '../../CardTitle'
import Spacer from '../../Spacer'

interface WalletCardProps {
  icon: React.ReactNode
  onConnect: () => void
  title: string
}

const WalletCard: React.FC<WalletCardProps> = ({ icon, onConnect, title }) => (
  <StyledCard onClick={onConnect}>
    <CardContent>
      <CardIcon>{icon}</CardIcon>
      <CardTitle text={title} />
    </CardContent>
  </StyledCard>
)

const StyledCard = styled.div`
  background: ${(props) => props.theme.colors.cardBg};
  border-radius: 20px;
  display: flex;
  color: ${(props) => props.theme.colors.secondary};
  flex: 1;
  box-shadow: 0px 2px 8px rgba(171, 133, 115, 0.21);
  border-radius: 20px;
  flex-direction: column;
`

export default WalletCard
