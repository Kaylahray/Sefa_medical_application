import HmoSettlement from "../../../Components/Content/finance/HmoSettlement";
import HmoSettlementTable from "../../../Components/Content/finance/HmoSettlementTable";
import Pagination from "../../../Components/shared/Pagination";

const Hmo = () => {
  return (
    <div>
      <HmoSettlement />
      <HmoSettlementTable />
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default Hmo;
