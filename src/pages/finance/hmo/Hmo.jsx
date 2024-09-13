import HmoSettlement from "../../../Components/Content/finance/HmoSettlement";
import HmoSettlementTable from "../../../Components/Content/finance/HmoSettlementTable";
import Pagination from "../../../Components/shared/Pagination";

const Hmo = () => {
  return (
    <div>
      <HmoSettlement />
      <HmoSettlementTable />
      <div className="">
        <Pagination totalItems={100000} itemsPerPage={10} />
      </div>
    </div>
  );
};

export default Hmo;
