import React from 'react'

const SearchInput = (props) => {
  const {type, onChange, placeholder, value, className} = props
  return (
    <>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={className}/>
    </>
  )
}

export default SearchInput