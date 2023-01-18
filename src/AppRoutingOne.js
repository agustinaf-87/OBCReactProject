import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage.jsx"
import AboutPage from "./pages/about-faqs/AboutPage";


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
            | FAQs ||
          </Link>
        </aside>
        <manin>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/faqs" element={<AboutPage/>}/>

            {/* 404- page not found */}
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </manin>
      </div>
        
      </Router>
  );
}
export default AppRoutingOne;
