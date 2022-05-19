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
     d
    </Container>
  );
};

export default Index;
