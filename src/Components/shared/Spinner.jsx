import { DNA } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center" >
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Spinner;
