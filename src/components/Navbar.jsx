import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 7vh;
  display: flex;
`
const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-between; 
  width: 100%;
  align-items: center;
  @media screen and (max-width: 450px) {
       padding: 10px;  
    }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

` 
const Center = styled.div`
  flex: 1;
  text-align: center;
` 
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
` 
const Logo = styled.h1`
 font-weight: 900;
 font-size: 1.5rem;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchBox = styled.div`
  padding: 3px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  width: 190px;
  margin-left: 15px;
  @media screen and (max-width: 450px) {
       display: none;
    }
`
const InputBox = styled.input`
  font-size: 14px;
  border: none;
  outline: none;
`
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    color: #015346;
  }
`

function Navbar() {
  const linkStyle = {
    "text-decoration": "none",
    "color": "black"
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchBox>
            <InputBox></InputBox>
            <FontAwesomeIcon icon={faSearch} size='sm' />

          </SearchBox>
        </Left>
        <Center>
          <Logo>PARA.</Logo>
        </Center>
        <Right>
         <Link style={linkStyle} to='/register'> <MenuItem>REGISTER</MenuItem></Link>
         <Link style={linkStyle} to='/login'> <MenuItem>SIGN IN</MenuItem></Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
