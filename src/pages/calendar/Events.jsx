import React from 'react'
import People from '../../components/people/People'
import './events.css'
import face1 from '../../Assets/face1.png'
import face2 from '../../Assets/face2.png'
import face3 from '../../Assets/face3.png'
import face4 from '../../Assets/face4.png'
import empty_face from '../../Assets/empty_face.png'
import temperature from '../../Assets/temeperature.png'
import zoom from '../../Assets/zoom.png'
import reload from '../../Assets/reload.png'

export const eventList1=[
    {
        smallCard: true,
        width:'8rem',
        topText:'Design Scrum',
        buttomText:'11:00 am (45 mins)',
        img:[{src:face1,ml:'0'},{src:face2,ml:'.8'},{src:face3,ml:'1.6'},{src:face4,ml:'2.4'},{src:empty_face,ml:'3.2'}],
        leftColor:'#FF9999',
        bodyColor:'#FFE0E0',
        left:'1rem',
        overText:'+6',
        time:'',
        mins:'',
        ctw:0
    },
    {
        smallCard: true,
        width:'8rem',
        topText:'Q2 Planning',
        buttomText:'01:20 pm (60 mins)',
        img:[{src:face1,ml:'0'},{src:face2,ml:'.8'},{src:face3,ml:'1.6'},{src:face4,ml:'2.4'},{src:empty_face,ml:'3.2'}],
        leftColor:'#FFC01F',
        bodyColor:'#FFE8AC',
        left:'10rem',
        overText:'+2',
        time:'',
        mins:'',
        ctw:0
    },
    {
        smallCard: true,
        width:'2.3rem',
        topText:'Coldpla',
        buttomText:'09:20 p',
        buttomImg:zoom,
        img:[{src:face1,ml:'0'},{src:face2,ml:'.8'}],
        leftColor:'#97EFE0',
        bodyColor:'#E5FFFA',
        left:'19.2rem',
        overText:'',
        time:'',
        mins:'',
        ctw:0
    }
]
const eventList2=[
    {
        smallCard: false,
        reloadImg:{reload:true,src:reload},
        width:'14.5rem',
        topText:'Design Scrum',
        buttomImg:zoom,
        buttomText:'456 676 7889',
        img:[{src:face1,ml:'0'},{src:face2,ml:'.8'},{src:face3,ml:'1.6'},{src:face4,ml:'2.4'},{src:empty_face,ml:'3.2'}],
        leftColor:'#FF9999',
        bodyColor:'#FFE0E0',
        left:'1rem',
        mt:'6.5rem',
        overText:'+6',
        time:'11:00am',
        mins:'45 mins',
        ctw:6.5
    },
    {
        smallCard: false,
        reloadImg:{reload:true,src:reload},
        width:'14.5rem',
        topText:'Q2 Planning',
        buttomText:'123 456 7890',
        img:[{src:face1,ml:'0'},{src:face2,ml:'.8'},{src:face3,ml:'1.6'},{src:face4,ml:'2.4'},{src:empty_face,ml:'3.2'}],
        leftColor:'#FFC01F',
        buttomImg:zoom,
        bodyColor:'#FFE8AC',
        left:'10rem',
        mt:'11.5rem',
        overText:'+2',
        time:'01:20pm',
        mins:'60 mins',
        ctw:11.5
    },
    {
        smallCard: false,
        reloadImg:{reload:false},
        width:'14.5rem',
        topText:'Coldpla',
        buttomImg:zoom,
        buttomText:'',
        img:[{src:face1,ml:'0'},{src:face2,ml:'.8'}],
        leftColor:'#97EFE0',
        bodyColor:'#E5FFFA',
        left:'19.2rem',
        mt:'16.5rem',
        overText:'',
        time:'09:20pm',
        mins:'120 mins',
        ctw:16.5
    }

]

export default function Events() {
  return (
    <div className='evF'>
        <div id='line'></div>
        <p>Upcoming Events ( 3 )</p>
        <People events={eventList1}/>
        <p id='timeI9'><strong>Today,</strong> Thursday 21
            <img src={temperature} id="temp" alt="temperature" />
        </p>
        
        <People events={eventList2}/>
        <p id='date22'><strong>Tomorrow,</strong> Friday 22
            <img src={temperature} id="temp" alt="temperature" />
        </p>
        <div id='circle'></div>
        <div id='add'>+</div>
        <p id='noE'>No Events</p>
    </div>
  )
}
