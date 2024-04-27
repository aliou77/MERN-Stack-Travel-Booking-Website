import React, { useContext, useEffect, useRef } from 'react'
import Logo from '../Logo'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthContext'


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
  const headerRef = useRef(null);

  // logout the user
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = ()=>{
    dispatch({type: "LOGOUT"})
    navigate("/login")
  }
 
  const fixedHeader = ()=>{

    try {
      window.addEventListener("scroll", ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
          // console.log("scroll")
          headerRef.current?.classList.add("fixed-header")
        }else{
          headerRef.current?.classList.remove("fixed-header")
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
        <div className='header-links md:block hidden'>
          <ul className='links flex justify-center gap-8 text-black text-lg'>
            {
              nav_link.map((item, index) =>(
                <li className='header-link-item hover:text-blue-900 font-medium' id={`${index}`} key={index}>
                  <NavLink to={item.path} className={ navClass => 
                    navClass.isActive ? "active" : ""
                  } >{item.diaplay}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='connexion-links'>
            <div className='content flex sm:gap-8 gap-6 font-medium'>
              {
                user
                ?
                (<>
                  <p>
                    <span className='sm:text-lg text-base text-blue-900 capitalize'>{user.username}</span>
                  </p>
                  <p>
                    <span className='sm:text-lg text-base text-white bg-blue-900 px-[20px] sm:py-[12px] py-[9px] rounded-full hover:text-red-600 cursor-pointer' onClick={logout}>Logout</span>
                  </p>
                </>)
                :
                (<>
                  <p>
                    <Link className='sm:text-lg text-base' to={"/login"}>Login</Link>
                  </p>
                  <p>
                    <Link className='sm:text-lg text-base text-white bg-blue-900 px-[20px] sm:py-[12px] py-[9px] rounded-full' to={"/register"}>Register</Link>
                  </p>
                </>)
              }
              <div className='sm:hidden block'>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            
        </div>
      </div>
    </header>
  )
}

export default Header;