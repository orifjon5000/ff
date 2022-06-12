import styled from "styled-components";

export const Container = styled.div`
  width: 1620px; ;
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 36px;
  background: white;
  p:nth-child(1) {
    border: none;
  }
  p {
    align-items: center;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    line-height: 13px;
    height: 36px;
    text-transform: uppercase;
    width: 405px;
    padding-left: 40px;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    color: #2d3a45;
    margin-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  background: white;
  margin: 15px 40px;
  border-radius: 6px;
  height: 45px;
  font-family: sans-serif;
  justify-content: start;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 7px 20px;
  background: white;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  height: fit-content;
  /* width: 60rem; */
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px 30px 10px 20px;
  }
  h3 {
    width: 65px;
    display: flex;
    flex: 1;
    font-size: 13px;
    line-height: 15px;
    font-weight: 500;
    text-transform: capitalize;
    color: #2d3a45;
  }
  action {
    border: 3px solid #edeff3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 1.5px;
    opacity: 0.8;
    cursor: pointer;
  }
  delete {
    border: 3px solid #edeff3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 1.5px;
    opacity: 0.8;
    cursor: pointer;
    margin-right: 85px;
    margin-left: 25px;
  }
`;