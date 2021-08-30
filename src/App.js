import './App.scss';
import './styles/_dark.scss';
import HomePage from './Pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import myphoto from './img/myphoto.png';
import { NavLink } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as ImProf from 'react-icons/im';
import * as Cont from 'react-icons/md';
import * as Achive from 'react-icons/gr';
import { useState } from 'react';
import useThemeSwitcher from './Components/useThemeSwitcher';
import { ScrollToTop } from "./Components/ScrollToTop";


function App() {
  const [navToggle, setNavToggle] = useState(false);
  const ThemeSwitcher = useThemeSwitcher();



  const navClick = () => {
    setNavToggle(!navToggle)
  }
  document.title = "Tijani's Portfolio App"
  return (
    <>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <div className="NavBar">
            <nav className="nav">
              <div className="profile">
                <img src={myphoto} alt="" />
              </div>
              <ul className="darkmode" onClick={navClick}>
                {ThemeSwitcher}
              </ul>
              <ul className="nav-items" onClick={navClick}>
                <li className="nav-item">
                  <NavLink to="/" exact activeClassName="active" >
                    <AiIcons.AiTwotoneHome color="#191D2B" />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" exact activeClassName="active">
                    <ImProf.ImProfile color="#191D2B" />
                    <span>About</span>

                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolios" exact activeClassName="active">
                    <Achive.GrAchievement color="#191D2B" />
                    <span>Projects</span>

                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" exact activeClassName="active">
                    <Cont.MdContacts color="#191D2B" />
                    <span>Contact</span>

                  </NavLink>
                </li>
              </ul>
              <footer className="footer">
                <p>
                  Tijani|@2021|All Rights Reserved
              </p>
              </footer>

            </nav>

          </div>
        </div>

        <div className={`nav-btn ${navToggle ? 'actives' : ''}`} onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
          <div className="content" >
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/portfolios">
                <PortfoliosPage />
              </Route>
              <Route path="/blogs">
                <BlogsPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}
export default App;