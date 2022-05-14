import React, { useState } from "react";
import { Container, Navbar, AddPlus, Menu,Wrapper ,Info} from "./style";
import { card } from "../../mock/card";
import Flex from './Flex'
import Grid from './Grid'
import { ReactComponent as MenuH } from "../../assets/icons/menuH.svg";
import { ReactComponent as MenuV } from "../../assets/icons/menuV.svg";


export const Index = () => {
  const [products, setProducts] = useState(Object.entries(card));
  const [isActive,setIsActive] = useState('Yangi')
  const [isGrid,setGrid] = useState(false)
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
        <Menu  onClick={()=>setGrid(true)} >
          <Menu.H   isactive={isGrid}>
            <MenuH  isactive={isGrid}/>
          </Menu.H>
          <Menu.V  isactive={!isGrid}  >    
            <MenuV  isactive={isGrid}/>
          </Menu.V>
        </Menu>
      </Navbar>
      <div>
        <Grid />
        <Flex isActive={isActive}/>
      </div>
    </Container>
  );
};

export default Index;
