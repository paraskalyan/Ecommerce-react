import React from 'react'
import styled from 'styled-components';
import shirt from '../images/shirt.jpg'
const Container = styled.div`
    height: 80vh;
`
const Wrapper = styled.div`
    padding: 40px 60px;
    background-color: #000000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Card = styled.div`
    background-size: cover;
    height: 80%;
    width: 25%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    justify-content: center;
`
const Text = styled.h1`
    font-size: 2rem;
`
const Button = styled.button`
    width: 25%;
    font-size: 1.2rem;
    padding: 10px 5px;
    font-weight: bold;
    cursor: pointer;
    
`
const IMG = styled.img`
    position:relative;
    height: 100%;
`
const categories = ['Shirt Style', 'Loungewear Love', 'Light Jackets']
function Categories() {
  return (
    <Container>
        <Wrapper>
            {categories.map((item)=>(
                <Card key={item}>
                    <IMG src={shirt}></IMG>
                    <Text>{item}</Text>
                    <Button>SHOP NOW</Button>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Categories