import React from 'react'

const Card = ({children}) => {
  return (
    <div className='w-full card bg-white card-compact border border-[#E0E0E0] rounded-lg px-3 py-4 '>
        {children}
    </div>
  )
}

export default Card