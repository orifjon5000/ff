import React, { useEffect, useState } from "react";
import { Container, Navbar, AddPlus, Menu, Wrapper, Info } from "./style";
import { card } from "../../mock/card";
import Flex from "./Flex";
import Grid from "./Grid";
// import Drawer from "../Drawer/Drawer";
import Drawer  from "../Buyurtmalar/Drawer/Drawer";
import { ReactComponent as MenuH } from "../../assets/icons/menuH.svg";
import { ReactComponent as MenuV } from "../../assets/icons/menuV.svg";

export const Index = ({value}) => {
  const [products, setProducts] = useState(Object.entries(card));
  const [isActive, setIsActive] = useState("Yangi");
  const [isGrid, setGrid] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const onCHange = (title) => {
    isGrid && setIsActive(title);
  };
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then((json) => {console.log(json);setLoading(false)})
},[])
if(isLoading)return <h1>Loading</h1>;
else
  return (
    <Container>
      <Drawer value={value} style={{width:'350px'}}>

      </Drawer>
      <Navbar>
        <AddPlus 
          // class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span>+</span>
          <p>
            Yangi buyurtma <br />
            qo'shish
          </p>
        </AddPlus>
        <Navbar.Container isActive={isGrid}>
          <Navbar.Item
            onClick={() => onCHange("Yangi")}
            isActive={isActive === "Yangi"}
          >
            Yangi
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onCHange("Qabul")}
            isActive={isActive === "Qabul"}
          >
            Qabul qilingan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onCHange("Jonatilgan")}
            isActive={isActive === "Jonatilgan"}
          >
            Jo'natilgan
          </Navbar.Item>
          <Navbar.Item
            onClick={() => onCHange("Yopilgan")}
            isActive={isActive === "Yopilgan"}
          >
            Yopilgan
          </Navbar.Item>
        </Navbar.Container>
        <Menu>
          <Menu.H onClick={() => setGrid(false)} isactive={!isGrid}>
            <MenuH className="MenuH" isactive={!isGrid} />
          </Menu.H>
          <Menu.V onClick={() => setGrid(true)} isactive={isGrid}>
            <MenuV className="MenuV" isactive={isGrid} />
          </Menu.V>
        </Menu>
      </Navbar>
      <div>{isGrid ? <Flex isActive={isActive} /> : <Grid />}</div>
    </Container>
  );
};

export default Index;
