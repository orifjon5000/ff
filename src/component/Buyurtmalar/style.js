import styled from "styled-components";

export const Container = styled.div`
  width: 1620px;
  height: 70px; ;
`;

export const Drawer =styled.div`
width: 300px;
height: 100vh;
background: red;
position: absolute;
right: 800px;
z-index:999
`;
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: white;
`;

export const AddPlus = styled.div`
  display: flex;
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
  /* width: 680px; */
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  height: 52px;
  background: #edeff3;
  border-radius: 24px;
  opacity: ${({ isActive }) => (!isActive ? 0.3 : 1)};
  cursor: ${({ isActive }) => (!isActive ? "not-allowed" : "pointer")};

`;
Navbar.Item = styled.div`
  display: flex;
  width: 190px;
  /* margin:0 10px ; */
  height: 38px;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) => (isActive ? "#ffffff" : "#edeff3")};
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 2px 2px rgba(174, 176, 181, 0.314986)" : "none"};
  border-radius: 18px;
  cursor: inherit;
  transition: 0.3s all ease;

`;

export const Menu = styled.div`
  display: flex;
  margin-top: 7px;
  width: 75px;
  height: 40px;
  background: #edeff3;
  border-radius: 24px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
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
  background: ${({ isactive }) => isactive && "white"};
  .MenuH {
    fill: ${({ isactive }) => isactive && "#8d9bA8"};
  }
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
  background: ${({ isactive }) => isactive && "white"};
  .MenuV {
    fill: ${({ isactive }) => isactive && "#8d9bA8"};
  }

  border-radius: 50%;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  background: white;
  padding: 20px 50px;
  height: fit-content;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;
