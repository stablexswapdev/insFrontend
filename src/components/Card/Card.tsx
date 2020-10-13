import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background:#fff;
  border: 2px solid #333;
  display: flex;
  color: #333;
  font-weight: 800;
  flex: 1;
  box-shadow: 0px 2px 8px rgba(171, 133, 115, 0.21);
  border-radius: 0;
  flex-direction: column;
  width: 500px;
`

export default Card
