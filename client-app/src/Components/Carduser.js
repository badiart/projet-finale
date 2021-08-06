import React from 'react'

function Carduser() {
    return (
        <div>
           <div className="container">
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image"> 
      {user? 
        <img src={user.imge} alt="profile one"  />:null}
      </div>
      <ul className="social-icons">
        <li>
          <a href>
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-dibbble" />
          </a>
        </li>
      </ul>
      <div className="details"> {user?
        <h2>{user.name}</h2> :null}
          <br />
          <span className="job-title">{user?
          <h2>{user.email}</h2>:null}</span>

      </div>
    </div>
  </div>{/* end box wrapper */} 
  
</div>{/* END container */} 
        </div>
    )
}

export default Carduser
