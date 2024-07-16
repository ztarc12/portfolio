import { useState } from "react"
import ContentsData from "../../ContentsData"
import './project.css'
import { ScrollAnimation } from'@lasbe/react-scroll-animation'
import projectData from "./projectData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Project(){

  return(
    <div className="section" id={ContentsData[2].href} style={{backgroundImage:`url(${process.env.PUBLIC_URL}/img/spaceBg.jpg)`}}>
      <div className='title projectArea'>
        <h2 className='contentTitle'>{ContentsData[2].title}</h2>
        <div className='contentBox projectBox'>
          {
            projectData.map((project, i)=>{
              return(
                <ScrollAnimation startingPoint="top" duration={project.id + 0.5} amount="sm" delay={0.5} repeat>
                  <div className="projectCard">
                    <div className="projectImg">
                      <img src={project.img}></img>
                    </div>
                    <div className="projectInfo">
                      <div>
                        <h2>{project.title}</h2>
                      </div>
                      <div className="projectSkill">
                        {
                          project.useSkill.map((skill)=>{
                            return(
                              <span>{skill}</span>
                            )
                          })
                        }
                      </div>
                      <div className="projectUrl">
                        <Link to={project.github}>
                          <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link to={project.url}>
                          <FontAwesomeIcon icon={faGlobe} />
                        </Link>
                      </div>
                      <div className="projectOverview">
                        <span>{project.overview}</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Project