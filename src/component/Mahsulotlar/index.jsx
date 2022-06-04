import React, { useState } from "react";
import { Container, Title} from "./style";
import { list } from "../../mock/mahsulotlar.js";
import Navbar from './Navbar/Navbar.jsx'

export const Index = () => {
  const [isActive,setIsActive] = useState('Yangi')
  const [product,setProduct] =useState(list)
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
{
  product.map((value)=>(
    <div key= {value.id}>
      {value.img}
      {value.mahsulot}
      {value.birnima}
      {value.price}
      {value.kategoriya}
    </div>
  ))
}

    </Container>
  );
};

export default Index;
