import React from 'react'
import Card from '../../shared/Card'
import users from '../../../assets/img/users.svg'


function StaffCards() {
  return (
    <div>
      <Card>
        
      <img className='w-7 h-7' src={users} alt="users" />
      <p>Total staff</p>
      <h1>10,000</h1>
      </Card>
    </div>
  )
}

export default StaffCards
