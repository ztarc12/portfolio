import ContentsData from "../../ContentsData"

function Project(){
  return(
    <div className="section" id={ContentsData[2].href}>
      <div className='title'>
        <h2 className='contentTitle'>{ContentsData[2].title}</h2>
        <div className='contentBox aboutMe'>
          <a href="https://ztarc12.github.io/todoList/">투두리스트</a>
        </div>
      </div>
    </div>
  )
}

export default Project