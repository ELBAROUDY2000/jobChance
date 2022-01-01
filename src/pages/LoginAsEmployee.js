import { Link } from "react-router-dom"
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginAsEmplyerStyled } from "../component/styles/LoginAsEmployerStyled"



export class LoginAsEmployee extends Component {
  constructor(props){
    super(props)
    this.state = {
      onEmail:"",
      onPassword:"",
    }
  }
  /*onEmail = (event)=>{
    this.setstate({onEmail:event.target.value})
    console.log(event.target.value)

  }
  onPassword = (event)=>{
    this.setstate({onPassword:event.target.value})
    console.log(event.target.value)
  }*/
  onSubmitLogin =()=>{
    fetch('http://localhost:3001/login' ,{
      method: "post",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.onEmail,
       password: this.state.onPassword
      })
    }) 
    .then((response)=> response.json())
    .then((data) => {
     // if (data === valid){
      //  this.props.onRouter("Employee")
     // } else{
//console.log("u can not login")
     // }
    })
    .catch((err)=> console.log(err))
  }
  render(){
const {onRouter}=this.props
    return (
        <>
            <LoginAsEmplyerStyled>
            <div id="root">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <Link class="navbar-brand  fs-5" to="#">JobChance</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/loginasemployee" class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">Log in as employee</Link>
              
            </li>
            <li class="nav-item dropdown">
              <Link to="/loginasemployer" class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">Log in as employer</Link>
              

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" aria-current="page" to="/jobs">Jobs</Link>
            </li>

          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
                
                <div className="child1">
                  <h4>Employee Account</h4>
                    <p>haven't you registered yet?</p>
                    <Link to="/createasemployee" class=" btn btn-light"> Sign Up</Link>
                </div>
                <div class="col p-3 bg-light">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                            >Email address</label
                            >
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={this.onEmail}
                            />
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" 
                              onChange={this.onPassword}/>
                            <div id="passwordHelpBlock" class="form-text">
                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </div>
                            </div>

                            <div class="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label class="form-check-label" for="exampleCheck1"
                                >Remember me
                                </label>
                            </div>
                            <Link to="/employee" class="btn btn-dark" onClick={this.onSubmitLogin}>Log in</Link>
                    </form>
                </div>
               
            </LoginAsEmplyerStyled>
        </>
    )
}
};

export default LoginAsEmployee;
