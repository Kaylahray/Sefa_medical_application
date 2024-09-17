import { Link } from "react-router-dom";
import Card from "../../shared/Card";
import { FaArrowLeft } from "react-icons/fa6";
import InputLabel from "../../shared/InputLabel";
import Button from "../../shared/Button";

const NewMedicationForm = () => {
  const style = {
    margin: "mt-5",
  };
  const width = {
    wid: "w-[45%]",
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   classification: "",
  //   price: "",
  //   quantity: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic
  //   console.log("Form Data Submitted: ", formData);
  // };

  return (
    <div>
      <h2 className="text-xl font-medium mt-3 mb-6">New Medication</h2>
      <Link to={"/pharmacy"} className="mb-5">
        <FaArrowLeft />
      </Link>
      <Card style={style.margin}>
        <form className="px-7 py-7">
          <div className="form-control ">
            <div className=" flex flex-col md:flex-row justify-between">
              <InputLabel title={"Name"} type={"text"} style={width.wid} />
              <InputLabel
                title={"Classification"}
                type={"text"}
                style={width.wid}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4">
              <InputLabel title={"Price"} type={"text"} style={width.wid} />
              <InputLabel title={"Quantity"} type={"text"} style={width.wid} />
            </div>
          </div>
          <div className="flex justify-end pt-3">
            <Button type="submit">Add Medication</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewMedicationForm;
