import React from 'react'
import './calendar.css'

import Dates from '../../components/Dates'
import img1 from '../../Assets/1-dot.png'
import img2 from '../../Assets/two-lights.png'
import img3 from '../../Assets/traffic-light.png'
import Events from './Events'
import Header from '../../components/head/Header'

const list=[
    {date:18,event:false,color:'white'},
    {date:19,event:true,color:'white',src:img1},
    {date:20,event:false,color:'white'},
    {date:21,event:true,color:'white',src:img3},
    {date:22,event:false,color:'white'},
    {date:23,event:true,color:'white',src:img2},
    {date:24,event:false,color:'white'}
]

function Calendar() {
  return (
    <div className='cal-front'>
    <div id='markInDate'>
      <div>Th</div>
      <div id='dd1'>21</div>
      <img src={img3} alt="dot" />
    </div>
        <Header/>
        <table className='d1-table'>
            <tbody>
                <tr>
                    <td id='day'>Mo</td>
                    <td id='day'>Tu</td>
                    <td id='day'>We</td>
                    <td id='day'>Th</td>
                    <td id='day'>Fr</td>
                    <td id='day'>Sa</td>
                    <td id='day'>Su</td>
                </tr>
                <Dates dates={list}/>
              </tbody>
          </table>
        
        <Events/>
    </div>
  )
}

export default Calendar