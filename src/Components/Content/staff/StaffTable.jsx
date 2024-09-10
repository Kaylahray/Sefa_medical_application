import React from 'react'
import Table from '../../shared/Table'
import TableHeader from '../../shared/TableHeader'
import TableBody from '../../shared/TableBody'
import { useContext } from 'react'

function StaffTable() {
  return (
    <div>
      <TableHeader>
          <th
                scope="col"
                className="min-w-[] pl-3 "
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3"
              >
                Title
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
                className="pl-3 pr-4 sm:pr-3 rounded-tl-none rounded-t-lg"
              >
                <span>Staff Status</span>
              </th>
      </TableHeader>
      <TableBody>

      import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};







      

    {/* map here */}
      </TableBody>
      <Table className='pt-7' >
        <table className=" mt-20 w-full border-separate border-spacing-y-2 text-tableTextColor">
          <thead className="bg-[#E4EAEA] text-left text-base  font-semibold">
            <tr>
              <th
                scope="col"
                className="relative px-7 py-6 sm:w-12 sm:px-6 rounded-tr-none rounded-t-lg"
              >
                <input
                  type="checkbox"
                  className="absolute left-4 top-1/2 -mt-2 h-4 w-4  rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
                />
              </th>
              
            </tr>
          </thead>

        {/* cut this one and put up in body  */}
          <tbody className="bg-white font-normal text-lg">
            <tr>
              <td className="relative px-3 py-7 sm:w-12 sm:px-6 border-r-0 rounded-s-lg border border-[#E0E0E0]">
                <input
                  type="checkbox"
                  className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
                />
              </td>
              <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                al
              </td>
              <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                alkjhgfdsawertyuiopiklm
              </td>
              <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                alkjhgfdsawertyuiopiklm
              </td>
              <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                alkjhgfdsawertyuiopiklm
              </td>
              <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
               
              </td>
            </tr>
          </tbody>
        </table>
    
      </Table>
    </div>
  )
}

export default StaffTable
