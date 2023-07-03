import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import payment from '../images/payment.png'
const Container = styled.div`
    height: 50vh;
    width: 100%;
    background-color: #1a1a1a;
    padding: 40px;
    display: flex;
    gap: 40px;
    color: white;
    align-items: center;
    justify-content: center;
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
`
const Right = styled.div`
    flex: 1;
    display: flex;
    gap: 10px;
    flex-direction: column;
`

const Icons = styled.div`
    display: flex;
    gap: 7px;
`
const Icon = styled.div`
    cursor: pointer;
`
const Image = styled.img`
    width: 200px;
`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>PARA.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, iusto modi neque earum perspiciatis nihil porro atque, officiis dolorem tempora totam quae exercitationem ab excepturi et rerum temporibus nisi provident accusamus, architecto veritatis? Hic eos libero, quae praesentium ipsam laudantium repudiandae consequuntur modi accusantium quidem consectetur, minima provident asperiores sit.</Desc>
                <Icons>
                    <Icon><FacebookIcon /></Icon>
                    <Icon><InstagramIcon /></Icon>
                    <Icon><TwitterIcon /></Icon>
                    <Icon><PinterestIcon /></Icon>
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