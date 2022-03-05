import React from 'react'

import img1 from '../../Assets/1-dot.png'
import img2 from '../../Assets/two-lights.png'
import img3 from '../../Assets/traffic-light.png'
import Events, { eventList1 } from './Events'
import Dates from '../../components/Dates'
import People from '../../components/people/People'
import './calendar2.css'
import Header from '../../components/head/Header'

const list1=[
    {date:'28',event:false},
    {date:'29',event:false},
    {date:'30',event:false},
    {date:'31',event:false},
    {date:'01',event:false},
    {date:'02',event:false},
    {date:'03',event:false},
]

const list2=[
    {date:'04',event:false},
    {date:'05',event:false},
    {date:'06',event:false},
    {date:'07',event:false},
    {date:'08',event:false},
    {date:'09',event:false},
    {date:'10',event:false}
]
const list3=[
    {date:'18',event:false},
    {date:'19',event:true,src:img1},
    {date:'20',event:false},
    {date:'21',event:true,src:img3},
    {date:'22',event:false},
    {date:'23',event:true,src:img2},
    {date:'24',event:false}
]
const list4=[
    {date:'25',event:false},
    {date:'26',event:false},
    {date:'27',event:true,src:img2},
    {date:'28',event:false},
    {date:'29',event:false},
    {date:'30',event:false},
    {date:'01',event:false}
]
const list5=[
    {date:'25',event:false},
    {date:'26',event:false},
    {date:'27',event:false},
    {date:'28',event:false},
    {date:'29',event:false},
    {date:'30',event:false},
    {date:'01',event:false}
]
const list6=[
    {date:'02',event:false},
    {date:'03',event:false},
    {date:'04',event:false},
    {date:'05',event:false},
    {date:'06',event:false},
    {date:'07',event:false},
    {date:'08',event:false}
]
const list7=[
    {date:'09',event:false},
    {date:'10',event:false},
    {date:'11',event:false},
    {date:'12',event:false},
    {date:'13',event:false},
    {date:'14',event:false},
    {date:'15',event:false}
]
const list8=[
    {date:'16',event:false},
    {date:'17',event:false},
    {date:'18',event:false},
    {date:'19',event:false},
    {date:'20',event:false},
    {date:'21',event:false},
    {date:'22',event:false}
]
const list9=[
    {date:'23',event:false},
    {date:'24',event:false},
    {date:'25',event:false},
    {date:'26',event:false},
    {date:'27',event:false},
    {date:'28',event:false},
    {date:'29',event:false}
]
export default function Calendar2() {
  return (
    <div className='cal-front'>
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
                
                <Dates dates={list1}/>
                <Dates dates={list2}/>
                <Dates dates={list3}/>
                <Dates dates={list4}/>
                <tr><td style={{position:'absolute',fontSize:'1.5rem',color:'white',top:'15.5rem'}}>October</td></tr>
                <tr><td><div style={{marginBottom:'3rem'}}></div></td></tr>
                <Dates dates={list5}/>
                <Dates dates={list6}/>
                <Dates dates={list7}/>
                <Dates dates={list8}/>
                <Dates dates={list9}/>
            </tbody>
        </table>
        <div className='ffs'>
            <div id='line'></div>
            <p>Upcoming Events ( 3 )</p>
            <People events={eventList1}/>
            <div id='circle2'></div>
            <div id='add2'>+</div>
        </div>
    </div>
  )
}
