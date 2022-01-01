import { Link } from "react-router-dom"
import { UpdateEmployeeDataStyled } from "../component/styles/UpdateEmployeeDataStyled"
const UpdateEmployeeData = () => {
    return (
        <UpdateEmployeeDataStyled>
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
        <div className="container mt-3">
           <h2>Update Employee Data</h2> 
           <form>
           <div className="mb-3 mt-3">
            <label for="full name">Full Name:</label>
            <input type="text" className="form-control" id="full name" placeholder="Edit here" name="full name"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Edit here" name="email"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="phone">Mobile:</label>
            <input type="phone" className="form-control" id="mobile" placeholder="Edit here" name="mobile"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="job title">Job Title:</label>
            <input type="text" className="form-control" id="job title" placeholder="Edit here" name="job title"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="country">Country:</label>
            <input type="text" className="form-control" id="country" placeholder="Edit here" name="country"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="governorate">Governorate:</label>
            <input type="text" className="form-control" id="governorate" placeholder="Edit here" name="governorate"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="city">City:</label>
            <input type="text" className="form-control" id="city" placeholder="Edit here" name="email"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="skill">Skill:</label>
            <input type="text" className="form-control" id="skills" placeholder="Edit here" name="email"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="courses">Courses:</label>
            <input type="text" className="form-control" id="courses" placeholder="Edit here" name="email"/>
            </div>
            <div className="mb-3 mt-3">
            <label for="work experience">Work Experience:</label>
            <input type="text" className="form-control" id="work experience" placeholder="Edit here" name="email"/>
            </div>
            <div className="mb-3">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
            </div>
           <button type="submit" className="btn btn-dark">update</button>
           </form>
        </div>
        </UpdateEmployeeDataStyled>
    )
}

export default UpdateEmployeeData
