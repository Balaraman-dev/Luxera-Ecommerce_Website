import React, { useState,useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Img1 from "../assets/user_header.png";
import Img2 from "../assets/wish_header.png";
import Img3 from "../assets/cart_header.png";
import searchimg from '../assets/search.png';

const Header_sticky = ({recent}) => {
  const [textsearch,setTextsearch]=useState('');
  const [categories,setCategories]=useState();
  const [items,setItems]=recent;
  const navigate =useNavigate();
  
    const addElement = (newElement) => {
      setItems((prev) => {
        const updated = [...prev, newElement];
        return updated.length > 5 ? updated.slice(1) : updated;
      });
    }; 
    useEffect(()=>{
        let url=`https://dummyjson.com/products/category-list`;
        axios.get(url)
        .then(res=>{
          setCategories(res.data);
        })
      .catch(e=>{
      console.error("The error is occured",e);
        });
    },[]); 

    const Search=()=>{
        addElement(textsearch);
        navigate(`/dis_cards/${textsearch}`);
    }
    const handle_click=(e)=>{
        if(e.key=='Enter'){
          Search();
      }
    }

return (
    <div className='flex my-3 justify-between py-6 sticky top-0 z-20 backdrop-blur-3xl text-luxera '>
         <div className='flex space-x-16 ml-32'>
            <h3 className='aclonicareg text-3xl font-bold'>Luxera</h3>
            <ul className='flex space-x-6 pt-1'>  
                <Link to="/"><h5 className=' text-lg cursor-pointer'>Home</h5></Link>
                <h5 className='text-lg cursor-pointer '>Features</h5>
                <h5 className='cursor-pointer border  rounded-md pt-1  border-[#642a1a]'>
                  <select name="categories" onChange={(e)=>(navigate(`/dis_cards/${e.target.value}`,{state : true }))} className='bg-transparent  pl-2 pr-10 outline-none capitalize text-luxera text-md border-none' >
                  {
                    categories && categories.map((element)=>(<option className='capitalize text-white bg-luxera border-none'>{element}</option>))
                  }
                  </select>
                </h5>
            </ul>
        </div>
        <div className='flex space-x-8 mr-16'>
          <div className='flex'>
            <input type="text" onChange={(e)=>(setTextsearch(e.target.value))}  onKeyDown={handle_click} className='w-45 h-9 border-transparent outline-none border-2 focus:border-[#642a1a] rounded-full text-luxera pl-12 pr-4 relative bg-search_background placeholder-search_text' placeholder='Search' ></input>
            <img src={searchimg} onClick={()=>Search()} className='h-7 absolute pt-2 pl-4' alt="" />    
          </div>
        <ul className='flex m-auto'>
            <div onClick={()=>navigate("/login")}><img src={Img1} className='w-1/2 cursor-pointer' alt="user"/></div>
            <a href="#"> <img src={Img2} className='cursor-pointer w-1/2 ' alt="wish" /></a>
            <div onClick={()=>navigate("/basket")}><img src={Img3} className='cursor-pointer w-1/2' alt="basket"/></div>
        </ul>   
       </div>      
    </div>
   
  )
}
export default Header_sticky
