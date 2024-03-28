import React from "react"
const RecentCard = () => {
    const handleSeeMore = () => {
        const url = "/Info"; 
        window.location.href = url; 
      };
    return (
        <>
            <section class="slider">
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-1.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">House</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.5</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$21650.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See more</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-2.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">House</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$45550.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See more</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-3.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">House</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.6</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$12750.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See More</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-4.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">House</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.7</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$871000.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See More</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-5.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">House</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.5</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$32450.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See More</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-6.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">Home</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.4</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$32350.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See More</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-7.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">Home</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.5</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$95250.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See More</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="images/home-8.jpg" alt="" class="card-img"></img>
                            <h1 class="card-title">Home</h1>
                            <div class="card-body">
                                <div class="card-star">
                                    <span class="rating-value">4.4</span>
                                    <span class="star">&#9733;</span>
                                </div>
                                <p class="card-price">$54150.99</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-success" onClick={handleSeeMore}>See More</button>
                                <button class="btn btn-border">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}
export default RecentCard
