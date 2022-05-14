import React, { useState } from "react";
import { Container, Navbar, AddPlus, Menu,Wrapper ,Info} from "./style";
import { card } from "../../mock/card";
import Flex from './Flex'
import Grid from './Grid'
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
          <Navbar.Item onClick={()=>setIsActive('Qabul')} isActive={isActive==='Qabul'}>Qabul qilingan</Navbar.Item>
          <Navbar.Item onClick={()=>setIsActive('Jonatilgan')} isActive={isActive==='Jonatilgan'}>Jo'natilgan</Navbar.Item>
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
      <div>
        <Flex isActive={isActive}/>
        <Grid />
      </div>
    </Container>
  );
};

export default Index;
