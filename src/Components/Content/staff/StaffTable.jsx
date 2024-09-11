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
    <div className='w-full overflow-x-auto'>
      <table>
      <TableHeader>
          <th
                scope="col"
                className=" pl-3 "
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
     {console.log(users)}
      </TableBody>
      </table>
    </div>
  )
}

export default StaffTable
