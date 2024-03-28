import React from "react"
import Header from "../common/header/Header"
import Basket from "../common/cart/Cart"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Contact from "../contact/Contact"
import Carts from "../home/carts/Carts"
import Info from "../home/info/Info"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/carts' component={Carts} />
          <Route exact path="/info" component={Info} />
        </Switch>
        <Basket />
        <Footer />
      </Router>
    </>
    
  )
}
export default Pages
