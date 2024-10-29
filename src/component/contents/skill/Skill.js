import './skill.css'
import styled from 'styled-components'


import ContentsData from "../../ContentsData.js"
import SkillData from "./SkillData.js"
import { useEffect } from 'react'
import { ScrollAnimation } from '@lasbe/react-scroll-animation'

const AbilityBar = styled.div`
  width: ${props => props.ability}%
`;

function Skill() {
  useEffect(()=>{
    const gauge = document.querySelectorAll('.percentFront')
    gauge.forEach((bar)=>{
      const width = bar.getAttribute('data-width')
      bar.style.width = `${width}`
    })
  }, [SkillData])
  return(
    <div className='section ' id={ContentsData[1].href} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/skillBg2.jpg)`}}>
      <div className='title skillArea'>
        <h2 className='contentTitle skillTitle'>{ContentsData[1].title}</h2>
        <div className='contentBox aboutMe'>
          <div className='skillBox'>
            <ul>
              {
                SkillData.map((cont,i)=>{
                  return (
                    <ScrollAnimation startingPoint='bottom' duration={1} amount='sm' delay={0.5} repeat>
                      <li key={i}>
                        <div className='abilityTitle'>
                          <p>{cont.title}</p>
                        </div>
                        <div className='percentBar'>
                          <AbilityBar ability={cont.ability}>
                            <div className='abilityPercent'>
                              <span className="percentFront">
                                {cont.ability}%
                              </span>
                            </div>
                          </AbilityBar>
                        </div>
                      </li>
                    </ScrollAnimation>
                  )
                })
              }
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill