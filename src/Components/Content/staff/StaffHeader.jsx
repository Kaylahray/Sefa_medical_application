import React from 'react'
import Search from '../../shared/Search'
import Select from '../../shared/Select'
import Button from '../../shared/Button'





function StaffHeader() {
  return (
    <div className='flex flex-row gap-20'>
    <Search />
    <Select/>
  
    <Button>New Staff</Button>

    
    </div>
  )
}

export default StaffHeader
