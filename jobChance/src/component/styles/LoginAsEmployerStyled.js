import styled from "styled-components";
export const LoginAsEmplyerStyled=styled.form`
background-color: rgb(216, 216, 216);
background-repeat: no-repeat;
background-size: cover;
font-family: 'Times New Roman', Times, serif;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
#root{
    width: 100%;
     height: 50px;
     position: absolute;
     top:0px;

    
   }
.child1{
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
width:500px;
height:50%;
background-color:rgb(43, 38, 38);
color:white;
margin-left:200px;
button{
    margin-top:30px;
    padding:5px;
}
p{
margin:10px;
}
}


.child2{
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
width:75%;
height:40%;
background-color:rgb(219, 214, 208);
input{
    margin:15px 0;
}
button{
    background-color:rgb(17, 16, 16);
    border-radius:5px;
    color:white;
    padding:10px;
}

}
.col{
    display:grid;

align-items:center;
text-align: center;


width:100px;
height:50%;
background-color:rgb(219, 214, 208);
margin-right:250px;
   
}
.btn-primary{
    margin-left:20px;
    background-color:rgb(17, 16, 16);


}
.form-check-input{
    align-self:center;
  
 

}
form-label{
    text-align: center;

}
`