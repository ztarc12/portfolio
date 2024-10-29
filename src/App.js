import './App.css';
import { Routes, Route, useNavigate, useLocation  } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import botArrow from '/botArrow.png'

//component
import FirstPage from './component/FirstPage';
import Menu from './component/Menu'
// import Contents from './component/Contents';
import Info from './component/contents/about/About';
import ContentsData from './component/ContentsData';


//App
function App() {
  const location = useLocation()
  
  const [topMoveIcon, setTopMoveIcon] = useState(false)

  useEffect(()=>{
    const moveScroll =()=>{
      if(window.scrollY >= 150) {
        setTopMoveIcon(true)
      } else {
        setTopMoveIcon(false)
      }
    }
    window.addEventListener('scroll', moveScroll)
    return ()=>{
      window.removeEventListener('scroll', moveScroll)
    }
  },[])

  const topToScroll = ()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  }

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Menu/>
      {topMoveIcon && <Link to='/' onClick={()=>{topToScroll()}} className='topMoveBtn'/> }
      <FirstPage/>
        {
          ContentsData.map((content,i)=>{
            const Component = content.components
            if (Component === Info) {
              return (
                <Component key={i}/>
              )
            } else {
              return(
                  <Component key={i}/>
              )
            }
          })
        }
      <footer style={{padding: '2rem'}}>
        <p>© 2024. Lim Jae Ho. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
