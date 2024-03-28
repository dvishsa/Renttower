import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>          More information here</h2>
             

              <div className='input flex'>
                
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a  href="https://www.instagram.com/gj_wr1d?igsh=bGdwcHlxa2Q1YTVr"> 
          <img className = 'insta' src='../images/instagram-link.png' alt='' />  
        </a>
      </footer>
      <div className='legal'>
        <span>© 2024 Rent Tower by Leasehub.</span>
      </div>
    </>
  )
}

export default Footer
