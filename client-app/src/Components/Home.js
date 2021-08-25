import React from 'react'
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from "./Carousel1"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import "./Home.css";
import {getuser} from "../JS/actions/user"
import {useDispatch}  from "react-redux"
const Home = () => {
const dispatch = useDispatch()
const user = useSelector(state => state.userReducer.user)

const [count, setcount] = useState(0)
const [count1, setcount1] = useState(0)
const [count2, setcount2] = useState(0)
const [count3, setcount3] = useState(0)
  return (
    <div >
      <div>
        <Carousel1 />
      </div>
      <div >
        <h1 style={{ fontFamily: "cursive",color:"#1f487e",marginTop:"50px" }}> Help Us to Provide Better Care for Them  </h1>
        <p style={{fontFamily:"cursive", fontSize:"20px",marginLeft:"30px",marginRight:"50px"}}>This Medical Donations Program has distributed over 3,000 shipments with a total
          value of more than $4 billion worth
          of medicines and medical supplies in 88 countries over the last ten years.</p>

          <p style={{ fontFamily:"cursive",fontSize:"20px",marginLeft:"30px",marginRight:"50px"}}>In partnership with leading pharmaceutical companies and trusted local partners on
          the ground, we are delivering medicine free-of-charge to the most vulnerable
          people in the world.</p>
        <h2 style={{ fontFamily: "cursive",color:"#1f487e"  }}>Why choose us</h2>
        <p  style={{fontFamily:"cursive",fontSize:"20px"}}> We offer the best technology equipment, orthopedic support,
          in functional rehabilitation equipment, in workshop and sports equipment.</p>
        <h2 style={{ fontFamily: "cursive" ,color:"#1f487e" ,marginBottom:"50px"}}>We provide 4 categories of donation</h2>
      </div>


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginBlock: "20px" ,marginBottom:"100px"}} >
        <div style={{ height: "500px", width: "300px" }}>
          <div className="card-image" style={{width:"100%"}} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJwmyBabJzflf6LsRp6CnWEI5KWv3JBszqQ&usqp=CAU" />
          </div>
          <a className="aa" className="card-action" onClick={()=>user?setcount(count+1):null} ><i className="fa fa-heart" /></a>
          <div className="card-heading">
            Prothesis
          </div>
          <div className="card-text"   style={{color:"black",fontSize:"15px"}}>
            Your donation provides The Prosthetic Foundation with funding to restore life, hope and independence for amputees
            The periority is always for social cases.
          </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
            1150 beneficent
          </div>
          <div style={{display:"flex",flexDirection:"row"}}><div style={{marginLeft:"120px",marginTop:"-3px",height:"40px",width:"0px"}}className="icon"><FavoriteIcon/></div><h3 style={{marginRight:"150px"}} >{count}</h3></div>
          <a className="aa" href="#" className="card-button"> <a style={{color:"white",fontSize:"20px",marginLeft:"100px"}} href="http://prosthetichope.org/projects/pocc/">See more</a></a>
        </div>

        <div style={{ height: "500px", width: "300px" }}>
          <div className="card-image">
            <img src="https://www.pe.com/wp-content/uploads/migration/n1w/n1wkhc-ledewhair0322b3gj10e808binary507803.jpg?w=620" />
          </div>
          <a className="aa" className="card-action" onClick={()=>user?setcount1(count1+1):null}><i className="fa fa-heart" /></a>
          <div className="card-heading">
            Hair donation
          </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
            you can donate real hair wigs to young people with illness. We always need more hair to make our wigs and greatfully receive donations.            </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
          4523 beneficent
          </div>
          <div style={{display:"flex",flexDirection:"row"}}><div style={{marginLeft:"120px",marginTop:"-3px",height:"40px",width:"0px"}}className="icon"><FavoriteIcon/></div><h3 style={{marginRight:"150px"}} >{count1}</h3></div>

          <a className="aa" href="#" className="card-button"><a style={{color:"white",fontSize:"20px",marginLeft:"100px"}} href="https://www.littleprincesses.org.uk/donate-hair">See more</a></a>
        </div>







        <div style={{ height: "500px", width: "300px" }}>
          <div className="card-image">
            <img src="https://www.freewheelchairmission.org/wp-content/uploads/2017/10/wheelchair-gen2-girl.jpg" />
          </div>
          <a className="aa" className="card-action"  onClick={()=>user?setcount2(count2+1):null} ><i className="fa fa-heart" /></a>
          <div className="card-heading">
            Wheelchair
          </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
        Every wheelchair donated is the opportunity for someone to experience the love and hope of others.there is a chance to donate your wheelchair
             </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
          1478 beneficent

          </div>
          <div style={{display:"flex",flexDirection:"row"}}><div style={{marginLeft:"120px",marginTop:"-3px",height:"40px",width:"0px"}}className="icon"><FavoriteIcon/></div><h3 style={{marginRight:"150px"}} >{count2}</h3></div>

          <a className="aa" href="#" className="card-button"><a style={{color:"white",fontSize:"20px",marginLeft:"100px"}} href="https://www.littleprincesses.org.uk/donate-hairhttps://www.joniandfriends.org/support-us/donate-a-wheelchair/">See more</a></a>
        </div>
        <div style={{ height: "500px", width: "300px" }}>
          <div className="card-image" >
            <img src="https://www.verywellhealth.com/thmb/wHesqT7fVclSXvY0EXp7kXLgDXs=/1333x1000/smart/filters:no_upscale()/VW-Health-v1-The-8-Best-Portable-Oxygen-Concentrators-of-2021-primary-b235947853f24871a6f0c94534ca78ad.jpg" />
          </div>
          <a className="aa" className="card-action" onClick={()=>user?setcount3(count3+1):null} ><i className="fa fa-heart" /></a>
          <div className="card-heading">
            Oxygen concentrator
          </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
            People Foundation wants to raise funds for Mission Oxygen- Helping Hospitals Save Lives.the corona has increased the demand on this equipment
          </div>
          <div className="card-text" style={{color:"black",fontSize:"15px"}}>
          2547 beneficent

          </div>
          <div style={{display:"flex",flexDirection:"row"}}><div style={{marginLeft:"120px",marginTop:"-3px",height:"40px",width:"0px"}}className="icon"><FavoriteIcon/></div><h3 style={{marginRight:"150px"}} >{count3}</h3></div>

          <a className="aa" href="#" className="card-button"> <a style={{color:"white",fontSize:"20px",marginLeft:"100px"}} href="https://www.bapscharities.org/uganda/news/covid-19-pandemic-oxygen-concentrator-donations-to-india-from-africa-may-2021-2/">See more</a></a>
        </div>

      </div>

     
    

    <iframe width="80%" height="600px" marginTop="400px" src="https://www.youtube.com/embed/EMCJMX0O_DE?autoplay=1&mute=1">
