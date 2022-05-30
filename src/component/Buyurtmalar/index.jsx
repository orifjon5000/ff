import React, { useEffect, useState,Suspense,lazy } from "react";
import { Container, Navbar, AddPlus, Menu, Wrapper, Info } from "./style";
import { card } from "../../mock/card";
import Flex from "./Flex";
// import Drawer from "../Drawer/Drawer";
import Drawer  from "../Buyurtmalar/Drawer/Drawer";
import { ReactComponent as MenuH } from "../../assets/icons/menuH.svg";
import { ReactComponent as MenuV } from "../../assets/icons/menuV.svg";

const Grid=React.lazy(()=>import ("./Grid") ) ;

export const Index = ({value}) => {
  const [products, setProducts] = useState(Object.entries(card));
  const [isActive, setIsActive] = useState("Yangi");
  const [isGrid, setGrid] = useState(false);


  const [isLoading, setLoading] = useState(true);
  const onCHange = (title) => {
    isGrid && setIsActive(title);
  };

  return (
  <Suspense fallback={<h1>data keguncha kutish...</h1>}>
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
      <div>{isGrid ? <Flex isActive={isActive} /> : <Grid isActive={isActive}/>}</div>
    </Container>
  </Suspense>
  );
};

export default Index;
