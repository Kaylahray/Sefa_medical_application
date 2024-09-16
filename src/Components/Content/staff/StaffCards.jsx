import React from 'react'
import DashboardCard from '../../shared/DashboardCard'
import users from '../../../assets/img/users.svg'


function StaffCards() {
  return (
    <div className='flex flex-row gap-7'>
      
      <DashboardCard className='flex flex-row'>
      <span className='flex flex-row gap-4'>
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
