import React from 'react'
import "./Shop.css"
const Shop = () => {
    return (
        <div className="bodysho" style={{fontFamily:"cursive"}}>
        <h1 style={{fontFamily:"cursive",color:"black",fontSize:"70px"}}>This is our Shop</h1>
        <h3 style={{fontFamily:"cursive",color:"black"}}>Bik N3ich has invested a lot in its workshop where nothing is left to chance, ultra sophisticated equipment is made available to its technicians so that they work harmoniously with each other.</h3>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around" }}>
        <div   className='rect'>
        <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://www.ravel.fr/wp-content/uploads/2019/02/protheses.jpg" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>prothesis Shop</h3>
          <div>
          Most prosthetics are manufactured using conventional subtractive technologies.
          </div>
        </div>
      </div>
        </div>
        <div className='rect'>
        <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://howtosellremyandvirginhair.files.wordpress.com/2014/08/china-14.png" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Hair shop</h3>
          <div>
          Wigs are worn for either prosthetic, cosmetic, or convenience reasons.
          </div>
        </div>
      </div>
        </div>
        <div className='rect'> <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://media.sciencephoto.com/image/c0394029/800wm" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Wheelchair Shop</h3>
          <div>
          Durable Quality Metal Wheelchairs .and we provide more than 3000 wheel chair.
          </div>
        </div>
      </div></div>
        <div className='rect'><div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/17/974542-oxygen-concentrators-ani.jpg" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>Oxygene concentrator Shop</h3>
          <div>
            we  provides more than 2000 equipement in our shop 
          </div>
        </div>
      </div></div>

      
      </div>
      </div>
    )
}

export default Shop
