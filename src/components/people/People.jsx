import React from 'react'
import './people.css'

export default function People({events}) {
  return (
    <div>
        {
            events.map((card,index)=>{
                return(
                    <table key={index}>
                        <tbody>
                           
                                
                            
                            <tr>      
                                <td id='cardT' style={{marginTop:card.ctw+'rem'}}>{card.time}
                                    <div>
                                        {card.mins}
                                    </div>
                                </td>       
                                <td 
                                    style={{
                                        backgroundColor:card.bodyColor,
                                        width:card.width,
                                        borderLeft: '5px solid '+card.leftColor,
                                        borderRadius: '1rem',
                                        position:'absolute',
                                        fontFamily:'Lato',
                                        fontSize:'12px',
                                        height:!card.smallCard && (index===events.length-1)?'3.5rem':'4.5rem',
                                        left:card.smallCard?card.left:'6rem',
                                        marginTop:card.smallCard?'':card.mt
                                    }} 
                                    className='card'
                                >
                                {
                                    card.smallCard?
                                    <p 
                                        style={{
                                            marginBottom:'-.1rem',
                                        }}
                                    
                                    >{card.topText}</p>:
                                    <p 
                                        style={{
                                            marginBottom:'-.1rem',
                                        }}
                                    
                                    >{card.topText}
                                        {card.reloadImg.reload?
                                            <img style={{left:'13rem'}} src={card.reloadImg.src} alt="reload" />:
                                            <span></span>
                                        }
                                    </p>
                                }
                                    
                                    {
                                        card.img.map((img,index)=>{
                                            return <img style={{left:img.ml+'rem'}} src={img.src} alt="people" key={index}/>
                                        })
                                    }
                                    <strong id='otext'>{card.overText}</strong>
                                    {
                                        card.smallCard || (index===events.length-1)?
                                        <p 
                                            style={{
                                                marginTop:'1.8rem'
                                            }}

                                        >{card.buttomText}</p>:
                                        <>

                                            <img src={card.buttomImg} id='zoom' alt="zoom"/>
                                            <p 
                                                style={{
                                                    marginTop:'1.8rem',
                                                    marginLeft:'1.1rem'
                                                }}

                                            >{card.buttomText}</p>
                                        </>
                                    }
                                    
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                )
            })
        }
    </div>
  )
}
