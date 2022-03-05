import React from 'react'
import './home.css'
import cPerson from '../../Assets/calendar-person.svg'
import arrow from '../../Assets/arrow.png'
import ellipse from '../../Assets/Ellipse 1.png'

function Home() {
  return (
    <>
        <div id='cal-text'>Calender <span>2021</span></div>
        <img src={cPerson} id='personImg' alt={'cPerson'} />
        <div className='footer-slide'>
          <div>Hi Aman,</div>
          <p>
            Wellcome to your daily event calendar. Be more engaging & personalised than ever before. We'll help you in
            <span id='itext'>Tracking Upcoming Events, Scheduling Meeting & Creating New Event!</span>
          </p>
          <div className='next'>
            <img src={ellipse} id='ell' alt="ellipse" />
            <img src={arrow} id='arr' alt={"arrow"} />
          </div>
        </div>
    </>
  )
}

export default Home