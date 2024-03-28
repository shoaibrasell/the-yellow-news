import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div>
     <img src={logo} alt="" />
     <p>Journalism Without Fear or Favour</p>
     <p className='text-xl'>{moment().format("dddd , MMMM D , YYYY , h:mm a ")}</p>
    </div>
  );
};

export default Header;