import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import TableHeader from "../../shared/TableHeader";
import TableBody from "../../shared/TableBody";
import { FaAngleDown } from "react-icons/fa6";
import Pagination from "../../shared/Pagination";
import CurrencyFormatter from "../../shared/CurrencyFormatter";

const PatientsReportsTotalPaid = () => {
  const { currentItems } = useContext(UsersContext);
  const users = currentItems;
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
        <TableHeader hidden={true}>
          <th>
            <span className="pr-1">Paid For</span>
            <FaAngleDown className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Amount</span>
            <FaAngleDown className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Date Of Payment</span>
            <FaAngleDown className="inline text-sm" />
          </th>
          <th>
            <span className="pr-1">Time</span>
            <FaAngleDown className="inline text-sm" />
          </th>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const { lab } = user;
            return (
              <tr key={user.id} className="shadow-custom">
                <td className="relative px-3 py-7 sm:w-12 sm:px-6 border-r-0 rounded-s-lg border border-[#E0E0E0]">
                  
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                  {lab.name}
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                  <CurrencyFormatter amount={lab.amount} />
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                  {lab.date}
                </td>
                <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                  {lab.time}
                </td>
                <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0"></td>
              </tr>
            );
          })}
        </TableBody>
      </table>
      <Pagination />
    </div>
  );
};

export default PatientsReportsTotalPaid;
