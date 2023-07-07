import React from 'react'
import styled from 'styled-components';
import image from '../images/girl3.png'
const Container = styled.div`
    max-height: auto;
    min-height: 93vh;

`
// const SlideContainer = styled.div`
//     width: 300vw;
// `
const Wrapper = styled.div`
    padding: 40px 100px;
    display: flex;
    column-gap: 200px;

    @media screen and (max-width: 400px) {
        flex-direction: column;
        padding: 0 20px;
        align-items: center;
        justify-content: center;
    }
`
const Image = styled.img`
    @media screen and (max-width: 400px) {
       width: 200px;
    }
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 100px;    
    @media screen and (max-width: 400px) {
       margin: unset;
       width: 100%;
    }
`
const MainText = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 0;
`
const SubText = styled.h2`
    line-height: 1.5rem;
    letter-spacing: 10px;
    font-size: 1rem;
`
const Button = styled.button`
    width: fit-content;
    font-size: 1rem;
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    font-weight: bold;
    box-shadow: 3px 2px 0 black;

    &:hover{
        background-color: #bbbbbb;
    }
`
function Slider() {
  return (
   <Container>
    <Wrapper>
        <Image src={image} width='370'/>
        <Right>
            <MainText>SUMMER SALE</MainText>
            <SubText>DONT COMPOROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</SubText>
            <Button>SHOP NOW</Button>
        </Right>
    </Wrapper>
   </Container>
  )
}

export default Slider;
