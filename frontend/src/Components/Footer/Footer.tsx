import React from 'react'
import Logo from '../LogoFooter'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const footer_link1 = [
  {
    path: "/home",
    diaplay: "Home"
  },
  {
    path: "/about",
    diaplay: "About"
  },
  {
    path: "/tours",
    diaplay: "Tours"
  }
]

const footer_link2 = [
  {
    path: "/gallery",
    diaplay: "Gallery"
  },
  {
    path: "/login",
    diaplay: "Login"
  },
  {
    path: "/register",
    diaplay: "Register"
  }
]

function Footer() {
  return (
    <footer className='pt-[5rem] desktop-width'>
      <div className="content flex lg:flex-nowrap flex-wrap justify-between md:flex-row flex-col">
        <div className="item max-w-[27rem] w-full">
          <Logo />
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus tempora reprehe</p>
          <div className="logos flex gap-4">
          </div>
        </div>
        <div className="item">
          <h5 className='font-bold text-lg text-blue-900'>Discover</h5>
          <ul>
            {
              footer_link1.map((item, index) =>(
                <li className='font-medium hover:underline hover:text-blue-900 my-2' key={index}>
                  <Link to={item.path}>{item.diaplay}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="item">
          <h5 className='font-bold text-lg text-blue-900'>Quik Links</h5>
          <ul>
            {
              footer_link2.map((item, index) =>(
                <li className='font-medium hover:underline hover:text-blue-900 my-2' key={index}>
                  <Link to={item.path}>{item.diaplay}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="item">
          <h5 className='font-bold text-lg text-blue-900'>Contact</h5>
          <ul>
            <li className='my-2'>
              <FontAwesomeIcon icon={faLocationDot} className='text-blue-900' />
              <span className='text-gray-600 ps-2'>Guinee - Sangaredi</span>
            </li>
            <li className='my-2'>
              <FontAwesomeIcon icon={faMailBulk} className='text-blue-900' />
              <span className='text-gray-600 ps-2'>mamadoualioudeveloppeurweb@gmail.com</span>
            </li>
            <li className='my-2'>
              <FontAwesomeIcon icon={faPhone} className='text-blue-900' />
              <span className='text-gray-600 ps-2'>+224 625 97 39 24</span>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-gray-600 text-center mt-[3rem] mb-4'>Copyright - 2024, designed and developed by Mamadou aliou. All rigth reserved</p>
    </footer>
  )
}

export default Footer