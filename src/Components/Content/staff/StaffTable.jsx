import React from 'react'
import Table from '../../shared/Table'
import TableHeader from '../../shared/TableHeader'
import TableBody from '../../shared/TableBody'
import UsersContext from "../../../context/AuthContext";
import { useContext } from 'react';
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/shared/Pagination";


function StaffTable() {
  const { people } = useContext(UsersContext);
  const users = people.slice(0,10);
  const handleClick = () => {
    const menu = document.getElementById('moreMenu')
    if(menu.style.display === 'none'){
        menu.style.display = 'block'
    } else{
        menu.style.display = 'none'
    }
}
  return (
    <div className="w-full overflow-x-auto mt-5">
      <p>Staff list</p>
      <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
        <TableHeader>
            <th
                  scope="col"
                  className="min-w-[] pl-3 "
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-3"
                >
                  Name
                </th>
                <th scope="col" className="px-3">
                  Email Address
                </th>
                <th
                  scope="col"
                  className="px-3"
                >
                  Staff position
                </th>
                <th
                  scope="col"
                  className="px-3"
                >
                  <span>Staff Status</span>
                </th>
        </TableHeader>
        <TableBody>
        {users.map((user) => {
              return (
              <tr key={user.id}>
                <td className="relative px-3 py-7 sm:w-12 sm:px-6 border-r-0 rounded-s-lg border border-[#E0E0E0]">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#b17373] text-indigo-600 focus:ring-indigo-600"
                  />
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                <Link to={'staff/staffdet'} >{user.firstName } {user.lastName}</Link>
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                  <Link to={'staff/staffdet'}>{user.email}</Link>
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
              <Link to={'staff/staffdet'} >{user.position}</Link>
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                  <Link to={'staff/staffdet'} >{user.status}</Link>
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0">
                <Link to={'staff/staffdet'}> <span className='bg-activeTextColor px-4 py-2 rounded-2xl'>Active</span> 
                <span className='bg-inactiveTextColor px-4 py-2 rounded-2xl'>Inactive</span> </Link>
                </td>
                <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                <IoMdMore onClick={() =>{handleClick()}} className="cursor-pointer" />
              <div id="moreMenu" className="hidden absolute right-2 md:right-28 z-10 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                <div className="py-1">
                  <Link
                    to={'/'}
                    className="block px-4 py-2 text-sm border-b hover:bg-[#E4EAEA] "
                  >
                    View
                  </Link>
                  <Link
                    to={'/'}
                    className="block px-4 py-2 text-sm hover:bg-[#E4EAEA]"
                  >
                    Edit
                  </Link>
                </div>
              </div>
                </td>
              </tr>
              );
            })}

    

      {/* map here */}
        </TableBody>

      </table>


      <div class="flex justify-end text-xs">
      <Pagination />
            </div>
    
    </div>
  )
}

export default StaffTable
