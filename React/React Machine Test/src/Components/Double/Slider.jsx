import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const JobRegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState([0, 50000]);

  const onSubmit = (data) => {
    console.log(data);
    console.log("Salary Range:", value);
  };

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="relative bg-gray-400 h-screen z-10 container mx-auto px-4 ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className=" w-full lg:w-4/12 px-4">
              <div className="bg-slate-100 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 mt-20">
                <div className="rounded-t mb-0 px-6 py-6"></div>
                <h2 className="text-2xl flex  justify-center font-bold mb-4">Job Registration</h2>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                  <div className="relative mt-4 w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      {...register("name")}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Place
                    </label>
                    <input
                      type="place"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Place"
                      {...register("place")}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Job Title
                    </label>
                    <input
                      type="title"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Job Title"
                      {...register("jobTitle")}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Salary
                    </label>
                    <Slider
                      id="salaryRange"
                      range
                      min={0}
                      max={50000}
                      value={value}
                      onChange={handleSliderChange}
                    />

                    <div className="flex justify-between mt-4">
                      <span>{value[0]}</span>
                      <span>{value[1]}</span>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default JobRegistrationForm;

// import React, { useState } from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

// const PriceRangeSlider = ({ products, setFilteredProducts }) => {
//   const [value, setValue] = useState([0, 100]);

//   const handleChange = (newValue) => {
//     setValue(newValue);
//     filterProducts(newValue);
//   };

//   const filterProducts = (range) => {
//     const filtered = products.filter(
//       (product) => product.price >= range[0] && product.price <= range[1]
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <>
//      <div className=" sm:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
//       <Slider
//         range
//         min={0}
//         max={100}
//         value={value}
//         onChange={handleChange}
//       />
//       <div className="flex justify-between mt-4">
//         <span>{value[0]}</span>
//         <span>{value[1]}</span>
//       </div>
//     </div>
//     </>
//   );
// };

// export default PriceRangeSlider;
