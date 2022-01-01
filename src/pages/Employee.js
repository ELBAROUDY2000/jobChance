import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeeStyled } from "../component/styles/EmployeeStyled"
const Employee = () => {
    return (
        <EmployeeStyled>
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
            <li className="nav-item">
              <Link className="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/UpdateEmployeeData">Update</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/">Log out</Link>
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
  <div className="container-fluid ">
  <div className="card  ">
  <img src="../images/15.jpg" className="card-img-top" alt="..."/> 
  <div className="card-body">
  <h4 className="card-text">Name</h4>
        <h4 className="card-text"><img src="https://img.icons8.com/material-outlined/24/000000/send-mass-email.png"/> Email</h4>
        <h4 className="card-text"><img src="https://img.icons8.com/material-rounded/24/000000/cell-phone.png"/> Phone</h4>
        <h4 className="card-text"><img src="https://img.icons8.com/material-rounded/24/000000/marker.png"/>City</h4>
        <Link to="#"  ><i className='fab fa-facebook-f'></i></Link>
        <Link to="#"><i className="fab fa-google"></i></Link>
        <Link to="#"><i className="fab fa-twitter"></i></Link>
        <Link to="#"><i className="fab fa-youtube"></i></Link>
  </div>
  </div>
  <form>
      <div className="mb-3 mt-3">
        <label for="Recommend"><h4>Recommend:</h4></label>
        <textarea className="form-control" placeholder="Put your recommend" rows="5" id="Recommend" name="text"></textarea>
        <button type="submit" className=" btn btn-dark">Submit</button>
      </div>
    </form>
    <form>
      <div className="mb-3 mt-3">
      <label for="Recommend"><h4>comments:</h4></label>
        <input type="text" className="form-control2"  rows="5" id="Recommend" name="text"/>
       
      </div>
    </form>
    <div className="card-silf  ">
     <h4 className="h4">About  </h4> 
    
      <hr className="hr"></hr>
      <h4 className="h4" >Skils :</h4><br></br>
      
      <h4 className="h4" >Courses :</h4><br></br>
     
      <h4 className="h4" >Bio : <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione distinctio laudantium aliquid natus adipisci commodi molestiae magni. Illo perspiciatis neque aliquid? Dignissimos corrupti neque, deserunt dolore quis reiciendis? Ab?</p></h4><br></br>
     

     
    </div>
  </div>
     </EmployeeStyled>
    )
}

export default Employee