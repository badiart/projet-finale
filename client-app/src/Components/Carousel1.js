import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement,} from 'mdb-react-ui-kit';
function Carousel1() {
  return (
    
<div style={{width:"100%",height:"500px",marginButtom:"50px",marginTop:"0px"}} >
<MDBCarousel showControls >
     <MDBCarouselInner>
       <MDBCarouselItem itemId={0}>
         <MDBCarouselElement style={{height:"500px"}}src='https://bloximages.newyork1.vip.townnews.com/unionleader.com/content/tncms/assets/v3/editorial/5/1b/51bfdbb0-7a12-50c4-b18f-be2dabf370c5/5f99c2fa374a5.image.jpg?resize=1396%2C1047' alt='leg' />
       </MDBCarouselItem>


       <MDBCarouselItem itemId={1}>
         <MDBCarouselElement style={{height:"500px"}} src='https://news.kuwaittimes.net/website/wp-content/uploads/2019/05/Ahmad-Sayed-Rahman-1.jpg' alt='leg1' />
       </MDBCarouselItem>


       <MDBCarouselItem itemId={2}>
         <MDBCarouselElement style={{height:"500px"}} src='https://www.deccanherald.com/sites/dh/files/article_images/2018/08/09/file71d57v41a2w8mu1p2ed1533762.jpg' alt='hair' />
       </MDBCarouselItem>
       <MDBCarouselItem itemId={3}>
         <MDBCarouselElement style={{height:"500px"}} src='https://www.sunrisemedical.fr/getmedia/27637654-cd69-4000-8746-cb364d5d5887/activites-pour-les-enfants-en-fauteuil-roulant-excursions-body.jpg' alt='chair' />
       </MDBCarouselItem>

    </MDBCarouselInner>
  </MDBCarousel>
  </div>

  )}
  export default Carousel1