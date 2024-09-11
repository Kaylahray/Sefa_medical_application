import React from 'react'
import InputLabel from '../../Components/shared/InputLabel'
import StaffHeader from '../../Components/Content/staff/StaffHeader'
import StaffCards from '../../Components/Content/staff/StaffCards'
import StaffTable from '../../Components/Content/staff/StaffTable'

const Staff = () => {
  return (
    <div>
      Staff
      <StaffHeader />
      <StaffCards/>
      <StaffTable/>
      
    </div>
  )
}

export default Staff
