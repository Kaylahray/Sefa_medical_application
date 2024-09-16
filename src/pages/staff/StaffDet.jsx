import React from 'react'
import Card from '../../Components/shared/Card';
import profile from '../../assets/profile.svg'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-dom"

const { id } = useParams();
  const ID = Number(id);


function StaffDet() {

  {currentItems
    .filter((person) => person.id === ID)
    .map((person) => (
      <p className=" mt-5 mb-5 text-boldColorText font-semibold text-2xl">
        {person.patients.firstName} {person.patients.lastName}
      </p>
    ))}

  const style  = {
    width : 'md:w-[45%]'
  }

  return (
    <div>
      <h1>Staff Details</h1>
      <Link to={'/'} ><FaArrowLeft /></Link>
      <Card>
        

    <div class="grid grid-cols- md:grid-cols-2 gap-6">
  
      <div>
        
        <div class="space-y-2 pt-6">
          <p className='text-[10px]'>Position<strong className='text-[14px]' >  <br /> Doctor</strong></p>
          <p className='text-[10px]'>First Name<strong className='text-[14px]' >  <br /> Oluwatobiloba</strong></p>
          <p className='text-[10px]'>Last Name<strong className='text-[14px]'>  <br /> Afolabi</strong></p>
          <p className='text-[10px]' >Gender<strong className='text-[14px]'>  <br /> Male</strong></p>
          <p className='text-[10px]'>Email Address<strong className='text-[14px]'>  <br /> afolabitobi2000@gmail.com</strong></p>
          <p className='text-[10px]'>Phone Number<strong className='text-[14px]'>  <br /> 09091121344</strong></p>
        </div>
      </div>

  
      <div className='flex gap-44 pt-6 ' >
        <div class="space-y-2">
        
          <p className='text-[10px]' >Residential Address<strong className='text-[14px]'>  <br /> 04 Barnawa Close, Barnawa Kaduna</strong></p>
          <p className='text-[10px]'>I.D. Number<strong  className='text-[14px]'>  <br /> 142314</strong></p>
          <p className='text-[10px]'>Patients Attended to<strong  className='text-[14px]'>  <br /> 142</strong></p>
          <p className='text-[10px]'>Year Employed<strong  className='text-[14px]'>  <br /> 27-12-2022</strong></p>
          <p  ><strong></strong> </p>
          <p><strong></strong></p>
        </div>

        
    <div class=" items-center justify-end ">
      <div class="flex flex-col items-center">
      <img src={profile} alt="profile" />
        <div class="ml-4">
          <span class="inline-block px-4 py-1 mt-3 text-sm text-white bg-green-500 rounded-full">Active</span>
        </div>
      </div >
      <button class="px-4 py-2 mt-24 mb-7 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-100">Edit Profile</button>
    </div>

      </div>
    

    
    </div>
  

        
      </Card>
    </div>
  )
}

export default StaffDet
