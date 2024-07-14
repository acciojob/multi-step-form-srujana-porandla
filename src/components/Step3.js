import React from 'react';

const Step3 = ({ data, updateData, handleSubmit }) => {
  return (
    <div id="step3">
      <h2>Step 3: Payment Information</h2>
      <label>Card Information:</label>
      <input type="text" id="card_info" value={data.card_info} onChange={updateData} />
      <br />
      <label>Expiry Date:</label>
      <input type="text" id="expiry_date" value={data.expiry_date} onChange={updateData} />
    </div>
  );
};

export default Step3;
