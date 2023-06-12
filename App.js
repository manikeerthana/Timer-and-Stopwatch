import React, { Fragment } from 'react'

import Stopwatch from "./Stopwatch"
import Timer from "./Timer"
import './App.css'
function Home() {
  return (
    <body>
    <div className='app'>
      <div className='heading'>
      <h2>Timer and Stopwatch </h2>
      </div>
     
      <Fragment>
<Timer/>
<Stopwatch/>
      </Fragment>
      
    </div>
    </body>
   
  )
}

export default Home

  
    
      