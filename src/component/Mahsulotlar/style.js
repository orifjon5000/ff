import styled from "styled-components";

export const Container = styled.div`
  width: 1620px;
  height: 70px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-content:flex-start ;
`;

export const AddPlus = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #edeff3;
  width: 260px;
  span {
    margin-right: 15px;
    width: 36px;
    height: 30px;
    color: #fff;
    text-align: center;
    line-height: 1.6;
    border-radius: 50%;
    background: rgba(32, 212, 114, 1);
  }
`;

Navbar.Container = styled.div`
  display: flex;
  flex:1 ;
  width: 680px;
  padding: 0 20px;   
  align-items: center;
  justify-content: center;
  height: 52px;
  background: #edeff3;
  border-radius: 24px;
`;
Navbar.Item = styled.div`
  display: flex;
  width: 190px;
  /* margin:0 10px ; */
  height: 38px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 18px;
`;

export const Menu = styled.div`
  display: flex;
  margin-top: 7px;  
  width: 70px;
  height: 35px;
  background: #edeff3;
  border-radius: 24px;
  margin-left: 20px;
`;

Menu.H = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 3px;
  margin-right: 5px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  /* background: ${({ isactive }) => isactive && "white"};
  .Image {
    fill: ${({ isactive }) => isactive && "#8d9ba8"};
  } */
`;
Menu.V = styled.div`
  cursor: pointer;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  /* margin-left: 3px; */
  margin-right: 5px;
  width: 40px;
  /* background: ${({ isactive }) => isactive && "white"};
  .Images {
    fill: ${({ isactive }) => isactive && "#8d9ba8"};
  } */
  border-radius: 50%;
  cursor: pointer;
`;
