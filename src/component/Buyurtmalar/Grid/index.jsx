import React, { useState } from "react";

import { Container, Wrapper } from "./style";
import GridCard from "./GridCard";
import { card } from "../../../mock/card";

export const Index = () =>
  // { isActive }
  {
    const [products, setProducts] = useState(Object.entries(card));
    return (
      <Container>
        <Wrapper>
          {products.map(([name, data]) => (
            <Wrapper.Column>
              {data
                // .filter((a) => a.categoria === isActive.toLocaleLowerCase())
                .map((value) => (
                  <>
                    <GridCard value={value} />
                  </>
                ))}
            </Wrapper.Column>
          ))}
        </Wrapper>
      </Container>
    );
  };

export default Index;
