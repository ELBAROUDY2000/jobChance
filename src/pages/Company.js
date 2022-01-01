import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CompanyStyled } from '../component/styles/CompanyStyled';
const Company = () => {
    return (
        <CompanyStyled>
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
              <Link className="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/UpdateCompanyData">Update</Link>
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
      <img src="../images/13.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">

        <h4 className="card-text">Company_Name</h4>
        <h4 className="card-text"><img src="https://img.icons8.com/material-outlined/24/000000/send-mass-email.png"/> Email</h4>
        <h4 className="card-text">Company_Address</h4>
        

        <Link to="#" className='link'><img src="https://img.icons8.com/ios-filled/50/000000/facebook-circled--v3.png" className='img'/></Link>
        <Link to="#"><img src="https://img.icons8.com/color/50/000000/twitter--v2.png" className='img'/></Link>
        <Link to="#"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" className='img'/></Link>
        <Link to ="#"><img src="https://img.icons8.com/color/48/000000/whatsapp--v6.png" className='img'/></Link>
       



      </div>
    </div>
    <form>
        <div className="container">
           <h4><img src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-job-human-resource-itim2101-lineal-itim2101.png"/> Jobs :</h4>

            <Link className="btn btn-outline-dark"  to="/AddJob"  ><img src="https://img.icons8.com/material-rounded/24/000000/plus-math.png"/> Add_Job</Link>
           
         
          
          </div>
    </form>
    
    <div className="card-silf  ">
 
        
      <h4 className="h4" >Bio : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur perspiciatis sed explicabo suscipit! Vero accusamus non aperiam eius, et minus fugit magnam? Consequatur dolorem fuga, doloremque dolor debitis quam.</p></h4>
     

     
    </div>
  </div>

  
          </CompanyStyled>
    )
}
export default Company