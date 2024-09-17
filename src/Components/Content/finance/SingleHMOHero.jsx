import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa6";
import Select from "../../shared/Select";
import Search from "../../shared/Search";
import DashboardCard from "../../shared/DashboardCard";
import Profit from "../../../assets/img/profit icon.png";
import Patient from "../../../assets/img/patient.svg";
import CurrencyFormatter from "../../shared/CurrencyFormatter";

const SingleHMOHero = () => {
  const { currentItems, people, totalHMOIncome, totalHMOPending } =
    useContext(UsersContext);
  const { id } = useParams();
  const ID = Number(id)
  const style = {
    width: "md:w-64",
  };

  const paitentsCoveredHMO =
    currentItems
      .filter((person) => person.id === ID)
      .reduce((acc, item) => {
        return (acc += item.HMO.patientCovered);
      }, 0) + people.length;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Link to={"/finance/hmo-settlement"} className="text-boldColorText">
          <FaArrowLeft />
        </Link>
        <div className="flex flex-row gap-3 items-center justify-end ">
          <Search />
          <Select />
        </div>
      </div>

      {currentItems
        .filter((person) => person.id === ID)
        .map((person) => (
          <p
            key={person.id}
            className=" mt-5 mb-5 text-boldColorText font-semibold text-2xl"
          >
            {person.HMO.hmoName}
          </p>
        ))}

      <div className="flex flex-col md:flex-row gap-3">
        <DashboardCard style={style.width}>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Patient} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Patients Covered
              </span>

              <p className="text-boldColorText text-3xl font-normal ">
                {paitentsCoveredHMO}
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard style={style.width}>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Profit} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Pending Payments
              </span>
              <p className="text-boldColorText text-3xl font-normal">
                <CurrencyFormatter amount={totalHMOPending} />
              </p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard style={style.width}>
          <div className="flex items-center gap-4 ">
            {/* img div */}
            <div className="img">
              <img src={Profit} alt="patient icon" />
            </div>
            {/* side info inside card */}
            <div className="content">
              <span className="text-dasboardSmalText text-sm font-semibold">
                Total Amount Paid
              </span>
              <p className="text-boldColorText text-3xl font-normal ">
                <CurrencyFormatter amount={totalHMOIncome} />
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default SingleHMOHero;
