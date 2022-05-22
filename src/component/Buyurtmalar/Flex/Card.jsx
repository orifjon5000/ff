import React from 'react'
import {  Order, User, Payme, Save, Info } from "./style";
import save from "../../../assets/icons/save.svg";
import done from "../../../assets/icons/done.svg";
import cancel from "../../../assets/icons/cancel.svg";
import clock from "../../../assets/icons/clock.svg";
import user from "../../../assets/icons/user.svg";
export default function ({item}) {
  return (
    <Info>
        {/* <Drawer/> */}
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
        <i>{item.total}</i>
      </p>
      <pi>
      <div className="bgtext"></div>
       <p>payme</p>
      </pi>
    </Payme>
    {/* payme */}


    <Save  >
      <div  className="savee">
        <p>
          <span>operator:</span> <h4 style={{width:'100px'}}>{item.operator.name}</h4>
        </p>
        <p>
        <span>filial:</span>
         <h4 style={{width:'200px'}}> {item.filial.title}
          {item.filial.location}</h4>
        </p>{" "}
        
      </div>
      <div className="imgsave" >
        
        <img src={cancel} style={{marginTop:'20px'}} alt=""    />
          <img  className="img2" src={done} alt="" />
      </div>
    </Save>
    {/* save */}

  </Info>
  )
}
