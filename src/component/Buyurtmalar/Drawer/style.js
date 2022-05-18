import styled from "styled-components";

export const Drawer = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  z-index: 111;
  background: red;
  right: ${({ open }) => (open ? "0" : "-400px")};
  transform: all 0.6s; ;
`;
