import { Jobs2Styled } from "../component/styles/Jobs2Styled";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Jobs6 = () => {
  return (
    <>
      <Jobs2Styled>
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
  
  <div class="container-fluid p-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img
            src="../images/03.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 61</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/01.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 62</h5>
            <p class="card-text">       
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/05.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 63</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/01.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 64</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/06.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 65</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/01.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 66</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/05.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 67</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/03.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 68</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/01.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 69</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/03.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 70</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/05.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 71</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/04.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 72</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <footer class = "footer">
    
      <table>
        <tbody>
          <tr>
          <td>
              <Link to="/Jobs5"class="btn btn-dark">previous</Link>
            </td>
            <td>
              <Link to="/Jobs"class="btn btn-dark">1</Link>
            </td>
            <td>
              <Link to="/Jobs2"class="btn btn-dark">2</Link>
            </td>
            <td>
              <Link to="/Jobs3"class="btn btn-dark">3</Link>
            </td>
            <td>
              <Link to="/Jobs4"class="btn btn-dark">4</Link>
            </td><td>
              <Link to="/Jobs5"class="btn btn-dark">5</Link>
            </td><td>
              <Link to="/Jobs6"class="btn btn-dark">6</Link>
            </td><td>
              <Link to="/Jobs7"class="btn btn-dark">7</Link>
            </td><td>
              <Link to="/Jobs8"class="btn btn-dark">8</Link>
            </td><td>
              <Link to="/Jobs9"class="btn btn-dark">9</Link>
            </td>
            <td>
              <Link to="/Jobs7"class="btn btn-dark">Next</Link>
            </td>
          </tr>
        </tbody>
      </table>
    
    </footer>
      </Jobs2Styled>
    </>
  );
};

export default Jobs6;
