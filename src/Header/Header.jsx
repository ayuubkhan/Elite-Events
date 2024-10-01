import React ,{useState} from 'react';
import './Header.css';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import { FiAlignJustify, FiX } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
function Header() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const openSidebar = () => {
    setIsSidebarOpen(true);
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="nav-container">
      <Link to="/">
        <div className="nav-logo">
          <span className="logo-sub">
            <img src={logo} alt="" />
          </span>
          <span className="logo-main">
            <span>Elite</span> Event
          </span>
        </div>
      </Link>

      <FiAlignJustify className='menu-open' onClick={openSidebar} />
      <div className={`nav-links-container ${isSidebarOpen ? 'open' : ''}`}>
        <FiX className='menu-close' onClick={closeSidebar} />
        <div className="nav-links">
          <li><Link className={`nav-link-item ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>Our Services <FiChevronUp className='chevronUp' /></Link>
            <ul className='dropdown-menu'>
              <li><Link className='dropdown-menu-item'>Option 1</Link></li>
              <li><Link className='dropdown-menu-item'>Option 2</Link></li>
              <li><Link className='dropdown-menu-item'>Option 3</Link></li>
            </ul>

          </li>
          <li><Link className='nav-link-item'>Post Your Requirement</Link></li>
          <li><Link className='nav-link-item'>Contact Us</Link></li>
        </div>
      </div>
    </div>

  );
}

export default Header;
