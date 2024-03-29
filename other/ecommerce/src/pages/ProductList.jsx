import styled  from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from"../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container =styled.div`
`;
const Title =styled.h1`
    margin:20px;
`;
const FilterContainer =styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter =styled.div`
    margin:20px;
`;
const FilterText =styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;
const Select =styled.select`
    margin-right:20px;
    padding:10px;
    border-radius:20px;
    cursor:pointer;
`
const Option =styled.option`
`


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>Xs</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>

            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option Selectd>Newest</Option>
                    <Option >Price(asc)</Option>
                    <Option >Price(desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
