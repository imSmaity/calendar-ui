import React from 'react'

import img1 from '../../Assets/1-dot.png'
import img2 from '../../Assets/two-lights.png'
import img3 from '../../Assets/traffic-light.png'
import { eventList1 } from './Events'
import Dates from '../../components/Dates'
import People from '../../components/people/People'
import './calendar2.css'
import Header from '../../components/head/Header'

const list1=[
    {date:'28',event:false,color:'gray'},
    {date:'29',event:false,color:'gray'},
    {date:'30',event:false,color:'gray'},
    {date:'31',event:false,color:'gray'},
    {date:'01',event:false,color:'white'},
    {date:'02',event:false,color:'white'},
    {date:'03',event:false,color:'white'},
]

const list2=[
    {date:'04',event:false,color:'white'},
    {date:'05',event:false,color:'white'},
    {date:'06',event:false,color:'white'},
    {date:'07',event:false,color:'white'},
    {date:'08',event:false,color:'white'},
    {date:'09',event:false,color:'white'},
    {date:'10',event:false,color:'white'}
]
const list3=[
    {date:'18',event:false,color:'white'},
    {date:'19',event:true,color:'white',src:img1},
    {date:'20',event:false,color:'white'},
    {date:'21',event:true,color:'white',src:img3},
    {date:'22',event:false,color:'white'},
    {date:'23',event:true,color:'white',src:img2},
    {date:'24',event:false,color:'white'}
]
const list4=[
    {date:'25',event:false,color:'white'},
    {date:'26',event:false,color:'white'},
    {date:'27',event:true,color:'white',src:img2},
    {date:'28',event:false,color:'white'},
    {date:'29',event:false,color:'white'},
    {date:'30',event:false,color:'white'},
    {date:'01',event:false,color:'gray'}
]
const list5=[
    {date:'25',event:false,color:'gray'},
    {date:'26',event:false,color:'gray'},
    {date:'27',event:false,color:'gray'},
    {date:'28',event:false,color:'gray'},
    {date:'29',event:false,color:'gray'},
    {date:'30',event:false,color:'gray'},
    {date:'01',event:false,color:'white'}
]
const list6=[
    {date:'02',event:false,color:'white'},
    {date:'03',event:false,color:'white'},
    {date:'04',event:false,color:'white'},
    {date:'05',event:false,color:'white'},
    {date:'06',event:false,color:'white'},
    {date:'07',event:false,color:'white'},
    {date:'08',event:false,color:'white'}
]
const list7=[
    {date:'09',event:false,color:'white'},
    {date:'10',event:false,color:'white'},
    {date:'11',event:false,color:'white'},
    {date:'12',event:false,color:'white'},
    {date:'13',event:false,color:'white'},
    {date:'14',event:false,color:'white'},
    {date:'15',event:false,color:'white'}
]
const list8=[
    {date:'16',event:false,color:'white'},
    {date:'17',event:false,color:'white'},
    {date:'18',event:false,color:'white'},
    {date:'19',event:false,color:'white'},
    {date:'20',event:false,color:'white'},
    {date:'21',event:false,color:'white'},
    {date:'22',event:false,color:'white'}
]
const list9=[
    {date:'23',event:false,color:'white'},
    {date:'24',event:false,color:'white'},
    {date:'25',event:false,color:'white'},
    {date:'26',event:false,color:'white'},
    {date:'27',event:false,color:'white'},
    {date:'28',event:false,color:'white'},
    {date:'29',event:false,color:'white'}
]
export default function Calendar2() {
  return (
    <div className='cal-front'>
        <div id='markInDate2'>
            <div id='dd2'>21</div>
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
