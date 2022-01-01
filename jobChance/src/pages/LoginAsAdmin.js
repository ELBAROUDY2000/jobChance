import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginAsEmplyerStyled } from "../component/styles/LoginAsEmployerStyled"
const LoginAsAdmin = () => {
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
                  <h4>Admin Account</h4>
                    
                   
                </div>
                <div class="col p-3 bg-light">
                    <form>
                    <label for="inputPassword5" class="form-label">Username</label>
                    <div class="input-group mb-3">
                    
  <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
</div>
                      
                        <div class="mb-3">
                            <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
                            
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
                            <Link to="/Admin" class="btn btn-dark">Log in</Link>
                    </form>
                </div>
               
            </LoginAsEmplyerStyled>
        </>
    )
}

export default LoginAsAdmin
