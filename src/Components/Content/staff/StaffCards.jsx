import React from 'react'
import DashboardCard from '../../shared/DashboardCard'
import users from '../../../assets/img/users.svg'


function StaffCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-5'>
      
      <DashboardCard >
      <span className='flex flex-row gap-4 item-center'>
        <img className='w-10 h-10' src={users} alt="users" />
        <span>
            <p className='text-[15px]'>Total staff</p>
            <h1 className='text-[30px]'>10,000</h1>
        </span>
      </span>
      </DashboardCard>

      <DashboardCard>
      <span className='flex flex-row gap-4'>
      <img className='w-10 h-10' src={users} alt="users" />
      <span>
          <p className='text-[15px]'>Nurse on Duty</p>
          <h1 className='text-[30px]'>10,000</h1>
      </span>
      </span>
      </DashboardCard>

      <DashboardCard>
      <span className='flex flex-row gap-4'>
      <img className='w-10 h-10' src={users} alt="users" />
      <span>
          <p className='text-[15px]'>Doctor on Duty</p>
          <h1 className='text-[30px]'>10,000</h1>
      
      </span>
      </span>
      </DashboardCard>

      <DashboardCard>
      <span className='flex flex-row gap-4'>
      <img className='w-10 h-10' src={users} alt="users" />
      <span>
          <p className='text-[15px]'>Active Staff</p>
          <h1 className='text-[30px]'>10,000</h1>
      <p className='text-[#03A300] text-xs' >15% of staff</p>
      </span>
      </span>
      </DashboardCard>

      <DashboardCard>
      <span className='flex flex-row gap-4'>
      <img className='w-10 h-10' src={users} alt="users" />
      <span>
          <p className='text-[15px]'>Inactive Staff</p>
          <h1 className='text-[30px]'>10,000</h1>
      <p className='text-[#03A300] text-xs' >15% of staff</p>
      </span>
      </span>
      </DashboardCard>
    </div>
  )
}

export default StaffCards
