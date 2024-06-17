import './info.css'
import InfoData from './InfoData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays, faLocationDot, faPhone, faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Info({ content }) {
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname === '/info') {
      document.body.style.overflowX = 'hidden'
    } else {
      document.body.style.overflowX = 'auto'
    }
  }, [location.pathname])
  return(
    <div className='about'>
      <h2 className='contentTitle'>{content.title}</h2>
      <div>
        <div className='aboutBox box'>
          {
            InfoData.map((content,i)=>{
              return(
                <AboutMe key={i} content={content}/>
              )
            })
          }
        </div>
      </div>
      <div>
        <div className='aboutBox box'>
          {
            InfoData.map((content,i)=>{
              return(
                <AboutMe key={i} content={content}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
function AboutMe({content}){
  return(
    <>
      <div className='box1'>
        <div className='aboutTitleIcon'>
          <FontAwesomeIcon icon={content.image} />
        </div>
        <div>
          <h3>{content.title}</h3>
          <p>{content.value}</p>
        </div>
      </div>
    </>
  )
}
export default Info