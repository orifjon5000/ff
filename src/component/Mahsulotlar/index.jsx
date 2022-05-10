import React, { useState } from "react";
import { Container, Navbar, AddPlus, Menu,Wrapper ,Info} from "./style";
import { card } from "../../mock/card";

import { ReactComponent as First } from "../../assets/icons/menuH.svg";
import { ReactComponent as Second } from "../../assets/icons/menuV.svg";

export const Index = () => {
  const [products, setProducts] = useState(Object.entries(card));
  const [isActive,setIsActive] = useState('Yangi')
  return (
    <Container>
      <Navbar>
        <AddPlus>
          <span>+</span>
          <p>
            Yangi buyurtma <br />
            qo'shish
          </p>
        </AddPlus>
        <Navbar.Container>
          <Navbar.Item onClick={()=>setIsActive('Yangi')} isActive={isActive==='Yangi'} >Yangi</Navbar.Item>
          <Navbar.Item onClick={()=>setIsActive('Qabul qilingan')} isActive={isActive==='Qabul qilingan'}>Qabul qilingan</Navbar.Item>
          <Navbar.Item onClick={()=>setIsActive('Jo\'natilgan')} isActive={isActive==='Jo\'natilgan'}>Jo'natilgan</Navbar.Item>
          <Navbar.Item onClick={()=>setIsActive('Yopilgan')} isActive={isActive==='Yopilgan'}>Yopilgan</Navbar.Item>
        </Navbar.Container>
        <Menu>
          <Menu.H>
            <First />
          </Menu.H>
          <Menu.V>
            <Second />
          </Menu.V>
        </Menu>
      </Navbar>
      <Wrapper>
        {products.map(([key,value])=>(
          value.map((item)=>(
            <Info>
            <h1>{item.categoria}</h1> 
            <h1>{item.orderId}</h1>
            </Info>
          ))
        ))}
      </Wrapper>
    </Container>
  );
};

export default Index;
