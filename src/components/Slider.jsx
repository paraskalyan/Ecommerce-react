import React from 'react'
import styled from 'styled-components';
import image from '../images/girl3.png'
const Container = styled.div`
    height: calc(100vh - 80px);
`
// const SlideContainer = styled.div`
//     width: 300vw;
// `
const Wrapper = styled.div`
    padding: 40px 100px;
    display: flex;
    column-gap: 200px;
`
const Image = styled.img`
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 100px;
    
`
const MainText = styled.h1`
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 0;
`
const SubText = styled.h2`
    line-height: 3rem;
    letter-spacing: 10px;
`
const Button = styled.button`
    width: 160px;
    font-size: 1.5rem;
    padding: 15px 5px;
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
        <Image src={image} width='800'/>
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