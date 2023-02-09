import { BrowserRouter as Router, Route, Routes, createBrowserRouter,Outlet ,useParams, Navigate } from "react-router-dom"
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashboardPage from "./pages/dashboard/Dashboard";



function AppRoutingFinal() {

  let loggedIn = true;


  return (
    <Router>
      <Routes>
        {/* redirections to protect our routes */}
        <Route path="/" element={
          loggedIn ?
          (<Navigate to="/dashboard"/>)
          :
          (<Navigate to="/login"/>)
        }/> 

        {/* Login Route*/}
        <Route path="/login" element={<LoginPage/>}/>

        {/*Dashboard*/}
        <Route path="/dashboard" element={
          loggedIn ?
          (<DashboardPage/>)
          :
          (<Navigate to="/login"/>)
        }/> 

        {/* Not Found*/}
        <Route path="*" element={<NotFoundPage/>}/>    
        
      </Routes>
    </Router>
  );
}
export default AppRoutingFinal;

