import './contents.css';
import ContentsData from './ContentsData';
import { Link, Routes, Route, useNavigate, useLocation  } from "react-router-dom"
import { useEffect, useState } from 'react';

function Contents({ContentData}) {
  // if(location.pathname === 'contents') {
  //   setAddHide(true)
  // }
  const navigate = useNavigate();
  const location = useLocation()
  const [addHide, setAddHide] = useState(false)
  const [addShow, setAddShow] = useState(true);
  
  
  //useEffect
  useEffect(()=>{
    if(location.pathname === '/') {
      setAddHide(false)
    }
  })
  useEffect(()=>{
    if(location.pathname === '/info') {
      window.scrollTo({
        top:0,
        // left:0,
        behavior:'auto'
      })
      setAddHide(true)
    }
  })
  return(
    <>
      <section className='ContentsArea'>
        <div>
          <h1 className={`contTitle ${addHide ? 'hide' : 'show'}`}>CONTENTS</h1>
        </div>
        <div className={`contents ${addHide ? 'hide' : 'show'}`}>
          {
            ContentsData.map((content,i)=>{
              return (
                <Card key={i} content={content} addHide={addHide} />
              )
            })
          }
        </div>
      </section>
      <Routes>
        {
          ContentsData.map((content,i)=>{
            const Component = content.components
            return (
              // <Route key={i} path={content.value} element={<CardInner content={content}/>}></Route>,
              // <Route key={i} path={content.value} element={<Info content={content}/>}></Route>
              <Route key={i} path={content.value} element={content.useCardInner ? <CardInner content={content}/> : <Component content={content}/>}></Route>
            )
          })
        }
      </Routes>
    </>
  )
}

function Card ({content, contentClick, addHide}) {
  return (
    // ${addHide ? 'show' : 'hide'}
    <>
      <Link to={content.value}>
        <div className={`cardBox`} onClick={()=>{contentClick(content.value)}}>
          {content.useIcon ? (
            <div className='contIcon'>
              <div>
                {content.id}
              </div>
              <div>
                {content.id}
              </div>
              <div>
                {content.id}
              </div>
              <div>
                {content.id}
              </div>
              <div>
                {content.id}
              </div>
            </div>
            ) : (
              <div className={`noContIcon ${content.className}`}>
                <img src={content.img}></img>
              </div>
            )
            
          }
          <h2>{content.title}</h2>
        </div>
      </Link>
    </>
  )
}

function CardInner({content}) {
  return (
    <>
      <div className='contentBg'>
        <div>
          <h1 className='contTitle'>
            {content.title}
          </h1>
        </div>
        <div className='contentBox'>
          <div>
            {content.id}
          </div>
          <div>
            {content.id}
          </div>
          <div>
            {content.id}
          </div>
          <div>
            {content.id}
          </div>
          <div>
            {content.id}
          </div>
        </div>
      </div>
    </>
  )
}
export default Contents