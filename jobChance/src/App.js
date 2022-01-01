import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import LoginAsEmployee from './pages/LoginAsEmployee'
import Jobs from './pages/Jobs'
import Jobs2 from './pages/Jobs2'
import Jobs3 from './pages/Jobs3';
import Jobs4 from './pages/Jobs4';
import Jobs5 from './pages/Jobs5';
import Jobs6 from './pages/Jobs6';
import Jobs7 from './pages/Jobs7';
import Jobs8 from './pages/Jobs8';
import Jobs9 from './pages/Jobs9';
import LoginAsEmployer from './pages/LoginAsEmployer'
import CreateAsEmployee from './pages/CreateAsEmployee'
import CreateAsEmployer from './pages/CreateAsEmployer'
import Employee from './pages/Employee'
import Company from './pages/Company';
import Admin from './pages/Admin';
import UpdateEmployeeData from './pages/UpdateEmployeeData';
import UpdateCompanyData from './pages/UpdateCompanyData';
import AddJob from './pages/AddJob';
import LoginAsAdmin from './pages/LoginAsAdmin';




function App() {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route index element={<Home/>}/>
        <Route path="loginasemployee" element={<LoginAsEmployee/>}/>
        <Route path="loginasemployer" element={<LoginAsEmployer/>}/>
        <Route path="loginasadmin" element={<LoginAsAdmin/>}/>
        <Route path="jobs" element={<Jobs/>}/>
        <Route path="jobs2" element={<Jobs2/>}/>
        <Route path="jobs3" element={<Jobs3/>}/>
        <Route path="jobs4" element={<Jobs4/>}/>
        <Route path="jobs5" element={<Jobs5/>}/>
        <Route path="jobs6" element={<Jobs6/>}/>
        <Route path="jobs7" element={<Jobs7/>}/>
        <Route path="jobs8" element={<Jobs8/>}/>
        <Route path="jobs9" element={<Jobs9/>}/>
        <Route path="createasemployee" element={<CreateAsEmployee/>}/>
        <Route path="createasemployer" element={<CreateAsEmployer/>}/>
        <Route path = "employee" element={<Employee/>}/>
        <Route path = "company" element={<Company/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path = "UpdateEmployeeData" element={<UpdateEmployeeData/>}/>
        <Route path = "UpdateCompanyData" element={<UpdateCompanyData/>}/>
        <Route path = "AddJob" element={<AddJob/>}/>


        {/* componentDidMount(){ */}
  {/* fetch("http:localhost:3001") */}
  {/* .then((response)=> response.json()) */}
  {/* .then((data)=> console.log(data)) */}
  {/* .catch((err)=> console.log(err)) */}
{/* }        */}
    </Routes>
    </BrowserRouter>
  );
}



export default App;
