import React from 'react'
import Search from '../../Components/shared/Search'
import Select from '../../Components/shared/Select'
import Button from '../../Components/shared/Button'
import Arrow from '../../assets/arrow_down.svg'




function StaffHeader() {
  return (
    <div className=''>
    <Search />
    <Select/>
  
    <Button>New Staff</Button>

    
    </div>
  )
}

export default StaffHeader
