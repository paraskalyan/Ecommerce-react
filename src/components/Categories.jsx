import React from 'react'
import styled from 'styled-components';
import shirt from '../images/shirt.jpg'
const Container = styled.div`
    /* height: 90vh; */
    max-height: fit-content;
`
const Wrapper = styled.div`
    padding: 40px 60px;
    background-color: #000000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    @media screen and (max-width: 400px) {
       flex-direction: column;
       gap: 30px;
    }
`
const Card = styled.div`
    background-size: cover;
    height: 400px;
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media screen and (max-width: 400px) {
       width: 80%;
    }

`
const Text = styled.h1`
    font-size: 2rem;
    z-index: 99;
    color: white;
`
const Button = styled.button`
    width: 100px;
    font-size: 1rem;
    padding: 10px 5px;
    font-weight: bold;
    cursor: pointer;
    z-index: 99;
    background-color: rgba(255,255,255)
    
`
const IMG = styled.img`
    position: absolute;
    width: inherit;
    filter: brightness(0.8);

    &:hover{
        filter: unset;
    }
`
const categories = ['Shirt Style', 'Loungewear Love', 'Light Jackets']
function Categories() {
  return (
    <Container>
        <Wrapper>
            {categories.map((item)=>(
                <Card key={item}>
                    <IMG src={shirt}/>
                    <Text>{item}</Text>
                    <Button>SHOP NOW</Button>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Categories
