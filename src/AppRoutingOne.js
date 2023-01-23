import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage.jsx"
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";


function AppRoutingOne() {
  return (
      <Router>
      <div>
        <aside>
          <Link to="/">
            || HOME |
          </Link>
          <Link to="/about">
            | ABOUT |
          </Link>
          <Link to="/faqs">
            | FAQs |
          </Link>
          <Link to="/*">
            | Not Existing Route ||
          </Link>
        </aside>
        <manin>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/faqs" element={<AboutPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/tasks" element={<TasksPage/>}/>
            <Route path="/task/:id" element={<TaskDetailPage/>}/>

            {/* 404- page not found */}
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </manin>
      </div>
        
      </Router>
  );
}
export default AppRoutingOne;
