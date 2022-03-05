import React from 'react'
import drop_down from '../../Assets/drop_down.png'
import back_arrow from '../../Assets/back-arrow.png'
import user from '../../Assets/user.png'

export default function Header() {
  return (
    <>
        <button type='button' className='bb-1'>
            <img src={back_arrow} alt="back_arrow"/>
        </button>
        <span id='ycal'>2021
            <button>
                <p>September
                    <img src={drop_down} alt="drop_down" />
                </p>
            </button>
        </span>
        <img src={user} alt="user" id='user'/>
    </>
  )
}
