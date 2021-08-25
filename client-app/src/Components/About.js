import React from 'react'
import { Navbar } from 'react-bootstrap'
import "./About.css"
import Footer from './Footer'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
const About = () => {
  return (

    <div >
      <div>
        <div>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          {/* about */}

          {/* end about */}
          <div className="content">
            {/* card */}
            <div className="cont">
              <div className="cardd">

                <div class="card">

                  <div class="icon" ><i ><CheckCircleIcon  /></i></div>
                  
                  <p class="title" >Mission</p>
                  <p class="text" style={{marginTop:"5px",fontSize:"20px"}}> The provision of prosthetic devices and rehabilitation.</p>

                </div>
              </div>
              <div className="cardd">

                <div class="card">

                  <div class="icon"><i ><VisibilityIcon /></i></div>
                  <p class="title" style={{fontSize:"18px"}}>vision</p>
                  <p class="text" style={{fontSize:"18px"}}>We believe that persons have the right to change their life 

</p>

                </div>
              </div>
              <div className="cardd">
                <div class="card">

                  <div class="icon"><i ><EmojiObjectsIcon/></i></div>
                  <p class="title"style={{fontSize:"18px"}}>value</p>
                  <p class="text" style={{fontSize:"18px"}}>We must create a positive impact on the future generation</p>

                </div>

              </div>
            </div>
            {/* end card */}
          </div>
        </div>

      </div>


<div> <h1 style={{
            fontFamily: "Dancing Script ,cursive",
            fontSize: "80px",
            marginTop:"70px",
            color: "#ff6d6d",
            textShadow: "1px 1px 1px #333",
          }}>Our Team member</h1></div>
     
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <div className="content">

          <div className="cont"style={{marginBottom:"50px"}}>
            <div className="cardd" >
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>Hana</h2>
        <img src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg" alt="" />
        <p className="card-desc" style={{fontSize:"18px"}}>Vice President:she is 27years old .she works as a fullStack developper in a company</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title" style={{fontSize:"30px"}}>Adam</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynBryvKzWaR8tUKSYDGuCmuY8adeV_NVyy5UFqNDdKnj8H24gozWr75-q0I6pqSTFYvg&usqp=CAU" alt="" />
        <p className="card-desc"style={{fontSize:"18px"}}>President:he is 30years old .he works as a software engineer in a multinational campany</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>Jennifer</h2>
        <img src="https://jsdufour.ca/wp-content/uploads/2018/01/team-member-02-270x350.jpg" alt="" />
        <p className="card-desc" style={{fontSize:"18px"}}>tresorier:The treasurer is in charge of the organization's finances.</p>
      </div>
            </div>
          </div>
        </div>
{/* second team member */}
<div className="content">
          <div className="cont" style={{marginBottom:"50px"}}>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>Alix Kubik</h2>
        <img src="https://obukiko.com/wp-content/uploads/2017/06/team-member-02-1.jpg" alt="" />
        <p className="card-desc" style={{fontSize:"18px"}}>wheel chair CO-ORDINATOR :Alix Kubik is our wheelchair coordinator. She makes efforts to match up available wheelchairs with those who need them. She is a graduate of Grand Valley State University in Grand Rapids, Michigan with a Masters Degree in Social Work.</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>John</h2>
        <img src="https://trustjuris.com/wp-content/uploads/2019/05/Team-memeber-01-1.png" alt="" />
        <p className="card-desc">COMMUNITY SUPPORT OFFICER (TOUR MANAGER):he is a medecial delegate Also known as medical sales representatives or pharmaceutical sales representatives, Medical representatives sell and promote companies' medications</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>Emey</h2>
        <img src="https://www.cartlyfts.com/wp-content/uploads/2019/08/team-member-01.jpg" alt="" />
        <p className="card-desc">LITTLE LEGS PROJECT CO-ORDINATOR :she  plan, manage and develop our projects.</p>
      </div>
            </div>
          </div>
        </div>

{/* end */}
{/* third part */}
<div className="content">

          <div className="cont" style={{marginBottom:"50px"}}>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>yara</h2>
        <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm7.jpg" alt="" />
        <p className="card-desc" style={{fontSize:"18px"}}>oxygene concentrator CO-ORDINATOR :she is responsible for the management of store of this devices </p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>Sam</h2>
        <img src="https://profile-images.xing.com/images/5b5ba7032689ba5a57eb7b2f7bf27cb1-3/timo-a-wollny.256x256.jpg" alt="" />
        <p className="card-desc"style={{fontSize:"18px"}}>Hair wigs supervisor: In this role he provides recommendations for hair care, maintenance, and assist with hair preparations for wigs for all cast members  </p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title"style={{fontSize:"30px"}}>lover</h2>
        <img src="https://diviteamplugin.divi-professional.com/wp-content/uploads/2017/08/team10.jpg" alt="" />
        <p className="card-desc" style={{fontSize:"18px"}}> general secretary: the Secretary is responsible for: Ensuring meetings are effectively organised and minuted. Maintaining effective records and administration</p>
      </div>
            </div>
          </div>
        </div>

{/* end */}
<div>
         <img  style={{width:"100%",height:"500px",marginTop:"200px"}} src="https://smileconciergerie.fr/img/cms/collective.jpg" alt="Trulli" style={{ width: '100%' }} />
         <h1 style={{
            fontFamily: "Dancing Script ,cursive",
            fontSize: "70px",
            marginTop:"-300px",
        justifyContent:"center",
            color: "#ff6d6d",
            textShadow: "1px 1px 1px #333",
          }}> {" "}
    This is our team
          <br />& <br /> We love what we do{" "}</h1>
         </div>
  
    </div>

      )
}

      export default About
