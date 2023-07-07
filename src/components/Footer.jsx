import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import payment from '../images/payment.png'
const Container = styled.div`
    min-height: 50vh;
    width: 100%;
    background-color: #1a1a1a;
    padding: 40px;
    display: flex;
    gap: 40px;
    color: white;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 400px) {
       flex-direction: column;
    }
`
const Left = styled.div`
    flex:1;
`
const Logo = styled.h1`
    margin: 0;
`
const Desc = styled.p`
    text-align: justify;
`
const Center = styled.div`
    flex:1;
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`
const Text = styled.h4`
    
`

const List = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    list-style: none;
    cursor: pointer;

    &:hover{
        color: #00ffd5;
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    gap: 10px;
    flex-direction: column;
    @media screen and (max-width: 400px) {
       align-items: center;
    }
`

const Icons = styled.div`
    display: flex;
    gap: 7px;
`
const Icon = styled.div`
    cursor: pointer;
    &:hover{
        color: ${props=>props.color};
        
    }
`
const Image = styled.img`
    width: 50%;
`
function Footer() {
    return (
        <Container>
            <Left>
                <Logo>PARA.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, iusto modi neque earum perspiciatis nihil porro atque, officiis dolorem tempora totam quae exercitationem ab excepturi et rerum temporibus nisi provident accusamus, architecto veritatis? Hic eos libero, quae praesentium ipsam laudantium repudiandae consequuntur modi accusantium quidem consectetur, minima provident asperiores sit.</Desc>
                <Icons>
                    <Icon color='#3b5998'><FacebookIcon /></Icon>
                    <Icon color='#d62976'><InstagramIcon /></Icon>
                    <Icon color='#00acee'><TwitterIcon /></Icon>
                    <Icon color='#c8232c'><PinterestIcon /></Icon>
                </Icons>
            </Left>
            <Center>
                <Text>Useful Links</Text>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Text>Contact</Text>
                <ListItem>Mohali, Ludhiana</ListItem>
                <ListItem>+91 628 3000 629</ListItem>
                <ListItem>parastore@gmail.com</ListItem>
                <Image src={payment} />
            </Right>
        </Container>
    )
}

export default Footer
