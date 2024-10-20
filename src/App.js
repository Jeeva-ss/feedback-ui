
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./shared/Card";
import { FeedbackProvider } from "./context/FeedbackContext";
// import Post from './components/Post'
// import NavigateRoute from './components/NavigateRoute'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Sangam Cinemas 4K" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />

            {/* useParams */}
            {/* <Route path='/post/:id/:name' element={<Post />} /> */}

            {/* navigate & useNavigate */}
            {/* <Route path='/navigate/*' element={<NavigateRoute />} /> */}

            {/* 404 Page */}
            <Route
              path="/notfound"
              element={
                <div>
                  <Card>
                    <h1>404 - Page not found...</h1>
                  </Card>
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <Card>
                    <h1>404 - Page not found...</h1>
                    <p>
                      <Link to="/">Back to home</Link>
                    </p>
                  </Card>
                </div>
              }
            />
          </Routes>

          {/* NavLink */}
          {/* <Card>
          <NavLink to='/' activeClassName='active' >
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active' >
            About
          </NavLink>
        </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;

