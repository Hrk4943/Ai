// import React from 'react';
// import { useForm } from 'react-hook-form';
// import RangeSlider from './RangeSlider';

// const Slider = () => {
//   const { register, setValue, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="container mx-auto my-4">
//       <h1 className="text-xl font-bold mb-4">Range Slider Example</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <RangeSlider
//           label="Range"
//           name="range"
//           defaultValue={[0, 100]}
//           register={register}
//           setValue={setValue}
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Slider;


import React from 'react';
import { JsonForm, registerCustomWidget } from 'react-json-form-schema';
import RangeSliderWidget from './RangeSliderWidget';

registerCustomWidget('rangeSlider', RangeSliderWidget);

// Example form schema
const formSchema = {
  type: 'object',
  properties: {
    range: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: {
        type: 'number',
      },
      widget: 'rangeSlider',
      title: 'Range',
    },
  },
};

// Example form data
const formData = {
  range: [0, 100],
};

const Qwe = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-xl font-bold mb-4">Range Slider Example</h1>
      <JsonForm
        schema={formSchema}
        formData={formData}
        onSubmit={handleSubmit}
        classNames={{
          form: 'space-y-4',
          label: 'block text-sm font-medium text-gray-700',
          input: 'w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
        }}
      />
    </div>
  );
};

export default Qwe;
