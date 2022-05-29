import React, { useState } from "react";
import { Container, Wrapper, Order, User, Payme, Save, Info } from "./style";
import { card } from "../../../mock/card";
import save from "../../../assets/icons/save.svg";
import done from "../../../assets/icons/done.svg";
import cancel from "../../../assets/icons/cancel.svg";
import clock from "../../../assets/icons/clock.svg";
import user from "../../../assets/icons/user.svg";
import Card from "./Card";
export const Index = ({ isActive }) => {
  const [products, setProducts] = useState(Object.entries(card));
  
  return (
    <Container>
      <Wrapper>
        {products.map(([key, value]) =>
       
            value
            .filter((a) => a.categoria === isActive.toLocaleLowerCase())
            .map((item) => <Card item={item}/>))}
      </Wrapper>
    </Container>
  );
};

export default Index;
