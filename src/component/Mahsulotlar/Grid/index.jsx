import React, { useState } from "react";
import { Container, Wrapper, Order, User, Payme, Save, Info } from "./style";
import { card } from "../../../mock/card";
import save from "../../../assets/icons/save.svg";
import done from "../../../assets/icons/done.svg";
import cancel from "../../../assets/icons/cancel.svg";
import clock from "../../../assets/icons/clock.svg";
import user from "../../../assets/icons/user.svg";

export const Index = ({ isActive }) => {
  const [products, setProducts] = useState(Object.entries(card));
  return (
    <Container>
      <Wrapper>
        {products.map(([key, value]) =>
          value
            .filter((a) => a.categoria === isActive.toLocaleLowerCase())
            .map((item) => (
              <Info>
                <Order className="box">
                  <p>
                    <div className="orderID">{item.orderId}</div>
                    <div className="imgSave"><img src={save} alt="dsave" /></div>
                  </p>
                  <pi>
                    <img className="clock" src={clock} alt="clock" /> 00:24
                  </pi>
                </Order>
                {/* order */}
                <User className="box">
                  <block>
                    <img src={user} alt="user" /> {item.user.name}
                  </block>
                  <span>{item.user.phone}</span>
                </User>
                {/* user */}
                <Payme className="box">
                  <p>
                    Umumiy summa:
                    <br />
                    <i>{item.total}</i>
                  </p>
                  <pi>
                    <span></span> Payme
                  </pi>
                </Payme>
                {/* payme */}
                <Save >
                  <div>
                    <p>
                      <span>operator:</span> {item.operator.name}
                    </p>
                    <button>
                      <img src={cancel} alt="" />
                    </button>
                  </div>
                  <div>
                    <p>
                      {item.filial.title}
                      {item.filial.location}
                    </p>{" "}
                    <button>
                      <img style={{ width: "12px" }} src={done} alt="" />
                    </button>
                  </div>
                </Save>
                {/* save */}
              </Info>
            ))
        )}
      </Wrapper>
    </Container>
  );
};

export default Index;
