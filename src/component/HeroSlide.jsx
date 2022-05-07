import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from './Button'

const HeroSlide = props => {
    const data = props.data

    const timeOut = props.timeOut ? props.timeOut: 3000
    const [activeSlider,setActiveSlider] = useState(0)

    const nextSlide = () =>{
        const index = activeSlider+1 === data.length ? 0 : activeSlider+1
        setActiveSlider(index)
    }
    const prevSlide = () =>{
        const index = activeSlider-1 < 0 ? data.length-1 : activeSlider-1
        setActiveSlider(index)
    }

    useEffect( () =>{
        if(props.auto){
            const slideAuto = setInterval( () =>{
                    nextSlide()
            },timeOut);

            return () =>{
                clearInterval(slideAuto)
            }
        }
    },[nextSlide,timeOut,props])
  return (
    <div className='hero-slider'>
           {
                data.map((item, index) => (
                    <HeroSliderItem key={index} item={item} active ={index === activeSlider}/>
                ))
            }
            {
                props.control ? (
                    <div className="hero-slider_control">
                        <div className="hero-slider_control_item" onClick={prevSlide}>
                                <i class='bx bx-chevron-left'></i>
                        </div>
                        <div className="hero-slider_control_item">
                               <div className="index">
                                    {activeSlider +1}/{data.length} 
                                </div>
                        </div>
                        <div className="hero-slider_control_item" onClick={nextSlide}>
                                <i class='bx bxs-chevron-right'></i>
                        </div>
                    </div>
                ) : null
            }
    </div>
  )
}

HeroSlide.propTypes = {
    data: PropTypes.array.isRequired,
    control : PropTypes.bool,
    auto : PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = props => (
    <div className={`hero-slider_item ${props.active ? 'active' : ''}`}>
        <div className="hero-slider_item_info">
            <div className={`hero-slider_item_info_title color-${props.item.color}`}>
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider_item_info_description">
                <span>{props.item.description}</span>
            </div>
            <div className="hero-slider_item_info_btn">
                <Link to={props.item.path}>
                   <Button
                        backgroupColor = {props.item.color}
                        icon="bx bx-cart"
                        animate= {true}
                        
                   >
                        xem chi tiết
                   </Button>
                </Link>
            </div>
        </div>
        <div className="hero-slider_item_image">
            <div className={`shape bg-${props.item.color}`}></div>
            <img src={props.item.image} alt="logo" />
        </div>
    </div>
)

export default HeroSlide