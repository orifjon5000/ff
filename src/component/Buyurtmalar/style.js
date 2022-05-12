import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
`;

Wrapper.Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Card = styled.div`
  width: 234px;
  height: 345px;
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  border-radius: 6px;
  margin: 0 30px;
  margin-bottom: 10px;
  margin-right: 15px;
`;

export const Title = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export const Order = styled.div``;
export const User = styled.div``;
export const Pay = styled.div``;
export const Location = styled.div``;
