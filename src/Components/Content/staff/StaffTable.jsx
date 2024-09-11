import React from 'react'
import TableHeader from '../../shared/TableHeader'
import TableBody from '../../shared/TableBody'
import { useContext } from 'react'
import UsersContext from "../../../context/AuthContext";
import { IoMdMore } from "react-icons/io";
import { Link } from 'react'

function StaffTable() {
  const { people, loading } = useContext(UsersContext);
  const users = people.slice(0, 10);
  const handleClick = () => {
    const menu = document.getElementById('moreMenu')
    if(menu.style.display === 'none'){
        menu.style.display = 'block'
    } else{
        menu.style.display = 'none'
    }
}
  return (
    <div>
      <TableHeader>
          <th
                scope="col"
                className="min-w-[] pl-3 "
              >
                I.D
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
                className="pl-3 pr-4 sm:pr-3 rounded-tl-none rounded-t-lg"
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
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
                    />
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {user.id}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    {user.email}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    Doctor
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <span className='bg-activerBgColor text-activeTextColor px-5 py-3 text-center'>Active</span>
                  </td>
                  <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                  <IoMdMore onClick={() =>{handleClick()}} className="cursor-pointer" />
                  <div id="moreMenu" className="hidden absolute right-2 md:right-28 z-10 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                    <div className="py-1">
                      <Link
                        to={'/staff'}
                        className="block px-4 py-2 text-sm border-b hover:bg-[#E4EAEA] "
                      >
                        View
                      </Link>
                      <Link
                        to={'/labs'}
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

    </div>
  )
}

export default StaffTable
