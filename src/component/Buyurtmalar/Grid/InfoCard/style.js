import styled from "styled-components";

export const Wrapper = styled.div`
height:300px ;
background:red ;
width:200px ;
position:absolute ;
top:${({open})=>open? '400px':'-400px'} ;
z-index: 1111;;
right:${({open})=>open? 'center':'-400px'} ;
z-index: 1111;
`