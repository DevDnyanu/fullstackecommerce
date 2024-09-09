import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen]);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button className="allCatTab align-items-center" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <span className="icon1 mr-2"><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2"><FaAngleDown /></span>
              </Button>

              <div className={`sidebarNav ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                  <li><Link to="/"><Button>Man<FaAngleRight className='ml-auto'/> </Button></Link>
                 <div className="submenu">
                     <Link to="/"><Button>clothing</Button></Link>
                     <Link to="/"><Button>footwear</Button></Link>
                     <Link to="/"><Button>watches</Button></Link>
                     <Link to="/"><Button>mobile</Button></Link>
                     <Link to="/"><Button>laptop</Button></Link>
                     <Link to="/"><Button>electronics</Button></Link>
                  </div> 
                    </li>
                       <li><Link to="/"><Button>Woman<FaAngleRight className='ml-auto'/></Button></Link>
                       <div className="submenu">
                     <Link to="/"><Button>clothing</Button></Link>
                     <Link to="/"><Button>footwear</Button></Link>
                     <Link to="/"><Button>watches</Button></Link>
                     <Link to="/"><Button>mobile</Button></Link>
                     <Link to="/"><Button>laptop</Button></Link>
                     <Link to="/"><Button>electronics</Button></Link>
                  </div> 
                       </li>
                       <li><Link to="/"><Button>Beauty</Button></Link></li>
                       <li><Link to="/"><Button>Watches</Button></Link></li>
                       <li><Link to="/"><Button>Kids</Button></Link></li>
                       <li><Link to="/"><Button>Gift</Button></Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Home</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Man</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Woman</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Beauty</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Watches</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Kids</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item dropdown">
                <Link to="/"><Button>Gift</Button></Link>
                <div className="dropdown-content">
                  <Link to="/"><Button>clothing</Button></Link>
                  <Link to="/"><Button>footwear</Button></Link>
                  <Link to="/"><Button>watches</Button></Link>
                  <Link to="/"><Button>mobile</Button></Link>
                  <Link to="/"><Button>laptop</Button></Link>
                  <Link to="/"><Button>electronics</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Contact</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
