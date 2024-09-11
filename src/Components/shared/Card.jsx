import React from 'react'

const Card = ({children, style}) => {
  return (
    <div className={`card bg-white card-compact border border-[#E0E0E0] rounded-lg px-3 ${style}`}>
        {children}
    </div>
  )
}

export default Card