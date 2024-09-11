import OverviewHero from "../../Components/Content/overview/OverviewHero";
import OverviewTable from "../../Components/Content/overview/OverviewTable";
import OverviewChart from "../../Components/Content/overview/OverviewChart";

const OverviewPage = () => {
  return (
    <div className="md:mt-20">
      <OverviewHero />
      <OverviewChart />
      <OverviewTable />
    </div>
  );
};

export default OverviewPage;
