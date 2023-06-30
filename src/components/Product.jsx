import React from 'react';
import styled from 'styled-components';
import { products } from '../data';
const Container = styled.div`
   width: 22%;

`
const Image = styled.img`
    height: 100%;
    width: 100%;
    
`

function Product({ props }) {
  return (
        <Container key={props.id}>
          <Image src={props.img} />
        </Container> 
  )
}

export default Product