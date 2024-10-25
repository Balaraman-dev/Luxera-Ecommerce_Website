import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product_desc from './Product_desc'
import Landing_page from './Landing_page.jsx'
import Header_sticky from './Header_sticky.jsx'
import Footer from './Footer.jsx';
import Basket from './Basket.jsx';
import Payment_page from './Payment_page.jsx';
import Order_place from './Order_place.jsx';
import Login from './Login.jsx';
import Display_card from './Product_display_cards.jsx'
import Recent from './Recent_list.jsx';

const Main_component = () => {
  const [ add, setAdd ] = useState([]);
  const [items,setItems]=useState(['laptop','decoration','shoes','watch','lipstick']);

  return (
    <div className='opensans selection:bg-[#703525] selection:text-white'>
        <Router>
          <Header_sticky recent={[items,setItems]}/>
            <Routes>
                <Route path='/' element={<Landing_page recent={[items,setItems]} />} />
                <Route path='/details/:id' element={<Product_desc cart={ [ add, setAdd] }/>} /> 
                <Route path='/payment/:pay' element={ <Payment_page/> } />
                <Route path='/basket' element={<Basket cart={ [ add, setAdd ] }/>}/>
                <Route path='/basket/:id' element={<Basket cart={ [ add, setAdd ] }/>}/>
                <Route path='/order' element={<Order_place/>}/>
                <Route path='/:name' element={<Landing_page/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dis_cards/:card_val' element={<Display_card/>}/>
                <Route path='/Recent/:textsearch' element={<Recent/>}/>
            </Routes>
          <Footer/>   
        </Router>
    </div>
  )
}

export default Main_component
