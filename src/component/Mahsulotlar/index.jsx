import React, { useState } from "react";
import { Container, Title, Wrapper,Info } from "./style";
import { list } from "../../mock/mahsulotlar.js";
import Navbar from "./Navbar/Navbar.jsx";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export const Index = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [product, setProduct] = useState(list);
  const Delete=(id)=>{
    const NewData=product.filter((value) => value.id !== id)

    setProduct(NewData)
  }
  
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
        <div className="flex-row" key={value.id}>
         
         <Info>
              <image>
                <img src={value.img} alt="" />
              </image>
              <h3>{value.mahsulot}</h3>
              <h3>{value.kategoriya}</h3>
              <h3>{value.price}</h3>
              <h3>{value.format}</h3>
              <action>{value.action}</action>
              <delete onClick={()=>Delete(value.id)} >{value.birnima}</delete>
              {/* <h1>{value.mahsulot}</h1> */}
            </Info>

        </div>
      ))}
      <button onClick={() => setProduct(list)}>Reset</button>
    </Container>
  );
};

export default Index;
