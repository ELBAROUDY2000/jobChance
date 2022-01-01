import { Link } from "react-router-dom";
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateAsEmployerStyled } from "../component/styles/CreateAsEmployerStyled"

export class CreateAsEmployer extends Component {
  constructor(props){
    super(props)
    this.state = {
      onEmail:"",
      onPassword:"",
      onName:"",
      onphone:"",
      onjobTitle:"",
      ondateOfBirth:"",
      ongender:"",
      onnationality:"",
      oncountry:"",
      oncity:"",
      onskills:"",
      oncourses:"",
      onworkExperience:"",
    
    }
  }
  onName = (event)=>{
    this.setstate({onName:event.target.value})
    console.log(event.target.value)

  }
  onphone = (event)=>{
    this.setstate({onphone:event.target.value})
    console.log(event.target.value)

  }
  onjobTitle = (event)=>{
    this.setstate({onjobTitle:event.target.value})
    console.log(event.target.value)

  }
  ondateOfBirth = (event)=>{
    this.setstate({ondateOfBirth:event.target.value})
    console.log(event.target.value)

  }
  ongender = (event)=>{
    this.setstate({ongender:event.target.value})
    console.log(event.target.value)

  }
  onnationality = (event)=>{
    this.setstate({onnationality:event.target.value})
    console.log(event.target.value)

  }
  oncountry = (event)=>{
    this.setstate({oncountry:event.target.value})
    console.log(event.target.value)

  }
  oncity = (event)=>{
    this.setstate({oncity:event.target.value})
    console.log(event.target.value)

  }
  onskills = (event)=>{
    this.setstate({onskills:event.target.value})
    console.log(event.target.value)

  }
  oncourses = (event)=>{
    this.setstate({oncourses:event.target.value})
    console.log(event.target.value)

  }
  onworkExperience = (event)=>{
    this.setstate({onworkExperience:event.target.value})
    console.log(event.target.value)

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
    fetch('http://localhost:3001/register' ,{
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
    return (
        <CreateAsEmployerStyled>
            <div id="root">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand  fs-5" to="#">JobChance</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/loginasemployee" className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">Log in as employee</Link>
              
            </li>
            <li className="nav-item dropdown">
              <Link to="/loginasemployer" className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">Log in as employer</Link>
              

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" aria-current="page" to="/jobs">Jobs</Link>
            </li>

          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <div className="container">

    
<div className="row">
  <div className="col">
    

    <h1 className="h1">Create Employer Account</h1>
    <h4 className="h4">Complete The Form</h4>
  </div>
  <div className="col2">
      
    <div><Link to="/company" className="btn btn-dark"  onClick={this.onSubmitLogin}> Register</Link></div>
    <form >

      <div className="mb-3">
        <input type="text" name="name" aria-label="Last name" className="form-control" placeholder=" Company name"/>

      </div>

      <div className="mb-3">
        <input type="text" name="hrName" aria-label="Last name" className="form-control" placeholder="Responsible person"/>

      </div>
      
      <div className="mb-3">
        <input type="tel" name="phone" aria-label="Mobile" className="form-control" placeholder="Mobile"/>
      </div>
      <div>
        <label for="country" className="col-form-label">Country</label>
        <select className="form-select" aria-label="Default select example" name="country">
          <option selected>Egypt</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <input type="text" aria-label="Last name" className="form-control" placeholder=" State" name="state"/>

      </div>
      <div className="mb-3">
        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Email address"/>

      </div>
     
      <div className="mb-3">
        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>

      </div>
      
     
      


    </form>


  </div>
</div>
</div>
     </CreateAsEmployerStyled>
    )
}
}

export default CreateAsEmployer