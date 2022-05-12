import React, { useState } from "react";
import { Container, Wrapper,Order,Pay,User,Card,Location, Title } from "./style";
import { card } from "../../mock/card";
export const Index = () => {
  const [products, setProducts] = useState(Object.entries(card));
  return (
    <Container>
      <Wrapper>
        {products.map(([name, data]) => (
          <Wrapper.Column>
            <Title>
              {" "}
              <h4>{name}</h4>
            </Title>
            {data.map((value) => (
              <Card>
                <Order>
                  {" "}
                  <div>
                    <p>{value.orderId}</p>
                    <button>save</button>
                  </div>
                  <div>
                    <button>clock</button>
                    <p>00:24</p>
                  </div>
                </Order>

                <User>
                  <div>
                  <button>user</button>
                  <h4>{value.user.name}</h4>
                  </div>
                  <p> {value.user.phone}</p>
                </User>


                <Pay>
                  <div>
                    <p>Umumiy summa:</p>
                    <p>{value.total} UZS</p>
                  </div>
                  <p>Payme</p>
                </Pay>

                <Location>
                <div>
                  <p>operator:</p>
                  <h4>{value.operator.name}</h4>
                </div>
                <div>
                  <p>Manzil:</p>
                  <h4>{value.filial.location}</h4>
                </div>
                </Location>
                <div>
                  <button>s</button>
                  <button>as</button>
                </div>
              </Card>
            ))}
          </Wrapper.Column>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Index;
