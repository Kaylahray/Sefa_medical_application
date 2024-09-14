import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import TableHeader from "../../shared/TableHeader";
import { Link } from "react-router-dom";
import TableBody from "../../shared/TableBody";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import Spinner from "../../shared/Spinner";
import CurrencyFormatter from "../../shared/CurrencyFormatter";

const HmoSettlementTable = () => {
  const { currentItems, loading } = useContext(UsersContext);
  const users = currentItems;
  const handleClick = () => {
    const menu = document.getElementById("moreMenu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
  return (
    <div className="w-full mt-5 overflow-x-auto">
      <div>
        <p className="text-boldColorText text-base font-semibold ">
          Recognized HMO List
        </p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
          <TableHeader>
            <th>
              <span className="pr-1">HMO Provider</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Patients Covered</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Pending Payment</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Total Amount Paid</span>
              <FaAngleDown className="inline text-sm" />
            </th>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              const { HMO } = user;
              return (
                <tr key={user.id} className="shadow-custom">
                  <td className="relative px-3 py-7 sm:w-12 sm:px-6 border-r-0 rounded-s-lg border border-[#E0E0E0]">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
                    />
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <Link to={`/hmo-settlement-report/${user.id}`}>
                      {HMO.hmoName}
                    </Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <Link to={`/hmo-settlement-report/${user.id}`}>
                      {HMO.patientCovered}
                    </Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    <Link to={`/hmo-settlement-report/${user.id}`}>
                      <CurrencyFormatter amount={HMO.pending} />
                    </Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <Link to={`/hmo-settlement-report/${user.id}`}>
                      <CurrencyFormatter amount={HMO.totalAmountPaid} />
                    </Link>
                  </td>
                  <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                    <IoMdMore
                      onClick={handleClick}
                      className="cursor-pointer"
                    />
                    <div
                      id="moreMenu"
                      className="hidden absolute right-2 z-10 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                    >
                      <div className="py-1">
                        <Link
                          to={`/hmo-settlement-report/${user.id}`}
                          className="block px-4 py-2 text-sm border-b hover:bg-[#E4EAEA] "
                        >
                          View
                        </Link>
                        <Link
                          to={`/hmo-settlement-report/${user.id}`}
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
          </TableBody>
        </table>
      )}
    </div>
  );
};

export default HmoSettlementTable;
