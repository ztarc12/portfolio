import { useState } from "react"
import ContentsData from "../../ContentsData"
import './project.css'

import projectData from "./projectData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Project(){
  console.log(projectData[3].useSkill)
  const [slideIndex, setSlideIndex] = useState(0)
  const totalSlides = projectData.length

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }
  return(
    <div className="section" id={ContentsData[2].href}>
      <div className='title projectArea'>
        <h2 className='contentTitle'>{ContentsData[2].title}</h2>
        <div className='contentBox projectBox'>
          <div className="slideContainer">
            <div className="slideWrapper" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
              {
                projectData.map((project)=>{
                  return(
                    <div className="projectCont">
                      <div className="projectImg">
                        <img src={project.img}></img>
                      </div>
                      <div className="projectInnerInfo">
                        <div>
                          <h3 className="projectTitle">
                            {project.title}
                          </h3>
                        </div>
                        <div className="useSkill">
                          {
                            project.useSkill.map((skill, i)=>{
                              return(
                                <span key={i}>{skill}</span>
                              )
                            })
                          }
                        </div>
                        <div className="projectUrl">
                          <Link to={project.github}>GitHub</Link>
                          <Link to={project.url}>Demo</Link>
                        </div>
                        <div>{project.overview}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <button className="prevBtn" onClick={()=>{prevSlide()}}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="nextBtn" onClick={()=>{nextSlide()}}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Project