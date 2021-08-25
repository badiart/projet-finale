import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vex5y2m', 'template_qoxt1qa', e.target, 'user_zDi0sMUteyzxrmPBzFOiH')
      .then((result) => {
          console.log(result.text);
          alert('your email is sent successfully');
      }, (error) => {
          console.log(error.text);
          alert('Oops... ' + JSON.stringify(error));
      });
      e.target.reset()
  }
    return (
       <div className="bodyco"  >              
 <div className="container-fluid px-1 py-5 mx-auto">
  <div className="row d-flex justify-content-center">
    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
     
     
      <div className="cardco">
        <h5 className="text-center mb-4" style={{fontFamily:"cursive",fontSize:"70px"}}>Contact us</h5>
        <form className="form-card" onSubmit={sendEmail}>
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
               <label className="form-control-label px-3" style={{fontSize:"20px"}}>First name<span className="text-danger"> *</span></label>
                <input type="text" id="fname" name="firstname" placeholder="Enter your first name" onblur="validate(1)" /> </div>
            <div className="form-group col-sm-6 flex-column d-flex">
               <label className="form-control-label px-3"style={{fontSize:"20px"}} >Last name<span className="text-danger"> *</span></label>
                <input type="text" id="lname" name="lastname" placeholder="Enter your last name" onblur="validate(2)" /> </div>
          </div>
          <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex">
               <label className="form-control-label px-3"style={{fontSize:"20px"}} > Email<span className="text-danger"> *</span></label>
                <input type="text" id="email" name="email" placeholder="name@gmail.com" onblur="validate(3)" /> </div>
            <div className="form-group col-sm-6 flex-column d-flex"> 
            <label className="form-control-label px-3" style={{fontSize:"20px"}} >Phone number<span className="text-danger"> *</span></label> 
            <input type="text" id="mob" name="phonenumber" placeholder="12345678" onblur="validate(4)" /> </div>
            <div className="form-group col-sm-6 flex-column d-flex">
               <label className="form-control-label px-3"style={{fontSize:"20px"}}>subject<span className="text-danger"> *</span></label> 
            <input type="text" id="mob" name="subject" placeholder="write here the subject of your message" onblur="validate(5)" /> </div>

          </div>
        
          <div className="row justify-content-between text-left">
            <div className="form-group col-12 flex-column d-flex"> 
            <label className="form-control-label px-3" style={{fontSize:"20px"}}>message<span className="text-danger"> *</span></label> 
            <input type="text" id="ans" name="message" placeholder="write your message here" onblur="validate(6)" /> </div>
          </div>
          <div className="row justify-content-end">
            <div className="form-group col-sm-6"> 
            <button type="submit" className="btn-block btn-primary" style={{fontSize:"20px"}}>Send</button> </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

</div>

    )
}

export default Contact
