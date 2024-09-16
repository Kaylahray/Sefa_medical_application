import React from 'react'
import Search from '../../shared/Search'
import Select from '../../shared/Select'
import Button from '../../shared/Button'
import { Link } from 'react-router-dom'





function StaffHeader() {
  return (
    <div className='flex flex-row gap-6 '>
    <div>
      <Search />
      <Select/>
    
      <Button><Link to={'/staff/newstaff'}>New Staff</Link></Button>
  
      
    </div>
    </div>
  )
}

export default StaffHeader
