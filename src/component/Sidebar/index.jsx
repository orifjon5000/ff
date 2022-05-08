import React from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Container } from "./style";
import logo from '../../assets/imgs/logo.png'
import logout from "../../assets/icons/logout.svg"
export const Generic = (props) => {
  return (
    <Container>

      <NavLink className='logoWrapper' to='/'>
        <img  className="img" src={logo}/>
        <div className="logoTitle" >
          <p >Fast Food</p>
          <p >Online Mahsulot Sotuvi</p>
        </div>
      </NavLink>
      {sidebar.map(({ title, pathname, icon: Icon }) => (
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration:'none',
              background: isActive ? "#FCB600" : "white",
              color: isActive ?'white':'#2d3a45',
              display:'flex',
              alignItems:'center',
              height:'60xp',
              marginBottom:'5px',
              padding:'0 40px',
              transition:'all .3s',
              height:'50px'


            };
          }}
          to={pathname}
        >
          <div className="sidebarlink">
            {" "}
            <Icon className="icon" />
            <div className="title">{title}</div>
          </div>
        </NavLink>
      ))}
      <div className="logout">
        <img src={logout} className="logoutImg" alt='logout'/> <p>exit</p>
      </div>
    </Container>
  );
};

export default Generic;
