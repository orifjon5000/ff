import React, { useState } from "react";
import { Container, Navbar, AddPlus, Menu,Wrapper ,Info} from "./style";
import { card } from "../../mock/card";
import Flex from './Flex'
import Grid from './Grid'
import Drawer from "./Drawer/Drawer";
import { ReactComponent as MenuH } from "../../assets/icons/menuH.svg";
import { ReactComponent as MenuV } from "../../assets/icons/menuV.svg";


export const Index = () => {
  const [products, setProducts] = useState(Object.entries(card));
  const [isActive,setIsActive] = useState('Yangi')
  const [isGrid,setGrid] = useState(false)
  const onCHange=(title)=>{
    isGrid&&setIsActive(title)

  }
  return (
    <Container>
      <Drawer/>
      <Navbar>
        <AddPlus>
          <span>+</span>
          <p>
            Yangi buyurtma <br />
            qo'shish
          </p>
        </AddPlus>
        <Navbar.Container isActive={isGrid}>
          <Navbar.Item  onClick={()=>onCHange('Yangi')} isActive={isActive==='Yangi'} >Yangi</Navbar.Item>
          <Navbar.Item onClick={()=>onCHange('Qabul')} isActive={isActive==='Qabul'}>Qabul qilingan</Navbar.Item>
          <Navbar.Item onClick={()=>onCHange('Jonatilgan')} isActive={isActive==='Jonatilgan'}>Jo'natilgan</Navbar.Item>
          <Navbar.Item onClick={()=>onCHange('Yopilgan')} isActive={isActive==='Yopilgan'}>Yopilgan</Navbar.Item>
        </Navbar.Container>
        <Menu   >
          <Menu.H onClick={()=>setGrid(false)}  isactive={!isGrid}>
            <MenuH className="MenuH" isactive={!isGrid}/>
          </Menu.H>
          <Menu.V onClick={()=>setGrid(true)}  isactive={isGrid}  >    
            <MenuV  className="MenuV" isactive={isGrid}/>
          </Menu.V>
        </Menu>
      </Navbar>
      <div>
        {isGrid?<Flex isActive={isActive} />: <Grid />}
      </div>
    </Container>
  );
};

export default Index;
