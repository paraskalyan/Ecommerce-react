import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
  height: 80px;
  display: flex;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between; 
  width: 100%;
  align-items: center;
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
  justify-content: flex-end;
` 
const Logo = styled.h1`
 font-weight: 900;
 font-size: 2.5rem;
`
const Language = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
`
const SearchBox = styled.div`
  padding: 5px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  width: 270px;
  margin-left: 15px;
`
const InputBox = styled.input`
  font-size: 1.3rem;
  border: none;
  outline: none;
`
const MenuItem = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  cursor: pointer;
  font-weight: 500;
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchBox>
            <InputBox></InputBox>
            <FontAwesomeIcon icon={faSearch} />

          </SearchBox>
        </Left>
        <Center>
          <Logo>PARA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar