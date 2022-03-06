
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './pages/calendar/Calendar';
import Calendar2 from './pages/calendar/Calendar2';
import Calendar3 from './pages/calendar/Calendar3';
import Calendar4 from './pages/calendar/Calendar4';
import Home from './pages/home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/page1' element={<Calendar/>}/>
        <Route path='/page2' element={<Calendar4/>}/>
        <Route path='/page3' element={<Calendar2/>}/>
        <Route path='/page4' element={<Calendar3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
