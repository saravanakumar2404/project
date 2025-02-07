import React from 'react'
import "./App.css"
import {Header} from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  {Home} from "./components/home/Home"
import { About } from "./components/about/About"
import { CoursesHome } from './components/allcourses/CoursesHome';
import { Team } from './components/team/Team';
import { Price } from './components/pricing/Price';
import { Blog } from './components/blog/Blog';
import { contact } from './components/contact/contact';
import { Footer } from './components/common/footer/Footer';



function App() {
  return (
    <>
        <Router>
         <Header />
         <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' exact component={About} />
         <Route path='/courses' exact component={CoursesHome} />
         <Route path='/team' exact component={Team} />
         <Route path='/pricing' exact component={Price} />
         <Route path='/journal' exact component={Blog} />
         <Route path='/contact' exact component={contact} />
        </Switch>
        <Footer/>
         </Router>
    </>
  )
}
export default App;