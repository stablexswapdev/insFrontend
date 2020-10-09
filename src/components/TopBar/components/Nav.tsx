import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <>
      <StyledNav>
        <StyledLink exact activeClassName="active" to="/farms">
          Farm
        </StyledLink>
        <StyledAbsoluteLink
          href="https://exchange.pancakeswap.finance"
          target="_blank">
          Exchange
        </StyledAbsoluteLink>
        <StyledAbsoluteLink
          href="https://voting.stablexswap.com"
          target="_blank"
        >
          Voting
        </StyledAbsoluteLink>
      </StyledNav>
    </>
  )
}


const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 850px) {
    display: none;
  }
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: #452A7A;
  }
  &.active {
    color: ${(props) => props.theme.colors.grey[600]};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.colors.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: #452A7A;
  }
  &.active {
    color: ${(props) => props.theme.colors.grey[600]};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
