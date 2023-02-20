import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdSearch, IoMdNotificationsOutline} from 'react-icons/io'
import {BsMicFill} from 'react-icons/bs'
import {BiVideoPlus} from 'react-icons/bi'
import Images  from '../assets/images/images'

const Navbar = () => {
  const [searchKeyword, setSearchKeyword] =useState('')

  const onKeyFunc = (e) => {
    if(e.key === 'Enter'){
      searchFunc();  
    }
  } 

  const searchFunc = () =>{
    if(searchKeyword.length > 0){
      window.location =`/search/${searchKeyword}`
    }
  }

  return (
    <div className='w-full flex items-center justify-between h-20 px-3 sticky top-0 bg-white'>
      <div className=' w-3/12 flex items-center space-x-4'>
      <RxHamburgerMenu className='icon-style'/>
      <img onClick={() => window.location ="/"} className='w-32 mx-5 cursor-pointer' src={Images.youtube} alt=""/>
      </div>
      <div className='w-6/12 flex items-center space-x-4'>
        <div className='w-3/4 flex items-center '>
        <input onKeyPress={onKeyFunc} value={searchKeyword} onChange={e=> setSearchKeyword(e.target.value)} className='border p-2 h-10 flex-1 outline-none' type="text"  placeholder='Ara'/>
        <div onClick={searchFunc} className='bg-gray-100 h-10 w-20 flex items-center justify-center border'>
        <IoMdSearch className='icon-style'/>
        </div>
        </div>
        <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer'>
        <BsMicFill className='icon-style'/>
        </div>
      </div>
      <div className='w-3/12 flex justify-end items-center space-x-5'>
      <BiVideoPlus className='icon-style text-2xl'/>
      <IoMdNotificationsOutline className='icon-style text-2xl'/>
      <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
      </div>
    </div>
  )
}

export default Navbar
