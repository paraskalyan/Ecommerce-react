import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('https://img.freepik.com/free-photo/beautiful-casual-woman-fashion-set_1203-7833.jpg?w=740&t=st=1688637590~exp=1688638190~hmac=daa3cb1437602acc96a4b436fb5c439241b5b58e43719d23d9e9c8deec71c914');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    height: auto;
    background-color: rgba(255,255,255,0.5);
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 2px 2px 10px black;

`
const Title = styled.h2`
    margin: 0;
`
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 15px;
`
const Input = styled.input`
    padding: 7px;
    /* flex: 1; */
    width: 48%;
    outline: none;
    font-weight: 600;
    border: 1px solid gray;
    /* margin: 4px; */
`
const PrivacyText = styled.span`
    font-size: 14px;
    font-weight: 600;
`
const Button = styled.button`
    width: fit-content;
    padding: 7px 15px;
    background-color: #015346;
    border: none;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #012e26;
    }
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
            </Form>
            <PrivacyText>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></PrivacyText>
            <Button>CREATE</Button>
        </Wrapper>
    </Container>
  )
}

export default Register