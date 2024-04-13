import React, { useEffect, useRef } from 'react'
import Logo from '../Logo'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const nav_link = [
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

function Header() {
  const headerRef = useRef(null)
 
  const fixedHeader = ()=>{

    try {
      window.addEventListener("scroll", ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          // console.log("scroll")
          headerRef.current.classList.add("fixed-header")
        }else{
          headerRef.current.classList.remove("fixed-header")
        }
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() =>{
    fixedHeader()
    return window.removeEventListener("scroll", fixedHeader)
  });


  return (
    <header className='bg-white' ref={headerRef}>
      <div className='content flex justify-between items-center py-[20px] desktop-width'>
        <Logo />
        <div className='header-links'>
          <ul className='links flex justify-center gap-8 text-black text-lg'>
            {
              nav_link.map((item, index) =>(
                <li className='header-link-item hover:text-blue-900 font-medium' id={index} key={index}>
                  <NavLink to={item.path} className={ navClass => 
                    navClass.isActive ? "active" : ""
                  } >{item.diaplay}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='connexion-links'>
            <div className='content flex gap-8 font-medium'>
              <p>
                <Link className='text-lg ' to={"/login"}>Login</Link>
              </p>
              <p>
                <Link className='text-lg text-white bg-blue-900 px-[20px] py-[12px] rounded-full' to={"/register"}>Register</Link>
              </p>
              <div className='sm:hidden block'>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header