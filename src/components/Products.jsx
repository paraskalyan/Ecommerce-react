import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { products } from '../data';
const Container = styled.div`
  padding: 50px 100px;
  height: auto;
  width: 100%;
  background-color: #e7f8ff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 20px;
`
function Products() {
  return(
  <Container>
    {products.map((item)=>{
      return(
      <Product props = {item} key={item.id}/>);
    })}
  </Container>
  )
}

export default Products;