import './menu.css';
import ContentsData from './ContentsData';
import { Link } from 'react-router-dom';


function Menu () {
  return (
    <nav className='mainNav'>
      <ul className='menuList'>
        {
          ContentsData.map((content,i)=>{
            return(
              <MenuList key={i} content={content}/>
            )
          })
        }
      </ul>
    </nav>
  )
}

function MenuList({content}){
  return(
      <li>
        <Link to={`#${content.href}`}>{content.title}</Link>
      </li>
  )
}

export default Menu