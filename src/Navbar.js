import React from 'react';
import './Navbar.css';
import { FaArrowDown } from 'react-icons/fa';
//            
const Navbar = () => {
  return (
    <nav>
      <div className='one'>
        <h3>EDYODA</h3>
        <h6 className='topnav'>Courses</h6>
        <FaArrowDown size={10}/>
        <h6 className='topnav'>Programs</h6>
        <FaArrowDown size={10}/>
        {/* <FontAwesomeIcon icon={faSearch} /> */}

      </div>
    </nav>
  );
};

export default Navbar;
