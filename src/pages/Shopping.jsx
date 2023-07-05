import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
  padding: 0 50px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`
const SortProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Title = styled.h1`
  
`
const Text = styled.h3`
  
`
const Select = styled.select`
  height: fit-content;
  padding: 7px 10px;
  outline: none;
  font-size: 15px;
`
const Option = styled.option`
`

const Shopping = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Dresses</Title>
        <FilterContainer>
          <FilterProducts>
            <Text>Filter Products:</Text>
            <Select>
              <Option selected disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option> 
              <Option>Blue</Option>
              <Option>Yellow</Option>
            </Select>
            <Select>
              <Option selected disabled>Size</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </FilterProducts>
          <SortProducts>
            <Text>Sort Products:</Text>
            <Select>
              <Option selected disabled>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </SortProducts>
        </FilterContainer>
      </Container>
      <Products />
      <Newsletter/>
      <Footer />
    </>
  )
}

export default Shopping