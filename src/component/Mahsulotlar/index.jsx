import React, { useState } from "react";
import { Container, Title} from "./style";
import { card } from "../../mock/card";
import Navbar from './Navbar/Navbar.jsx'

export const Index = () => {
  const [products, setProducts] = useState(Object.entries(card));
  const [isActive,setIsActive] = useState('Yangi')
  return (
    <Container>
     <Navbar/>

    <Title className="flex-row">
      <p>Mahsulot</p>
      <p>Turi</p>
      <p>Narxi</p>
      <p>Qo'shimcha</p>
      <p>Tahrirlash</p> 
    </Title>
    </Container>
  );
};

export default Index;
