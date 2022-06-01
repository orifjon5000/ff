import styled from "styled-components";

export const Navbar = styled.div`
  background: white;
  justify-content: start;
`;

export const Add = styled.div`
  align-items: center;
  cursor: pointer;
  width: 200px;
  border-left: 2px solid #e5e5e5;
  border-right: 2px solid #e5e5e5;
  justify-content: space-evenly;
  div {
    background: #20d472;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 15px;
    font-family: sans-serif;
    /* line-height: 1.5; */
    padding-top: 10px;
    font-weight: 550;
    opacity: 0.9;
  }
`;
Add.plus = styled.div`
  display: flex;
  padding-bottom: 5px;
  color: white;
  font-size: 30px;
`;



export const Search = styled.div`
  background: #edeff3;
  border-radius: 24px;
  margin-left: 5px;
  height: 35px;
  width: 220px;
  margin-left: 25px;
  input {
    outline: none;
    background: inherit;
    border: none;
    width: 165px;
    margin-right:10px ;
    margin-left: 10px;
    margin-top:3px
  };
 
`;



export const Img = styled.div`
margin-left: 10px;
  div{
      width: 35px;
      height: 35px;
border-radius: 50px;
border: 4px solid #EDEFF3;

  }
  img{
      margin-top:2px;
      margin-right:2px;
      cursor: pointer;
  }
`;
