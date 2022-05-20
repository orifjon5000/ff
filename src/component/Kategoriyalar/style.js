import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #e5e5e5;
  /* padding: 20px 30px; */
  /* opacity: ${({ open }) => (open ? "0.3" : "1")}; */

`;



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
Wrapper.column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

export const Info = styled.div`
  width: 100%;
  /* height: 60px; */
  display: flex;

  flex: 2;
  margin: 20px;
  margin-right: -60px;
  background: white;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  height: fit-content;
 
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  padding: 10px 40px;
  width: 250px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: #2d3a45;
  }

  img {
    margin-right: 14px;
    margin-left: 30px;
    border: none;
  }
  pi {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  span {
    border-radius: 18px;
    background: #20d472;
    padding: 10px 15px;
    width: 60px;
    height: 30px;
    color: white;
    font-weight: 300;
    line-height: 1;
  }
`;

export const User = styled.div`
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 250px;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 15px;
  img {
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-right: 20px;
  }
  block {
    display: flex;
    /* justify-content: space-evenly; */
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.533333px;
    color: #2d3a45;
  }
  span {
    font-size: 12px;
    line-height: 18px;
    color: #2d3a45;
    opacity: 0.7;
  }
`;

export const Payme = styled.div`
  flex-direction: column;
  display: flex;
  /* justify-content: space-around; */
  width: 250px;
  font-size: 11px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  i {
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 0.666667px;
    color: #2d3a45;
  }

  pi {
    font-size: 14px;
    line-height: 18px;
    color: #2d3a45;
    opacity: 1;
  }
`;

export const Save = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
    margin: 10px 15px;
    span {
      opacity: 0.5;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: 300;
    }
  }
  button {
    border-radius: 50%;
    padding: 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    background: white;
    box-shadow: 0 0 0 4px rgb(240 240 240 / 82%);
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  /* padding: 20px 30px;   */
  height: 100px;
  background: white;
`;
Navbar.Item=styled.div``;


Navbar.Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(237, 239, 243, 1);
  width: 700px;
  height: 45px;
  border-radius: 22px;
  padding: 20px 10px; ;
`;

Navbar.Plus = styled.div`
  background: green;
`;

Navbar.Link = styled.div`
  display: flex;
  /* align-items: center; */
  /* width: 100%; */
  margin-top: 20px;
  margin-bottom: 20px;
  height: 36px;
  background: white;
  li{
    text-transform:none;
  }
`;
Navbar.Links = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 13px;
  text-transform: uppercase;
  flex: 1;
  padding-left: 20px;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  color: #2d3a45;
`;

Navbar.Input = styled.div``;
Navbar.Tools = styled.div``;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  background: #edeff3;
  border-radius: 24px;
  margin-left: 20px;
`;

Menu.V = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 3px;
  margin-right: 5px;
  width: 40px;
  background: ${({ Active }) => Active && "white"};
  border-radius: 50%;
  cursor: pointer;
`;
Menu.H = styled.div`
  cursor: pointer;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  /* margin-left: 3px; */
  margin-right: 5px;
  width: 40px;
  background: ${({ Active }) => Active && "white"};
  border-radius: 50%;
  cursor: pointer;
`;

// export const Payme= styled.div``;
