import React, { useEffect, useRef } from 'react'
import {Link, useLocation} from "react-router-dom"

import logo from '../assets/images/Logo-2.png'


const mainnv = [
  {
      display: "trang chủ",
      path:"/"
  },
  {
      display:"sản phẩm",
      path: "/Catalog"
  },
  {
      display : "phụ kiện",
      path:"/accessoríe"
  },
  {
      display:"liên hệ",
      path:"./contac"
  }
]
const Header = () => {
  const {pathname} = useLocation()
  const activeNav = mainnv.findIndex(e => e.path === pathname)

  const headerRef = useRef(null)

  const menuLeft = useRef(null)
  const menuToggle = () =>{
    menuLeft.current.classList.toggle("active")
  }
  useEffect(() =>{
      window.addEventListener("scroll",() =>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop >80){
          headerRef.current.classList.add("shrink");
        }else{
          headerRef.current.classList.remove("shrink");
        }
      })

      return () =>{
        window.removeEventListener("scroll");
      }
  },[]);
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header_logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
        </div>
        <div className="header_menu">
              <div className="header_menu_mobile_toggle" onClick={menuToggle}>
                   <i className='bx bx-menu-alt-left'></i>
              </div>
          <div className="header_menu_left" ref={menuLeft}>
                <div className="header_menu_left_close" onClick={menuToggle}>
                    <i class='bx bx-chevron-left'></i>
                </div>
              {
                mainnv.map((item,index) =>(
                    <div 
                        key={index}
                        className={`header_menu_item header_menu_left_item ${index === activeNav ? 
                        'active' : ''}`}
                        onClick={menuToggle}
                     >
                      <Link to={item.path}>
                      <span>
                            {item.display}
                      </span>
                      </Link>
                    </div>
                ))
              }
          </div>
          <div className="header_menu_right">
                <div className="header_menu_item header_menu_rigth_item">
                     <i class='bx bx-search-alt-2'></i>
                </div>
                <div className=" header_menu_item header_menu_rigth_item">
                  <Link to="/Cart">
                     <i class='bx bx-cart' ></i>
                  </Link>
                </div>
                <div className="header_menu_item header_menu_rigth_item">
                     <i class='bx bxs-user'></i>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header