import React from 'react'
import './dates.css'

export default function Dates({dates}) {
  return (
    <>
        <tr className='date-line'>
      
        {
            dates.map((val)=>{
                return <td key={val.date} id='date' style={{color:val.color}}>{val.date}</td>
            })
        }
        </tr>
  
        <tr className='edot'>
        {
            dates.map((val,index)=>{
                if(val.event){
                    return( 
                        <td key={val.date}>
                            <img  src={val.src} alt="event"/>
                        </td>
                    )
                }
                else{
                    return <td key={val.date} >{' '}</td>
                }
                
            })
        }
        </tr>
    </>
  )
}
