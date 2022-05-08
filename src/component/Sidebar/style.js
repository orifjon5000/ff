import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background: white;
  /* padding:0 40px ; */
  .logoWrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .logoTitle {
      p{
        font-family: sans-serif ;
font-weight: 600;
font-size: 20px;
line-height: 19px;
/* identical to box height */


color: #2D3A45;

      }
    p:nth-child(2) {
      font-weight: 400;
      font-size: 12px;
      color: #2d3a45;
      opacity: 0.5;
    }
  }
  .img {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .sidebarlink {
    display: flex;

    align-items: center;
  }
  .icon,
  .logoutImg {
    width: 40px;
    height: 40px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
    margin-right: 10px;
  }
  .title {
    font-family: "SFProDisplay";
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
  .logout {
    margin-top: 80px;
    display: flex;
    margin-left: 40px;
    align-items: center;
  }
`;
