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
                  <p class="text" style={{marginTop:"5px"}}> The provision of prosthetic devices and rehabilitation.</p>

                </div>
              </div>
              <div className="cardd">

                <div class="card">

                  <div class="icon"><i ><VisibilityIcon /></i></div>
                  <p class="title">vision</p>
                  <p class="text">We believe that all amputees should have access to a prosthetic leg

</p>

                </div>
              </div>
              <div className="cardd">
                <div class="card">

                  <div class="icon"><i ><EmojiObjectsIcon/></i></div>
                  <p class="title">value</p>
                  <p class="text">Click to see or edit your profile page.</p>

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
            color: "#7078a2",
            textShadow: "1px 1px 1px #333",
          }}>Our Team member</h1></div>
     
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <div className="content">

          <div className="cont"style={{marginBottom:"50px"}}>
            <div className="cardd" >
            <div className="card">
        <h2 className="card-title">Hana</h2>
        <img src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm9.jpg" alt="" />
        <p className="card-desc">FOUNDER (LEAD SINGER).</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">Adam</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynBryvKzWaR8tUKSYDGuCmuY8adeV_NVyy5UFqNDdKnj8H24gozWr75-q0I6pqSTFYvg&usqp=CAU" alt="" />
        <p className="card-desc">DIRECTOR (LEAD GUITAR).</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">Jennifer</h2>
        <img src="https://jsdufour.ca/wp-content/uploads/2018/01/team-member-02-270x350.jpg" alt="" />
        <p className="card-desc">FUNDRAISING AND WORDS MANAGER (PERCUSSION AND LYRICIST).</p>
      </div>
            </div>
          </div>
        </div>
{/* second team member */}
<div className="content">
          <div className="cont" style={{marginBottom:"50px"}}>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">Alix Kubik</h2>
        <img src="https://obukiko.com/wp-content/uploads/2017/06/team-member-02-1.jpg" alt="" />
        <p className="card-desc">SUPPORT GROUP CO-ORDINATOR :Alix Kubik is our wheelchair coordinator. She will make every effort to match up available wheelchairs with those who need them. She is a graduate of Grand Valley State University in Grand Rapids, Michigan with a Masters Degree in Social Work.</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">John</h2>
        <img src="https://trustjuris.com/wp-content/uploads/2019/05/Team-memeber-01-1.png" alt="" />
        <p className="card-desc">COMMUNITY SUPPORT OFFICER (TOUR MANAGER)</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">Emey</h2>
        <img src="https://5g-drive.eu/wp-content/uploads/2017/07/team-single-1.png" alt="" />
        <p className="card-desc">LITTLE LEGS PROJECT CO-ORDINATOR (SAXOPHONE AND WOODWINDS)</p>
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
        <h2 className="card-title">yara</h2>
        <img src="http://www.team.gsamdani.com/wp-content/uploads/2016/05/tm7.jpg" alt="" />
        <p className="card-desc">CANADIAN LEG CO-ORDINATOR (HARMONICA)</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">Sam</h2>
        <img src="https://profile-images.xing.com/images/5b5ba7032689ba5a57eb7b2f7bf27cb1-3/timo-a-wollny.256x256.jpg" alt="" />
        <p className="card-desc">DELIVERY AND PARTNER EXPERT (BAGPIPES)</p>
      </div>
            </div>
            <div className="cardd">
            <div className="card">
        <h2 className="card-title">lover</h2>
        <img src="https://diviteamplugin.divi-professional.com/wp-content/uploads/2017/08/team10.jpg" alt="" />
        <p className="card-desc">CALLUM - AUSTRALIAN LEG CO-ORDINATOR (KANGAROO)</p>
      </div>
            </div>
          </div>
        </div>

{/* end */}
       
         <img  style={{width:"100%",height:"500px",marginTop:"200px"}}src="https://static.novaescolademarketing.com.br/wp-content/uploads/2015/03/01153743/equipeouagencia-2-740x247.png" alt="Trulli" style={{ width: '100%' }} />
<div><h1 style={{
            fontFamily: "Dancing Script ,cursive",
            fontSize: "31px",
            marginTop:"-280px",
            color: "blue",
            textShadow: "1px 1px 1px #333",
          }}> {" "}
         This is our Team
          <br />& <br /> Team{" "}</h1></div>

  
    </div>

      )
}

      export default About
