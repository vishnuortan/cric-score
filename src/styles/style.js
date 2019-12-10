import styled from "styled-components";


export const Body = styled.div`
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:100%;
`;

export const Navbar = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:7%;
  background:slateblue;
  color:white;
  font-family:"Comic Sans MS", cursive, sans-serif;
  font-size:170%;
  text-align:center;
  font-weight:bold;
`;

export const Scorewrapper = styled.div`
  position:absolute;
  left:0;
  top:7%;
  height:80%;
  width:100%;
  border-bottom:1.5px solid black;
`;

export const Scorecard = styled.div`
  position:absolute;
  height:150px;
  width:70%;
  left:15%;
  top:5%;
`;

 export const Score = styled.div`
   position:absoute;
   height:35px;
   width:50%;
   margin-left:33%;
   font-size:170%;
   font-weight:bold;
   padding-top:10px;
 `;

 export const Scoredetails1 =styled.div`
   position:absolue;
 `;

 export const Scoredetails2 =styled.div`
   margin-left:140px;
   margin-top:-30px;
   position:absolute;
 `;

 export const Scoredetails3 =styled.div`
   margin-left:230px;
   margin-top:-30px;
   position:absolute;
 `;

export const Postwrapper = styled.div`
  position:absolute;
  left:0;
  top:85%;
  height:15%;
  width:100%;
`;

export const Postholder = styled.div`
  position:absolute;
  height:10px;
  width:40%;
  height:30px;
  left:35%;
  top:40%;
`;

export const Value = styled.span`
  margin-left:10px;
  border:1.5px solid slateblue;
  border-radius:5px; 
  font-size:150%;
  font-weight:bold;
  padding-top:7px;
  padding-bottom:7px;
  padding-left:10px;
  padding-right:10px;
`;

export const Post = styled.button`
  margin-top:-10px;
  width:150px;
  margin-left:15px;
  height:45px;
  background-color:tomato;
  border:none;
  color:black;
  font-size:120%;
  font-family:"Comic Sans MS", cursive, sans-serif;
  border-radius:4px;
  outline:none;
  :hover{
    background-color:Mediumseagreen;
  }
  position:absolute;
`;

 export const Result = styled.div`
   height:35px;
   width:50%;
   margin-left:33%;
   font-size:130%;
   color:red;
   padding-top:10px;
   font-weight:bold;
 `;

 export const Feedholder = styled.div`
   position:absolute;
   width:45%;
   height:60%;
   top:38%;
   left:30%;
   overflow:auto;
 `;
 export const Feed = styled.div`
   width:99%;
   height:40px;
   background:lightgrey;
   font-size:140%;
   text-align:center;
   border:1px solid lightgrey;
   border-radius:15px;
   margin-top:3px;
   padding-top:10px;
  `;
export const Recent = styled.div`
   height:20px;
   width:50%;
   font-size:120%;
   margin-top:15px;
   margin-left:33%;
   overflow:hidden;
`;
export const Recentholder = styled.div`
  margin-left:70px;
  margin-top:-22px;
  overflow:hidden;
`;
export const Recentcontent = styled.span`
  padding-right:5px;
`;