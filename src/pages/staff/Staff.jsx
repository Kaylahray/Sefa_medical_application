import React from 'react'
import StaffHeader from '../../Components/Content/staff/StaffHeader'
import StaffCards from '../../Components/Content/staff/StaffCards'
import StaffTable from '../../Components/Content/staff/StaffTable'


const Staff = () => {
  return (
    <div>
      <div className='flex flex-row gap-96'>
        <h1>Staff</h1>
        <StaffHeader />
      </div>        
      <StaffCards/>
      <StaffTable/>
      
      
    </div>
  )
}

export default Staff
