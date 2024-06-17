import './App.css';
import { Routes, Route, useNavigate, useLocation  } from "react-router-dom"

//component
import Menu from './component/Menu'
import Contents from './component/Contents';

import { useEffect, useState } from 'react';


//App
function App() {
  
  const navigate = useNavigate()
  const location = useLocation()
  
  const [addHide, setAddHide] = useState(false);
  const [addShow, setAddShow] = useState(true);

  const menuMove = () => {
    navigate('/menu')
    setAddShow(false)
    setAddHide(true)
  }
  const pageBack = () => {
    if (location.pathname !== '/menu'){
      navigate(-1)
      setAddHide(false)
      setAddShow(true)
    }
    navigate(-1)
    setAddHide(false)
    setAddShow(true)
  }
  const homeClick = () => {
    navigate('/')
    setAddHide(false)
    setAddShow(true)
  }

  useEffect(()=>{
    if(location.pathname === '/info') {
      document.body.style.overflowX = 'hidden'
    } else {
      document.body.style.overflowX = 'auto'
    }
  }, [location.pathname])

  return (
    <div className="App">
      <nav className='mainNav'>
        <a onClick={()=>{menuMove()}}>메뉴1</a>
        <a onClick={()=>{homeClick()}}>홈(로고)</a>
        <a onClick={()=>{pageBack()}}>뒤로가기</a>
      </nav>
      <div className='section bg'>
        <div className={`mainTitle ${addHide ? 'hide' : 'show'}`}>
          <h1>PORTFOILO</h1>
          <h2>IN JAEHO.</h2>
        </div>
        <div className={`scroll ${addHide ? 'hide' : 'show'}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='section'>
        <Contents location={location} navigate={navigate}></Contents>
      </div>
      <Routes>
        <Route path='/menu' element={<Menu pageBack={pageBack}/>}/>
      </Routes>
    </div>
  );
}


export default App;
