import { Link } from "react-router-dom"
import {UpdateCompanyDataStyled} from "../component/styles/UpdateCompanyDataStyled"
const UpdateCompanyData = () => {
    return (
      <UpdateCompanyDataStyled>
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
            <h2>Update Company Data</h2>
            <form>
                <div className="mb-3 mt-3">
                    <label for="companyname">Company Name:</label>
                    <input type="text" className="form-control" id="companyname" placeholder="company name" name="company name"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="Responsible Person">Responsible Person:</label>
                    <input type="text" className="form-control" id="Responsible Person" placeholder="Responsible Person" name="Responsible Person"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="mobile">Mobile:</label>
                    <input type="phone" className="form-control" id="mobile" placeholder="mobile" name="mobile"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="Country">Country:</label>
                    <input type="text" className="form-control" id="country" placeholder="country" name="country"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="state">State:</label>
                    <input type="text" className="form-control" id="state" placeholder="update state" name="state"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="email">Email Address:</label>
                    <input type="email" className="form-control" id="email" placeholder="update email" name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label for="password">password:</label>
                    <input type="text" className="form-control" id="password" placeholder="update password" name="password"/>
                </div>
                <button type="submit" className="btn btn-dark">update</button>
            </form>
            
        </div>
        </UpdateCompanyDataStyled>
    )
}

export default UpdateCompanyData
