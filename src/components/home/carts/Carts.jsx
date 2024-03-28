import React from 'react';
import './carts.css'



function Carts() {
  return (
    <>
      <section className='carts'>
        <div>
          <h2>Your favoured appartments here:</h2>
          <h3>You haven`t added anything yet</h3>
          <img src="images/no_info.jpg" alt="" class="card-img"></img>
        </div>
      </section>
    </>
  );
}

export default Carts;