</iframe>

      <div>{/* Page Content */}
        <div >
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0" style={{
            fontFamily: "Dancing Script ,cursive",
            fontSize: "70px",
            marginTop: "-280px",
            color: "#1f487e",
            textShadow: "1px 1px 1px #333",
            justifyContent: "center",
            marginLeft: "300"
          }}>OUR realisation</h1>
          <hr className="mt-2 mb-5"/>
          <div className="row text-center text-lg-start" style={{marginRight:"20px",marginLeft:"15px"}}>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://media.ottobock.com/_web-site/prosthetics/infos-for-amputees/images/2076305-169-col_2752989_16_9_teaser_onecolumn_retina.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img  style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://www.littleprincesses.org.uk/images/SupporterGallery/MF8CRmtkggfAmpl.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img  style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://www.wigsforkids.org/wp-content/uploads/2016/09/Riley%201.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://i.pinimg.com/originals/d0/42/2d/d0422dd18d2f7a6663716e5d6b76918b.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img  style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://i.cbc.ca/1.4961210.1546040939!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cindy-yip.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img  style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://images.squarespace-cdn.com/content/v1/57aa3d8f59cc6881bc266faa/1533598320338-SMECF0VSHAD1WQ5VT0S6/IMG_8541.JPG?format=1500w" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://www.theiredefoundation.org/wp-content/uploads/2019/06/190502_Beula-@-10_0604.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img  style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://thumbs.dreamstime.com/b/disabled-people-wheelchairs-have-fun-park-young-man-woman-wheelchair-relaxing-summer-recovery-healthcare-concepts-128398808.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img  style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://www.jeune-independant.net/wp-content/uploads/2021/01/la-Journee-internationale.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://www3.paho.org/sites/default/files/styles/flexslider_full/public/2020-10/paho-belize-donation-covid19_1.jpg?h=790be497&itok=Z-FirujM" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/05/972568-oxygen-concentrators-ani.jpg" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className="d-block mb-4 h-100">
                <img style={{width:"400px",height:"400px"}} className="img-fluid img-thumbnail" src="https://www.outbackteambuilding.com/wp-content/uploads/2020/02/wheelchairs-for-charity-team-building-hero.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div marginLeft="300" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }} >
        <img width="400" height="200" src="https://logo-marque.com/wp-content/uploads/2020/11/UNICEF-Logo-1985-2003.png" alt="partenaire" />
        <img width="400" height="200" src="https://image.pitchbook.com/wvMiGxI5AbuS1BEUzlZ6MLk6clW1621327461408_200x200" alt="partenaire" />
        <img width="400" height="200" src="https://ema-germany.org/wp-content/uploads/2017/02/case-study-partner-1.png" alt="hello" />
      </div>
    </div>

  )
}

export default Home
