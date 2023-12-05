import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <section>
          <div className="my-flex-container">
            <div>Add: 8 Ton That Thuyet, Hanoi, Vietnam</div>
            <span>Mon-Sat: 9am to 6pm</span>
          </div>
          <div className="my-topnav">
            <Link to="/home">Home</Link>
            <div className="my-dropdown">
              <button className="my-dropbtn">
                Page <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </button>
              <div className="my-dropdown-content">
                <Link to="/aboutus">About Us</Link>
                <Link to="/history">History of Nail-art</Link>
                <Link to="/nailcare">Nail-care</Link>
              </div>
            </div>
  
            <div className="my-dropdown">
              <button className="my-dropbtn">
                Services <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </button>
              <div className="my-dropdown-content">
                <Link to="/children">Children Nail-art Service</Link>
                <Link to="/adult">Adult Nail-art Service</Link>
                <Link to="/product">Product and Accessories Shop</Link>
              </div>
            </div>
  
            <Link to="/nailcare">Nailcare Tips</Link>
            <Link to="/history">History</Link>
            <Link to="/contact">Contact Us</Link>
            <div className="my-search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
              <div>
                <Link to="/appointment" style={{ backgroundColor: '#911439', color: 'white' }}>
                  Get an Appointment
                </Link>
              </div>
            </div>
            <Link to="/feedback">Feedback</Link>
          </div>
        </section>
      </header>
    );
    }
export default Header;