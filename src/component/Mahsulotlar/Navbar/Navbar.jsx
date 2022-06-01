import React from "react";
import { BiSearch } from "react-icons/bi";
import Varonka from "../../../assets/image/varonka.png";
import {Navbar, Img, Search, Add } from "./style";
function Index() {
  return (
    <Navbar className="flex-row">

      <Add className="flex-row">
        <div className="flex-row">
          <Add.plus>+</Add.plus>
        </div>
        <p>Yangi mahsulot <br/> qo'shish</p>
      </Add>

      <Search>
        <input type="text" placeholder="Qidirish" />
        <BiSearch  style={{color:"#8D9BA8",cursor:'pointer'}}/>
      </Search>

      <Img>
        <div className="flex-row">
        <img src={Varonka} alt="" />
        </div>
      </Img>

    </Navbar>
  );
}

export default Index;
