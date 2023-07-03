import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fffff3;
`
const Text = styled.h1`
    font-size: 3.4rem;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 20px;
`
const InputContainer = styled.div`
    margin-top: 20px;
    border: 1px solid lightgray;
    width: 45%;
    height: 40px;
    display: flex;
`
const Input = styled.input`
    flex: 8;
    border: none;
    padding: 0 7px;
    outline: none;
    font-size: 17px;
`
const Button = styled.button`
    flex: 1.5;
    border: none;
    background-color: green;
    cursor: pointer;
    color: white;
    font-size: 17px;

    &:hover{
        background-color: #006100;
    }
`
function Newsletter() {
  return (
    <Container>
        <Text>Newsletter</Text>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Enter your email'/>
            <Button>
                Send
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter