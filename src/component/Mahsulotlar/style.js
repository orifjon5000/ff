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
  margin: 25px 40px;
  border-radius: 6px;
  height: 36px;
  font-family: sans-serif;
  justify-content: start;
`;
Wrapper.Column = styled.div`
  width:  405px;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 30px;
  border: 1px solid black;

  img {
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
  .ss {
    margin-left: 43px;
  }
`;
