{/* <h2 className="text-2xl flex mt-14 justify-center font-bold mb-4">Job Registration</h2>
    <div className="border border-gray-300 mt-8  rounded p-4 sm:p-6 md:p-8">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto sm:w-2/3 lg:w-1/2 xl:w-1/3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="w-full py-2 px-4 border border-gray-300 rounded mt-2"
          {...register('name')}
        />

        <label htmlFor="place">Place</label>
        <input
          type="text"
          id="place"
          className="w-full py-2 px-4 border border-gray-300 rounded mt-2"
          {...register('place')}
        />

        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          className="w-full mb-3 py-2 px-4 border border-gray-300 rounded mt-2"
          {...register('jobTitle')}
        />

        <label htmlFor="salaryRange">Salary Range</label>
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

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  </div>  */}


  import React from 'react';
import PropTypes from 'prop-types';

const RangeSliderWidget = ({ id, label, value, onChange }) => {
  const handleMinChange = (event) => {
    const minValue = parseFloat(event.target.value);
    const newValue = [minValue, value[1]];
    onChange(newValue);
  };

  const handleMaxChange = (event) => {
    const maxValue = parseFloat(event.target.value);
    const newValue = [value[0], maxValue];
    onChange(newValue);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          step="any"
          value={value[0]}
          onChange={handleMinChange}
          className="w-1/2 py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          step="any"
          value={value[1]}
          onChange={handleMaxChange}
          className="w-1/2 py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

RangeSliderWidget.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeSliderWidget;
