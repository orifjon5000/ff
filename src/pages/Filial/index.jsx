import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import Filial from '../../component/Filial/index'
export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
    <Filial/>
    </Container>
  );
};

export default Generic;