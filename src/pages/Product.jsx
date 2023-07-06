import React, { useState } from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InfoContainer = styled.div`
    flex: 1;
    margin-top: 50px;
`
const Image = styled.img`
    width: 60%;
`
const Title = styled.h1`

`

const Desc = styled.p`

`
const Price = styled.h1`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 20px 0;
`
const ColorContainer = styled.div`
    display: flex;
    gap: 10px;
    
`
const Color = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.2);
    }
`
const SizeContainer = styled.div`
    
`
const Select = styled.select`
  height: fit-content;
  padding: 3px 7px;
  outline: none;
  font-size: 15px;
  margin: 0 10px;
`
const Option = styled.option`

`
const IncButton = styled.button`
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
    font-size: 1.2rem;
    &:hover{
        background-color: #015346;
        color: white;
    }
`
const Input = styled.input`
    width: 25px;
    outline: none;
    border: 1px solid black;
    margin: 0 10px;
    font-size: 1.1rem;
    text-align: center;
    border-radius: 10px;
`
const AddButton = styled.button`
    background-color: #015346;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 700;
    margin: 0 50px;

    &:hover{
        background-color: #007460;
        color: white;
    }
`

const Product = () => {
    const [addCart, setAddCart] = useState(0);
    const incrementCart = ()=>{
        setAddCart(addCart + 1)
    }
    const decrementCart = ()=>{
        setAddCart(addCart - 1)
    }
    return (
        <Container>
            <Navbar/>
                <Wrapper>
                    <ImgContainer>
                        <Image src='https://www.differio.com/media/catalog/product/cache/c6770a21c7757dbf861a5323e3edb29c/i/m/img_2780.jpg'/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Denim Jumpsuit</Title>
                        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum non quam ipsa, voluptatem quae magnam quidem cupiditate, quo tenetur dolore voluptates tempora earum laudantium. Veniam, nobis. In quae sit alias velit atque, natus, magni tempora corporis eos, minima aliquam fugit.</Desc>
                        <Price>$20</Price>
                        <FilterContainer>
                            <ColorContainer>
                                Color:
                                <Color color='black'/>
                                <Color color='blue'/>
                                <Color color='gray'/>
                            </ColorContainer>
                            <SizeContainer>
                                Size:
                                <Select>
                                    <Option>S</Option>
                                    <Option>M</Option>
                                    <Option>L</Option>
                                    <Option>XL</Option>
                                </Select>
                            </SizeContainer>
                        </FilterContainer>
                        <IncButton onClick={decrementCart}>-</IncButton>
                        <Input value={addCart}/>
                        <IncButton onClick={incrementCart}>+</IncButton>
                        <AddButton>ADD TO CART</AddButton>
                    </InfoContainer>
                </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product