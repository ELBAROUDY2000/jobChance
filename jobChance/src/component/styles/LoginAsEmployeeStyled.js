import styled from "styled-components";
export const LoginAsEmployeeStyled=styled.form`
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
         height: 0px;
         
         font-style: italic;
        
       }
.child1{
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width:30%;
    height:40%;
    background-color:#0d6efd;
    color:white;
    button{
        margin-top:30px;
        padding:5px;
    }
    p{
    margin:10px;
    }
    border-radius: 10px;
}
.child2{
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width:40%;
    height:40%;
    background-color:rgb(219, 214, 208);
    border-radius: 10px;
    input{
        margin:15px 0;
    }
    button{
 background-color:rgb(17, 16, 16);;
        border-radius:5px;
        color:white;
        padding:10px;
    }
input:not(:placeholder-shown){
    border-color:green;
}


}
`