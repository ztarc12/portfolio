import './connect.css'

import InfoData from '../about/InfoData'
import ConnectData from './ConnectData';
import ContentsData from '../../ContentsData';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Connect() {
  return (
    <div className='section connect' id={ContentsData[3].href}>
      <div className='title'>
        <h2 className='contentTitle'>{ContentsData[3].title}</h2>
        <div className='contentBox'>
          <div className='connectInner'>
            {
              ConnectData.map((content,i)=> {
                return (
                  <ConectCont key={i} content={content}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}


function ConectCont({content}){
  return(
    <>
      <div className='connectCont'>
        <div className='connectIcon'>
          <FontAwesomeIcon icon={content.image} />
        </div>
        <div className='connectValue'>
          {content.title === '연락처' ? (
            <a href={`tel:${content.value}`} className='active'>{content.value}</a>
          ) : content.title === '이메일' ? (
            <a href={`mailto:${content.value}`} className='active'>{content.value}</a>
          ) : <a href={content.url} className='active'>{content.value}</a>}
        </div>
      </div>
    </>
  )
}

export default Connect