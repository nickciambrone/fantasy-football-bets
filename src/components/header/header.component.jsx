import React from 'react';

import logo from './crown-dynamic-color.png'
import {

    Link
  } from "react-router-dom";
import './header.styles.scss';

export const Header = ()=>(
    <div className='header'>
        <div className= 'left-side'>
        <Link className ='option' to ='/fantasy-action'>
            <img height='50px' src = {logo} alt = 'Logo'/>
        </Link>
        <Link className ='option' to ='/fantasy-action'>
            HOME
        </Link>
        </div>
        <div className='right-side'>
            <Link className='option' to ='/'>
                FAQ
            </Link>
            
            <Link className='option' to ='/'>SIGN IN</Link>
        </div>

    </div>
)



export default Header;