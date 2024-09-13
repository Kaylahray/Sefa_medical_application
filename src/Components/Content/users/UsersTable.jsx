import { useContext } from "react";
import UsersContext from "../../../context/UsersTableContext";
import TableHeader from "../../shared/TableHeader";
import TableBody from "../../shared/TableBody";
import Spinner from "../../shared/Spinner";
import { IoMdMore } from "react-icons/io";

const UsersTable = () => {
  const { people, loading } = useContext(UsersContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  const slicedUsers = people.slice(0, 10);

  return (
    <div className="w-full overflow-x-auto ">
      <h1>Users</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
          <TableHeader>
            <th>
              <span className="pr-1">I.D</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1"> Name</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1">Email Address</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1">Role</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1">User Status</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
          </TableHeader>
          <TableBody>
            {people.map((user) => {
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
                    {user.name}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    {user.email}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    {user.role}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    {user.status}
                  </td>

                  <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                    <IoMdMore className="cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </TableBody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
