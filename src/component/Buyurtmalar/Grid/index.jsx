import React, { useState } from "react";

import { Container, Wrapper } from "./style";
import GridCard from "./GridCard";
import { card,newcard } from "../../../mock/card";

export const Index = () =>
  // { isActive }
  {
    const [products, setProducts] = useState(Object.entries(card));
    const [product, setProduct] = useState(newcard);
    const filter=['yangi','qabul', 'jonatilgan','yopilgan'];
const onDelete=(id)=>{
 console.log( id,'id')
 setProduct(product.filter((value)=>value.id!==id))
}
    return (
      <Container>
        <Wrapper>
{
  filter.map((item)=>(
    <Wrapper.Column>
      <h4>{item}</h4>
      {
        product.filter((f)=>f.categoria===item).map((value)=>(
          <GridCard value={value} onDelete={(id=>onDelete(id))}/>
        ))
      }
    </Wrapper.Column>
  ))
}



          
          {/* {products.map(([name, data]) => (
            <Wrapper.Column>
              {data
                .map((value) => (
                  <>
                    <GridCard value={value} />
                  </>
                ))}
            </Wrapper.Column>
          ))} */}
        </Wrapper>
      </Container>
    );
  };

export default Index;

  