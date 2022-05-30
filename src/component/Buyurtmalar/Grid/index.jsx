import React, { useState } from "react";

import { Container, Wrapper } from "./style";
import GridCard from "./GridCard";
import { newcard } from "../../../mock/card";

export const Index = () => {
  const [product, setProduct] = useState(newcard);

  const ArrCategory = ["yangi", "qabul", "jonatilgan", "yopilgan"];

  const onDelete = (id) => {
    console.log(id, "id");
    setProduct(product.filter((value) => value.id !== id));
  };


  return (
    <Container>
      <Wrapper>
        {ArrCategory.map((item) => (
          <Wrapper.Column>
            <h3>{item} {product
              .filter((f) => f.categoria === item).length}</h3>
              <p>
              ummumiy summa:{product
              .filter((f) => f.categoria === item).reduce((state,value)=>{return state+parseInt(value.total)},0)}
              </p>
            {product
              .filter((f) => f.categoria === item)
              .map((value) => (
                <GridCard value={value} onDelete={(id) => onDelete(id)} />
              ))}
          </Wrapper.Column>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Index;
