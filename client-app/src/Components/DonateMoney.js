import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import './DonateMoney.css';
import { useSelector } from 'react-redux';
const DonateMoney = () => {
const user = useSelector(state => state.userReducer.user)
  const [s, sets] = useState(0) 
   return (
    <div className="body5" >
      <h1 style={{fontFamily:"cursive",color:"red",fontSize:"70px"}}>Donate to Bik N3ich</h1>
      <div> <button style={{ margin: "5px" ,fontSize:"20px"}} className="button" >One off</button>
        <button style={{ margin: "5px" ,fontSize:"20px"}} className="button">Monthly</button>
      </div>
      <h3>£10 a month over a year will get five prosthetic legs sent to a hospital in Africa</h3>
      
      <div>
        <button   name="a" style={{ margin: "5px",fontSize:"20px" }} className="but" value="10" onClick={()=>user?sets(s+10):null} >10$</button>
        <button name="b"style={{ margin: "5px",fontSize:"20px" }} className="but"  value="20" onClick={()=>user?sets(s+20):null} >20$</button>
        <button name="c" style={{ margin: "5px",fontSize:"20px" }} className="but" value="50"  onClick={()=>user?sets(s+30):null} >50$</button>
        <button style={{ margin: "5px" ,fontSize:"20px"}} className="but"  >{s}</button>
       <button   style={{ margin: "5px",backgroundColor:"red" ,fontSize:"20px"}} className="but"  onClick={()=>(user&& user.isAdmin)?sets(0):null}>Reset</button>
      </div>



      <div>
      
        {/* <img src="http://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png" alt="visa"/> */}
        <img width="900" height="200" src="https://2dg0ni47m8fy2s08oo1k05mn-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/Online-Payment-gateway.png" alt="visa" />
      </div>

      <h4>your donation is secure</h4>
      <h1>Your details</h1>

      <div>
  <title>W3.CSS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <form action="/action_page.php" className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
    <h2 className="w3-center">Contact Us</h2>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{width: '50px'}}><i className="w3-xxlarge fa fa-user" /></div>
      <div className="w3-rest">
        <input className="w3-input w3-border"  name="first" type="text" placeholder="First Name" />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{width: '50px'}}><i className="w3-xxlarge fa fa-user" /></div>
      <div className="w3-rest">
        <input className="w3-input w3-border" name="last" type="text" placeholder="Last Name" />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{width: '50px'}}><i className="w3-xxlarge fa fa-envelope-o" /></div>
      <div className="w3-rest">
        <input className="w3-input w3-border" name="email" type="text" placeholder="Email" />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{width: '50px'}}><i className="w3-xxlarge fa fa-phone" /></div>
      <div className="w3-rest">
        <input className="w3-input w3-border" name="phone" type="text" placeholder="Phone" />
      </div>
    </div>
    <div className="w3-row w3-section">
      <div className="w3-col" style={{width: '50px'}}><i className="w3-xxlarge fa fa-pencil" /></div>
      <div className="w3-rest">
        <input className="w3-input w3-border" name="message" type="text" placeholder="Message" />
      </div>
    </div>
    <button className="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">Send</button>
  </form>
</div>

<h1>your payment details</h1>
    
<div className="bodypay" >
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="container">
    <div className="row"style={{justifyContent:"center" ,width:"100%"}}>
      <div className="col-xs-12 col-md-4" >
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Payment Details
            </h3>
            <div className="checkbox pull-right">
              <label>
                <input type="checkbox" />
                Remember
              </label>
            </div>
          </div>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label htmlFor="cardNumber">
                  CARD NUMBER</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required autofocus />
                  <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-7 col-md-7">
                  <div className="form-group">
                    <label htmlFor="expityMonth">
                      EXPIRY DATE</label>
                    <div className="col-xs-6 col-lg-6 pl-ziro">
                      <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                    </div>
                    <div className="col-xs-6 col-lg-6 pl-ziro">
                      <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                  </div>
                </div>
                <div className="col-xs-5 col-md-5 pull-right">
                  <div className="form-group">
                    <label htmlFor="cvCode">
                      CV CODE</label>
                    <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ul className="nav nav-pills nav-stacked">
          <li className="active"><a href="#"><span className="badge pull-right"><span className="glyphicon glyphicon-usd" />4200</span> Final Payment</a>
          </li>
        </ul>
        <br />
        <a href="http://www.jquery2dotnet.com"  className="btn btn-success btn-lg btn-block" role="button">Pay</a>
      </div>
    </div>
  </div>
</div>
<h1 style={{marginBottom:"20px" ,fontFamily:"cursive",color:"red"}}>If you are having difficulty using this form call us on +44 (0)117 325 8114

</h1>
      </div>

 
  )
}

export default DonateMoney
