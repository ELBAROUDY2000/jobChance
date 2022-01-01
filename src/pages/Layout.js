import { Outlet,Link } from "react-router-dom";
import {Wrapper,Html} from '../component/styles/LayoutStyle';
import "../index.css"
function Layout() {
    return (
        <><Html>
           <Wrapper>
            <ul>
                <li>
                     JobChance
                </li>
                <li>
                    <Link to="/" style={{ textDecoration:'none',color:'white'}}>Home</Link>
                </li>
                <li>
                    <Link to="/loginasemployee" style={{ textDecoration:'none', color:'white'}}>log in as employee</Link>
                </li>
                <li>
                     <Link to="/loginasemployer" style={{ textDecoration:'none', color:'white'}}>log in as employer</Link>
                </li>
                <li>
                     <Link to="/jobs" style={{ textDecoration:'none', color:'white'}}>jobs</Link>
                </li>
            </ul>   
          </Wrapper> 
          </Html>
          <Outlet/>
        </>
    )
}

export default Layout
