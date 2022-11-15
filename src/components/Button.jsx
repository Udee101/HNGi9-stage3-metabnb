import React from 'react'

const Button = ({title, ...others}) => {
  return (
    <button {...others}>{title}</button>
  )
}

export default Button