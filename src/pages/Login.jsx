import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzM2MS1mZWxpeC1ydXNzZWxsLTk3XzIuanBn.jpg');
    background-size: cover;
    background-position: left;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    height: auto;
    background-color: #fff;
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 5px;
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
    margin: 10px 0;
`
const Input = styled.input`
    padding: 10px 7px;
    /* flex: 1; */
    width: 100%;
    outline: none;
    font-weight: 600;
    border: 1px solid gray;
    /* margin: 4px; */
`
const Button = styled.button`
    width: fit-content;
    padding: 10px 25px;
    background-color: #015346;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: #012e26;
    }
`
const Text = styled.span`
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder='username'/>
                <Input placeholder='password' type='password'/>
            </Form>
            <Button>LOGIN</Button>
            <Text>Forgot Password?</Text>
            <Text>Create a new account</Text>
        </Wrapper>
    </Container>
  )
}

export default Login