import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'
//  50:37s

 const footerAboutLink =[
   {
     display:"giới thiệu",
     path:"/about"
   },
   {
      display:"liên hệ",
      path:"/about"
   },
   {
     display:"tuyển dụng",
     path:"/about"
   },
   {
    display:"tin tức",
    path:"/about"
   }, 
  {
    display:"hệ thống cửa hàng",
    path:"/about"
  }
 ]

 const footerCustomerLink = [
  {
    display:"chính sách đổi trả",
    path:"/about"
  },
  {
    display:"chính sách bảo hành",
    path:"/about"
  },
  {
    display:"chính sách hoàn tiền",
    path:"/about"
  },
 ]
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <Grid 
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
            <div>
              <div className="footer_title">
                 Tổng đài hỗ trợ
              </div>
              <div className="footer_content">
                 <p>
                  Liên hệ đặt hàng <strong>0138774783</strong>
                </p>
                <p>
                  thắc mắc đơn hàng <strong>0138774783</strong>
                </p>
                <p>
                  Góp ý, khiếu nại<strong>0138774783</strong>
                </p>
              </div>
            </div>

            <div>
              <div className="footer_title">
                 về yoloy
              </div>
              <div className="footer_content">
                {
                  footerAboutLink.map( (item,index) =>(
                    <p key={index}>
                      <Link to={item.path}>
                            {item.display}
                      </Link>
                  </p>
                  ))
                }
              </div>
            </div>


            <div>
              <div className="footer_title">
                 chăm sóc khách hàng
              </div>
              <div className="footer_content">

                {
                  footerCustomerLink.map( (item,index) =>(
                    <p key={index}>
                      <Link to={item.path}>
                            {item.display}
                      </Link>
                  </p>
                  ))
                }
                
              </div>
            </div>

            <div className='footer_about'>
              <p>
                <Link to="/">
                    <img src={logo} className="footer_logo" alt="logo" />
                </Link>
              </p>
              <p>
                React Ecommerce Web Shop | Part 01 - Homepage | ReactJS SASS

                In this video, we will Build React Ecommerce Web Shop Homepage with SASS.

                Don't forget to click the like button and share the video with your friends if you found the video useful. 
              </p>
            </div>

        </Grid>
      </div>
    </footer>
  )
}

export default Footer