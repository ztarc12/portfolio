import './about.css'
import ContentsData from '../../ContentsData';
import { useEffect } from 'react';

function Info() {
  return(
    <div className='title aboutArea' id={ContentsData[0].href}>
      <h2 className='contentTitle'>{ContentsData[0].title}</h2>
      <div className='aboutMe'>
        <div className='aboutImg' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/skyBg.jpg)`}}>
        </div>
        <div className='aboutInfo'>
          <div className='subTitle'>
            <h2>안녕하세요 새로운것에 도전하고 성장하는 임재호 입니다.</h2>
          </div>
          <div className='aboutTextBox'>
            <div className='aboutText'>
              <p>저는 열정과 끈기로 웹 디자인과 웹 개발에 도전하고 있는 신입 프론트엔드입니다. 사용자 경험을 직접 만들어가는 일에 큰 매력을 느끼며, 새로운 기술과 디자인 트렌드에 대한 열망으로 매일 성장하고 있습니다.</p>
              <p>비록 경험은 많지 않지만, 문제 해결에 대한 끈기와 배움에 대한 열정은 누구보다 강합니다. 기술적 도전과 창의적인 문제 해결을 통해 더 나은 사용자 경험을 제공하기 위해 노력하고 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info