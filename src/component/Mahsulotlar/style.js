import styled from "styled-components";

export const Container = styled.div`
  width: 1620px; ;
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 36px;
  background: white;
  p:nth-child(1){
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
    flex: 1;
    padding-left: 20px;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    color: #2d3a45;
    margin-bottom:0px;
  }
`;
