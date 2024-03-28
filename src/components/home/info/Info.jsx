import React from "react";
import './info.css'

const Info = () => {
    return(
        <div className="Information">
            <div>          
                <img src="images/home-1.jpg" alt="" className="home1"></img>
                <div className="photos">
                    <img src="images/home-1.jpg" alt="" className="home2"></img>
                    <img src="images/home-1.jpg" alt="" className="home2"></img>
                    <img src="images/home-1.jpg" alt="" className="home2"></img>
                    <img src="images/home-1.jpg" alt="" className="home2"></img>   
                </div>
            </div>   
            <h2>Big Beautiful House</h2>
            <div className="Buttons">
                <button className="AddCart">Add to cart</button>
                <button className="AddCart">Contact the owner</button>
            </div>
            <div className="text">  <h4>Random House, situated at 1745 Broadway in New York City, stands as a prominent publishing institution. Founded in 1927 by Bennett Cerf and Donald Klopfer, it has become a cornerstone of the literary world. Over the years, Random House has established itself as a leading force in the industry, publishing a vast array of literature spanning fiction, non-fiction, and children's books. Its diverse catalog boasts works from both established authors and emerging talents, ensuring there's something for every reader. Renowned for its commitment to editorial excellence, Random House has garnered numerous accolades and released countless bestsellers. Its influence extends far beyond its headquarters, shaping the literary landscape worldwide.</h4>
            </div>  
        </div>  
    ) 
}
export default Info