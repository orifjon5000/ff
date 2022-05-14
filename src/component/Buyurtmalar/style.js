// import styled from "styled-components";

// export const Container = styled.div``;

// export const Wrapper = styled.div`
//   display: flex;
//   padding: 30px;
// `;

// Wrapper.Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;

// export const Card = styled.div`
//   width: 350px;
//   height: 380px;
//   background: #ffffff;
//   box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
//   border-radius: 6px;
//   /* margin: 0 30px; */
//   margin-bottom: 20px;
//   margin-right: 30px;
// `;

// export const Title = styled.div`
//   background: #ffffff;
//   box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
// `;

// export const Order = styled.div`
//   margin: 20px;
//   padding-bottom: 10px;
//   border-bottom: 1.5px solid rgb(229, 229, 229, 0.9);

//   p:nth-child(1) {
//     background: #20d472;
//     border-radius: 18px;
//     width: 70px;
//     height: 30px;
//     font-size: 24px;
//     color: #ffffff;
//     margin-right: 8px;
//   }
//   .orderId {
//     margin-right: 75px;
//   }
//   .imgsave {
//     background: rgba(237, 239, 243, 1);
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 30px;
//     height: 30px;
//   }
//   img {
//     opacity: 0.5;
//     border: none;
//     width: 30px;
//     height: 30px;
//     padding: 5px;
//   }

//   .orderClock {
//     img {
//       width: 32px;
//       height: 32px;
//       margin-right: 5px;
//     }
//     p {
//       font-size: 20px;
//     }
//   }
// `;

// export const User = styled.div`
//   .userName {
//     width: 200px;

//     img {
//       margin-right: 20px;
//       width: 22px;
//     }
//     h4 {
//       font-family: sans-serif;
//       font-weight: 500;
//       font-size: 24px;
//     }
//     margin-bottom: 10px;
//   }
//   p {
//     margin-bottom: 20px;
//     opacity: 0.6;
//   }
// `;
// export const Pay = styled.div`
//   margin: 0 20px;
//   padding-bottom: 10px;
//   border-bottom: 1.5px solid rgb(229, 229, 229, 0.9);
//   .payTotal {
//     margin-right: 20px;
//     font-family: sans-serif;

//     p:nth-child(1) {
//       opacity: 0.5;
//       margin-bottom: 5px;
//     }
//     p:nth-child(2) {
//       font-size: 24px;
//       font-weight: 600;
//     }
//   }
//   span {
//     margin-top: -32px;
//     margin-left: 10px;
//   }
//   .iconpay {
//     content: "";
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background: #14e5e4;
//     margin-top: -32px;
//   }
// `;

// export const Location = styled.div`
//   font-family: sans-serif;
// justify-content:space-around ;
// margin-top:20px;
//   p {
//     margin-right: 20px;
//     opacity: 0.5;
//     margin-bottom:5px ;
//   }
//   h4 {
//   }
//   .imgSave{
//     border-radius: 50%;
//     border: 3.5px solid #edeff3;
//     background: white;
//     width: 33px;
//     padding: 4px;
//     color:#fff;
 
//   }
//   img:nth-child(1){
//     margin-bottom:25px ;
//   }
// `;



import styled from "styled-components";

export const Container = styled.div`
  width: 1620px;
  height: 70px;
;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: white ;
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
  cursor: pointer;
  transition: 0.3s all ease;
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

export const Info =styled.div`
display:flex ;
width:100%;
margin:10px 0;
background:white ;
padding:20px 50px;
height: fit-content ;
`
export const Wrapper=styled.div` 
display:flex;
flex-direction:column;
margin:0 10px;
`;
