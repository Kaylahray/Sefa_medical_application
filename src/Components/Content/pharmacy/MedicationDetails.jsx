import { useParams } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import CurrencyFormatter from "../../shared/CurrencyFormatter";
import Card from "../../shared/Card";
import { FaArrowLeft } from "react-icons/fa6";

const MedicationDetails = () => {
  const style = {
    margin: "mt-5",
  };
  const { currentItems } = useContext(UsersContext);
  const users = currentItems;
  const { id } = useParams();
  const ID = Number(id);
  return (
    <div>
      <h2 className="text-xl font-medium mt-3 mb-6">
        {users
          .filter((person) => person.id === ID)
          .map((person) => (
            <p className=" mt-5 mb-5 text-boldColorText font-semibold text-2xl">
              {person.pharmacy.name}
            </p>
          ))}
      </h2>
      <Link to={"/pharmacy"} className="mb-5">
        <FaArrowLeft />
      </Link>
      <Card style={style.margin}>
        <div className="px-5 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {users
              .filter((person) => person.id === ID)
              .map((person) => {
                const { pharmacy } = person;
                return (
                  <>
                    <div>
                      <p className="text-lightColorText text-sm font-semibold">
                        Price
                      </p>
                      <p className="text-boldColorText font-normal mt-1.5">
                        <CurrencyFormatter amount={pharmacy.price} />
                      </p>
                    </div>
                    <div>
                      <p className="text-lightColorText text-sm font-semibold">
                        Category
                      </p>
                      <p className="text-boldColorText font-normal mt-1.5">
                        {pharmacy.classification}
                      </p>
                    </div>
                    <div className="mx-auto">
                      <p className="text-lightColorText text-sm font-semibold">
                        Quantity Available
                      </p>
                      <p className="text-boldColorText font-normal mt-1.5">
                        {pharmacy.quantity_avaliable}
                      </p>
                    </div>
                    <div className="ml-auto inline-flex h-6 capitalize font-normal">
                      <p
                        className={`  ${
                          pharmacy.status === "avaliable"
                            ? "bg-activerBgColor text-activeTextColor px-5"
                            : "bg-inactiveBgColor text-inactiveTextColor px-3"
                        }`}
                      >
                        {pharmacy.status}
                      </p>
                      <span className="bg-[#F5EFEE] rounded ml-1 pb-6 px-1">
                        <FaAngleDown className="inline" />
                      </span>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="flex justify-end mt-5">
            <Link to={"#"} className="text-[#516563] font-normal text-sm pl-3">
              <CiEdit className="inline text-lg" /> Edit Medication
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MedicationDetails;
