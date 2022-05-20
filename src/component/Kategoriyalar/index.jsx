import React, { useState } from "react";
import { list } from "../../mock/mahsulotlar.js";
import Drawer from "../Buyurtmalar/Drawer/Drawer";
import { Container, Wrapper, Info, Navbar } from "./style";

export const Mahsulotlar = () => {
  const [products] = useState(Object.entries(list));
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container open={open}>
      <Navbar>
        <Drawer open={open} onClos={onClose}>
          <form action="">
            <h2>Yangi Kategoriya Qo'shish</h2>
            <label htmlFor="text">Kategoriya nomi uz</label>
            <input type="text" id="text" placeholder="uz" />
            <label htmlFor="text">Kategoriya nomi ru</label>
            <input type="text" id="text" placeholder="ru" />
          </form>
          <h4>Bosh Kategoriya Kirtitish</h4>
          <select name="drinks" id="davlat" size="1">
            <option value="Uzbekistan">Dena</option>
            <option value="Turkey">yuppi</option>
            <option value="Egypt">gazvoda</option>
            <option value="South Korea">shirinchoy</option>
          </select>

          <button>Saqlash</button>
        </Drawer>
        <Navbar.Item onClick={() => setOpen(!open)}>
          {open ? "close" : "open"}
        </Navbar.Item>
        <Navbar.Plus>+</Navbar.Plus>
        <Navbar.Input>
          <input type="text" />
        </Navbar.Input>
        <Navbar.Tools>icon</Navbar.Tools>
      </Navbar>
      <Navbar.Link>
        <li>MAXSULOTLAR</li>
        <li>KATEGORIYA</li>
        <li>NARXI</li>
        <li>QO'SHIMCHA</li>
        <li>ACTION</li>
      </Navbar.Link>
      <Wrapper>
        {products.map(([key, value], index) => (
            <Info>
              <h4>{value.price}</h4>
              <h4>{value.action}</h4>
              <h4>{value.birnima}</h4>
              <h4>{value.format}</h4>
            </Info>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Mahsulotlar;
