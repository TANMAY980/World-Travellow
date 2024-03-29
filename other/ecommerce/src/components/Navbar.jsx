import React from 'react'
import styled from "styled-components"
import {Search,ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
const Container=styled.div`
  height: 60px;
`
const Wrapper =styled.div`
  padding:10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
const Left= styled.div`
    flex:1;
`;
const Language=styled.span`
      font-size:14px;
      cursor:pointer;  
      margin-left:65px;  
`;
const Center=styled.div`
    flex:1;
    display:flex;
    text-align :center;
`;
const SearchContainer=styled.div`
      border:0.5px solid lightgray;
      display:flex;
      align-items:center;
      margin-left:25px;
      padding:5px;
      border-radius:15px;

`
const Logo=styled.h1`
  font-weight:bold;
`
const Input=styled.input`
      border:none;
`
const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;
const MenuItem =styled.div`
      font-size:14px;
      cursor:pointer;
      margin-left:25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper> 
        <Left>
          <Logo>Fashion-Pro</Logo>
        </Left>
        <Center>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"gray",fontSize:16}}/>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
        
      </Wrapper>
    </Container>
      
  )
}

export default Navbar
