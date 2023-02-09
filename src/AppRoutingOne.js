import { BrowserRouter as Router, Route, Link, Routes, createBrowserRouter,Outlet ,useParams } from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage.jsx"
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import AlertComponent from "./components/AlertComponent";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect } from "react";



function AppRoutingOne() {

  let logged =  false;

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first task"
    }, 
    {
      id: 2,
      name: "Task 2",
      description: "My second task"
    }
  ]

  
  useEffect(() => {
    logged =  localStorage.getItem("credentials");
    console.log("User is logged ?", logged)
  }, [])

  
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT | </Link>
          <Link to="/faqs">| FAQs |</Link>
          <Link to="/task/1">| Task 1 |</Link>
          <Link to="/task/2">| Task 2 |</Link>
          <Link to="/login">| Login ||</Link>
          <Link to="/*">| Not Existing Route |</Link>
          <Link to="/login">| Login ||</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element=
              {
                logged ? 
                (<AlertComponent text={"You are logged in. Redirecting to home..."} path={"/"}></AlertComponent>)
                :
                (<LoginPage/>)
                
                } />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/faqs" element={<AboutPage/>} />
            <Route path="/profile" element= 
            {
              logged ?
              (<ProfilePage/>)
              :
              (<AlertComponent text={"You must be logged in. Redirecting to login..."} path={"/login"}></AlertComponent>)
              
            }
            ></Route>
            <Route path="/tasks" element={<TasksPage />} />
            <Route
              path="task/:id"   
              element={
                  <TaskDetailPage task={taskList[0]}/>
              }/>
              {/* 404- page not found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

    </Router>

  );
}
export default AppRoutingOne;

