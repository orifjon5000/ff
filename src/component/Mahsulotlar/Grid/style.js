import styled from "styled-components";

export const Container = styled.div`
  width: 1620px;
  flex:1;
;
`;





export const Info =styled.div`
display:flex ;
margin:10px 0;
background:white ;
/* padding:20px 50px; */
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
height: 150px;
.box{
border-right: 3px solid #EDEFF3;
margin-right: 10px;
flex-direction: column;

} 

`
export const Wrapper=styled.div` 
display:flex;
flex-direction:column;
margin:10px auto;
width:1480px;
flex:1;

`;

export const Order =styled.div`
padding:0;
width:300px;
display: flex;


p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 16px;
    color: #2d3a45;
    margin:18px auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #EDEFF3;
  }
pi{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -50px
 }
.clock{
  margin-right: 10px;

 
}
.imgSave{
  background: rgba(237, 239, 243, 1);
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

}
  img {
opacity: .5;
    border: none; 
    width: 30px;
  height: 30px;
  padding:5px;


  }
  .orderID {
    border-radius: 20px;
    background: #20d472;
    padding: 10px 15px;
    width: 90px;
    height: 40px;
    color: white;
    font-weight: 300;
    line-height: 1.5;
    text-align: center;
    margin-right: 15px ;
    
  }



`
export const User =styled.div`
width:370px;
`


export const Payme =styled.div`
width:370px;
`


export const Save =styled.div`
border-right:none;
width:370px;`