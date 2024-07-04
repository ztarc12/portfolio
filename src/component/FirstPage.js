import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"

function FirstPage(){
  const [showSubText, setShowSubText] = useState(false)
  useEffect(()=>{
    const times = setTimeout(()=>{
      setShowSubText(true)
    },1800)
    return ()=> clearTimeout(times)
  })

  return(
    <div className='section bg' id="home">
      <div className='mainTitle'>
        <h1>
          <Typewriter
            words={['PORTFOLIO']}
            loop={1}
            cursor={false}
            // cursorStyle='_'
            typeSpeed={140}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
        {
          showSubText && (
            <h2>
              <Typewriter
                words={['IN JAEHO.']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          )
        }
      </div>
      <div className='scroll'>
        <img src={process.env.PUBLIC_URL + '/botArrow.png'} className='arrowTop'></img>
        <img src={process.env.PUBLIC_URL + '/botArrow.png'} className='arrowBot'></img>
      </div>
    </div>
  )
}

export default FirstPage