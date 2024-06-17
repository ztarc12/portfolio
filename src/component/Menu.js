import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useNavigate  } from "react-router-dom"
import { useState } from 'react';

function Menu (props) {
  const navigate = useNavigate()
  return (
    <div className="menuBg">
      <ul>
        <li>소개</li>
        <li>스킬</li>
        <li>프로젝트</li>
        <li>연락</li>
      </ul>
      <div className='closeBtn'>
        <FontAwesomeIcon icon={faXmark} onClick={()=>{props.pageBack()}} />
      </div>
    </div>
  )
}

export default Menu