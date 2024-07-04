import ContentsData from "../../ContentsData"

function Project(){
  return(
    <div className="section" id={ContentsData[2].href}>
      <div className='title'>
        <h2 className='contentTitle'>{ContentsData[2].title}</h2>
        <div className='contentBox aboutMe'>
        </div>
      </div>
    </div>
  )
}

export default Project