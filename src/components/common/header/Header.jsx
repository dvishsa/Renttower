import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import LoginModals from './LoginModals';
import SignInModals from './SignInModals';
import "./modal.css";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState(null); // State to store logged in username

  // Function to toggle the Login modal
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  // Function to toggle the Sign In modal
  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <a href="/">
              <img src='./images/logo-light.png' alt='Your Logo' />
            </a>
          </div>

          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Render the "Sign In" and "Log in" buttons conditionally */}
          {!loggedInUsername && (
            <div className='button flex'>
              <button className='btn1' onClick={toggleSignInModal}>
                <i className='fa fa-sign-out'></i> Sign In
              </button>
              <button className="btn2" onClick={toggleLoginModal}>
                <i className="fa fa-sign-in"> </i> Log in
              </button>
            </div>
          )}

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>

          {loggedInUsername && <div className="username">{loggedInUsername}</div>} {/* Display username if logged in */}
        </div>
      </header>

      {/* Modals for Sign In and Log In */}
      {showSignInModal && <SignInModals onClose={toggleSignInModal} setLoggedInUsername={setLoggedInUsername} />}
      {showLoginModal && <LoginModals onClose={toggleLoginModal} setLoggedInUsername={setLoggedInUsername} />}
      
    </>
  )
}

export default Header;
