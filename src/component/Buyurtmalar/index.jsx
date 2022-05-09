import React,{useState} from "react";
import { Container, Wrapper } from "./style";
import { card } from "../../mock/card";
export const Index = () => {
  const [products,setProducts]= useState(Object.entries(card))
  return (
    <Container>
      <Wrapper>
        {products.map(([name,data])=>(
          <Wrapper.Column>
           <h1>{name}</h1> 
            {data.map((value)=>(
              <div>
              <h2>{value.user.name}</h2>
              <h3>{value.user.phone}</h3>
            </div>
            ))}
          </Wrapper.Column>
  ))} 
        </Wrapper>
    </Container>
  );
};
 
export default Index;
