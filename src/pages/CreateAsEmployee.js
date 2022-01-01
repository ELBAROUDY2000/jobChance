import { Link ,naLink} from "react-router-dom";
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateAsEmployeeStyled } from "../component/styles/CreateAsEmployeeStyled"

export class CreateAsEmployee extends Component {
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
        <CreateAsEmployeeStyled>
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
            <div className="child1">
               

        <h1 className="h1">Create Employee Account</h1>
        <h4 className="h4">Complete The Form</h4>
                
            </div>   
            <div className="child2">
            <form>
         
          <div className="mb-3">
            <input type="text" name="name" className="form-control" placeholder="Full name" onChange={this.onName}/>

          </div>


          <div className="mb-3">
            <input type="email" name="emali" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Email address"  onChange={this.onEmail}/>

          </div>
          <div className="mb-3">
            <input type="tel" name="phone" aria-label="Mobile" className="form-control" placeholder="Mobile"
            onChange={this.onphone}/>
          </div>
          <div className="mb-3">
            <input type="text" name="jobTitle" aria-label="Job title" className="form-control" placeholder="Job title"
            onChange={this.onjobTitle}/>

          </div>
          <div className="mb-3">
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
            onChange={this.onPassword}/>

          </div>
          <div className="a">
            <label for="dateOfBirth" className="col-form-label">Date of Birth</label>
            <input type="text" name="dateOfBirth" aria-label="Last name" className="form-control" placeholder="DD/MM/YYYY"
            onChange={this.ondateOfBirth}/>

          </div>
          <div className="aa">
            <div><label for="inputexparianc" className="col-form-label">gender</label></div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="option1"
              onChange={this.ongender}/>
              <label className="form-check-label" for="gender">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="option2"
                onChange={this.ongender}/>
              <label className="form-check-label" for="gender">Female</label>
            </div>
          </div>
          <div>
            <label for="nationality" className="col-form-label">Natonality</label>
            <select className="form-select" name="nationality" aria-label="Default select example"
             onChange={this.onnationality}>
              <option selected>Egypt</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <label for="country"  className="col-form-label" >Country</label>
            <select className="form-select" name="country" aria-label="Default select example"
            onChange={this.oncountry}>
              <option selected>Egypt</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          
          

          <div className="a">
            <input type="text" name="city" aria-label="Last name" className="form-control" placeholder="City"
            onChange={this.oncity}/>

          </div>
          
          <div className="b">
            <input type="text" name="skills" aria-label="Last name" className="form-control" placeholder="Skills"
            onChange={this.onskills}/>

          </div>
          <div className="b">
            <input type="text" name="courses" aria-label="Last name" className="form-control" placeholder="Courses"
           onChange={this.oncourses} />

          </div>

          <div className="mb-3">
            <label for="inputexparianc" className="col-form-label">Work Experience:</label>
            <select className="form-select" name="workExperience" aria-label="Default select example" onChange={this.onworkExperience}>
              <option value="exparianc">select</option>
              <option value="exparianc">none</option>
              <option value="exparianc">1</option>
              <option value="exparianc">2</option>
              <option value="exparianc">3</option>
              <option value="exparianc">4</option>
              <option value="exparianc">5</option>
              <option value="exparianc">6</option>
              <option value="exparianc">7</option>
              <option value="exparianc">8</option>
              <option value="exparianc">9</option>
              <option value="exparianc">10</option>
            </select>
          </div>


        </form>
        <div><Link  to="/Employee" className="btn btn-dark"  onClick={this.onSubmitLogin}> Register</Link></div>
            </div>
            </div>
            </div>
     </CreateAsEmployeeStyled>
    )
}
}

export default CreateAsEmployee