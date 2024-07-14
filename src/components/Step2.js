import React from 'react';

const Step2 = ({ data, updateData }) => {
  return (
    <div id="step2">
      <h2>Step 2: Car Details</h2>
      <label>Car Model:</label>
      <input type="text" id="model" value={data.model} onChange={updateData} />
      <br />
      <label>Car Price:</label>
      <input type="text" id="car_price" value={data.car_price} onChange={updateData} />
    </div>
  );
};

export default Step2;
