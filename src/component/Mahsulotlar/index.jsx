import React, { useState } from "react";
import { Container, Title, Wrapper } from "./style";
import { list } from "../../mock/mahsulotlar.js";
import Navbar from "./Navbar/Navbar.jsx";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const Index = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [product, setProduct] = useState(list);
  return (
    <Container>
      <Navbar />

      <Title className="flex-row">
        <p>Mahsulot</p>
        <p>Turi</p>
        <p>Narxi</p>
        <p>Qo'shimcha</p>
        <p>Tahrirlash</p>
      </Title>
      {product.map((value) => (
        <Wrapper className="flex-row" key={value.id}>
         
          <Wrapper.Column style={{width:'365px'}}> <img src={value.img} alt="" />{value.mahsulot}</Wrapper.Column>
          <Wrapper.Column>{value.price}</Wrapper.Column>
          <Wrapper.Column> {value.price}</Wrapper.Column>
          <Wrapper.Column>{value.kategoriya}</Wrapper.Column>
          <Wrapper.Column style={{width:'365px'}}>
          <HiOutlinePencil className="ss" />
          <HiOutlineTrash />
          </Wrapper.Column>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Index;
