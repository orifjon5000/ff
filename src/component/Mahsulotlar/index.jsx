import React, { useState } from "react";
import { Container, Navbar, AddPlus, Menu } from "./style";
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
          <Navbar.Item isActive={isActive} >Yangi</Navbar.Item>
          <Navbar.Item isActive={isActive}>Qabul qilingan</Navbar.Item>
          <Navbar.Item isActive={isActive}>Jo'natilgan</Navbar.Item>
          <Navbar.Item isActive={isActive}>Yopilgan</Navbar.Item>
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
    </Container>
  );
};

export default Index;
