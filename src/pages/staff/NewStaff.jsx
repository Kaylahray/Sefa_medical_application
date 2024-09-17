import React from "react";
import InputLabel from "../../Components/shared/InputLabel";
import Card from "../../Components/shared/Card";
import Button from "../../Components/shared/Button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewStaff() {
  const style = {
    width: "md:w-[90%]",
  };

  return (
    <div className="">
      <h1 className="mb-3 text-lg font-semibold text-boldColorText">
        New Staff
      </h1>
      <Link to={"/staff"}>
        <FaArrowLeft />
      </Link>
      <Card style={"mt-5"}>
        <div className="grid grid-cols-2 px-3 py-5">
          <div className="">
            <div>
              <InputLabel title={"First Name"} style={style.width} />
            </div>

            <div>
              <InputLabel title={"Position"} style={style.width} />
            </div>

            <div>
              <InputLabel title={"Email Address"} style={style.width} />
            </div>
            <div>
              <h1>Residential Address</h1>
              <InputLabel style={style.width}></InputLabel>
            </div>
          </div>

          <div>
            <div>
              <h1>Last Name</h1>
              <InputLabel style={style.width}></InputLabel>
            </div>

            <div>
              <h1>Gender</h1>
              <InputLabel style={style.width}></InputLabel>
            </div>

            <div>
              <h1>Phone Number</h1>
              <InputLabel style={style.width}></InputLabel>
            </div>
            <div>
              <h1>Year Employed</h1>
              <InputLabel style={style.width}></InputLabel>
            </div>

            <div className="flex justify-end ">
              <Button>Create Profile</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NewStaff;
