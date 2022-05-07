import React, { Children } from 'react'
import PropTypes from 'prop-types'

const Button = props => {
    const bg = props.backgroupColor ? "bg-" + props.backgroupColor : "bg-main"
    const size = props.size ? 'btn-' + props.size : ""
    const animate = props.animate ? "btn_animate" : " "
  return (
    <button
        className={`btn ${bg} ${size} ${animate}`}
        onClick={props.onClick ? () => props.onClick : null}
    >
        <span className='btn_txt'>{props.children}</span>
        {
            props.icon ? (
                <span className='btn_icon'>
                    <i className={`${props.icon} bx-tada`}></i>
                </span>
            ) : null
        }
    </button>
  )
}

Button.propTypes = {
    backgroupColor : PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick : PropTypes.func

}

export default Button