import React from 'react'
import Calendar from './Calendar'
import './calendar3.css'
import cross from '../../Assets/cross.png'
import people_group from '../../Assets/people-group.png'
import dark_arrow from '../../Assets/dark-right-arrow.png'
import locat from '../../Assets/location.png'
import clock from '../../Assets/clock.png'
import agenda from '../../Assets/agenda.png'
import attach from '../../Assets/attachment.png'

export default function Calendar3() {
  return (
    <>
        
        <Calendar/>
        <div className='shadow'></div>
        <div className='lfs'>
            <img src={cross} alt="" />
            <span id='new'>New Event</span>
            <div id='border1'></div>
            <input id='it' type="text" placeholder='Add Title'/>
            <img id='mtsp' src={people_group} alt="people"/>
            <span id='mtsp'>Invite People</span>
            <img id='mtsp' className='dd' src={dark_arrow} alt="dark_arrow" />
            <div id='border2'></div>
            <img id='mtsp' src={clock} alt="c" />
            <span id='mtsp' >All Day</span>
            <p>Thursday, 21 September</p>
            <p>Thursday, 21 September</p>
            <div id='border2'></div>
            <img id='mtsp' src={locat} alt="c" />
            <span id='mtsp'>Location</span>
            <img id='mtsp' className='dd1' src={dark_arrow} alt="c" />
            <div id='border2'></div>
            <img id='mtsp' src={agenda} alt="c" />
            <span id='mtsp'>Agenda</span>
            <img id='mtsp' className='dd2' src={dark_arrow} alt="c" />
            <div id='border2'></div>
            <img id='mtsp' src={attach} alt="c" />
            <span id='mtsp'>Add Attachment</span>
            <img id='mtsp' className='dd' src={dark_arrow} alt="c" />
        
        </div>
        <div id='circle3'></div>
        <div id='line2'></div>
        <div id='circle4'></div>
    </>
  )
}
