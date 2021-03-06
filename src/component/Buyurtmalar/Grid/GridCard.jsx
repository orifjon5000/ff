import React, {useState}from 'react'
import Save from "../../../assets/icons/save.svg";
import Clock from "../../../assets/icons/clock.svg";
import UserI from "../../../assets/icons/user.svg";
import Done from "../../../assets/icons/done.svg";
import Cancel from "../../../assets/icons/cancel.svg";
import {
  
  Order,
  Pay,
  User,
  Card,
  Location,
} from "./style";
import InfoCard from './InfoCard/index'

export default function GridCard({value,onDelete}) {
    
    const [open,setOpen] =useState(false)
  return (
    <Card>
        <InfoCard value={value}  open={open}/>
                  <Order  className="flex-row">
                    {" "}
                    <div className="flex-row  orderId">
                      <p className="flex-row">{value.orderId}</p>
                      <div className="imgsave">
                        <img src={Save} alt="save" />
                      </div>{" "}
                    </div>
                    <div className="flex-row orderClock">
                      <img src={Clock} alt="Clock" />
                      <p>00:24</p>
                    </div>
                  </Order>

                  <User className="flex-column">
                    <div className="flex-row userName">
                      <img src={UserI} alt="User" />
                      <h4>{value.user.name}</h4>
                    </div>
                    <p> {value.user.phone}</p>
                  </User>

                  <Pay className="flex-row">
                    <div className="payTotal">
                      <p>Umumiy summa:</p>
                      <p>{value.total} UZS</p>
                    </div>
                    <div className="iconpay"></div>
                    <span>Payme</span>
                  </Pay>

                  <Location className="flex-row">
                    <div>
                      <div>
                        <p>operator:</p>
                        <h4>{value.operator.name}</h4>
                      </div>
                      <div>
                        <p>Manzil:</p>
                        <h4>{value.filial.location}</h4>
                      </div>
                    </div>
                    <div className=" flex-column">
                      <img className="imgSave" src={Done} alt="Done"  type="button"/>
                      <img src={Cancel} className="imgSave" alt="Cancel" onClick={()=>onDelete(value.id)} />
                      <button onClick={()=>setOpen(!open)}>edit</button>
                    </div>
                  </Location>
                  
                </Card>
  )
}
