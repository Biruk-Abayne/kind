import styled from '@emotion/styled';

import Playere from './Playere';




function Users() {
  



  



 


  const Button = styled.div`
  color: blue;
  padding: 5px;
  
  background:#eee;
  width:300px;
  height:170px;
  

`

const Buttona = styled.div`
  color: white;
  padding: 5px;
  margin-left: 35px;
  
  background:#333;
  width:350px;
  height:570px;

`

const Frame= styled.div`
background:#ccc;
width: 300px;
height:300px;
border-radius:5px;
margin-top:23px;

margin-left:15px;
`
const Section= styled.section`
background:transparent;

font-size:31px;
align-item:center;
margin-top:60px;
padding-left:40px;

`

const Editor= styled.button`
width:60px;
background:#272;
font-size:23px;
color:violet;
border:1px, black;
border-radius:5px;
opacity:0.8;
&:hover{
  opacity:1;
}`



const Delete= styled.button`
width:60px;
background:#272;
margin-left:35px;
font-size:23px;
color:violet;
border:1px, black;
border-radius:5px;
opacity:0.8;
&:hover{
  opacity:1;
}`





const Player= styled.button`
width:60px;
background:#272;
margin-left:35px;
font-size:23px;
color:violet;
border:1px, black;
border-radius:5px;
opacity:0.8;
&:hover{
  opacity:1;
}`



const Hulu = styled.div`
margin-left:30px;

background:#ddd;
width: 800px;
display:flex;
flex-wrap:wrap



`
const Wonder= styled.div`
display:flex;`


const Mzmur = styled.div`
display:flex;
gap:26px;
position absolute;
padding:8px;
height:630px;
width:750px;
flex-wrap:wrap;
overflow:scroll;
flex-direction: column;

`

const Ag = styled.div`

padding: 13px;
background:lightblue;

text-align:center;
&:hover{
  color:black;
  background:lightgreen;
  cursor:pointer;
}
`


const Aga = styled.div`

padding: 13px;
width:300px;
justify-content:center;
background:lightblue;
font-size:26px;
text-align:center;


`


const Box = styled.div`
`




  
  return (<Box>
  <Wonder>
    <Buttona> <Aga>ohhhhhhhhhk</Aga>


    <Frame></Frame>
    
  
    <Section><Editor>Biab</Editor> <Player>Biru</Player>    <Delete>Biab</Delete></Section>
    </Buttona>
    
    
    
  
  <Hulu>
    
  <Mzmur>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
    <Button><Ag>Biruk</Ag>
    <Ag>Biruk</Ag>
    <Ag>Biruk</Ag></Button>
    
     
  </Mzmur>
  </Hulu>
  
  </Wonder>
  
  

  <Playere />
 
  </Box>

     

 
  )
}

export default Users;