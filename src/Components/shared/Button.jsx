import React from 'react'

const Button = ({children, type = 'button'}) => {
  return (
    <button type={type} className='btn bg-buttonBg btn-sm md:btn-md text-white font-normal md:px-[2.5em] hover:bg-[#64827f]'>{children}</button>
  )
}

export default Button