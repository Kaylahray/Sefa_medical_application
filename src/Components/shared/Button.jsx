import React from 'react'

const Button = ({children}) => {
  return (
    <button className='btn bg-buttonBg btn-sm md:btn-md text-white font-normal md:px-[2.5em] hover:bg-[#64827f]'>{children}</button>
  )
}

export default Button