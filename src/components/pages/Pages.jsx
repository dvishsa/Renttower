import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Contact from "../contact/Contact"
import Info from "../home/info/Info"
import NotFound from '../home/error/Error';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path="/info" component={Info} />
          <Route component={NotFound}></Route>
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
