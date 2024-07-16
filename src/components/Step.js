import React from 'react';

const Step = ({ currentStep, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  const { first_name, last_name, model, car_price, card_info, expiry_date } = formData;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div id="step1">
            <h3>Personal Information</h3>
            <label>First Name:</label>
            <input type="text" id="first_name" value={first_name} onChange={handleChange('first_name')} />
            <br />
            <label>Last Name:</label>
            <input type="text" id="last_name" value={last_name} onChange={handleChange('last_name')} />
          </div>
        );
      case 2:
        return (
          <div id="step2">
            <h3>Car Details</h3>
            <label>Car Model:</label>
            <input type="text" id="model" value={model} onChange={handleChange('model')} />
            <br />
            <label>Car Price:</label>
            <input type="text" id="car_price" value={car_price} onChange={handleChange('car_price')} />
          </div>
        );
      case 3:
        return (
          <div id="step3">
            <h3>Payment Information</h3>
            <label>Card Information:</label>
            <input type="text" id="card_info" value={card_info} onChange={handleChange('card_info')} />
            <br />
            <label>Expiry Date:</label>
            <input type="text" id="expiry_date" value={expiry_date} onChange={handleChange('expiry_date')} />
          </div>
        );
      default:
        return null;
    }
  };

  const renderButtons = () => {
    if (currentStep === 1) {
      return <button type="button" className="next" onClick={nextStep}>Next</button>;
    } else if (currentStep === 3) {
      return (
        <div>
          <button type="button" className="prev" onClick={prevStep}>Previous</button>
          <button type="button" className="submit" onClick={handleSubmit}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <button type="button" className="prev" onClick={prevStep}>Previous</button>
          <button type="button" className="next" onClick={nextStep}>Next</button>
        </div>
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStep()}
      <br />
      {renderButtons()}
    </form>
  );
};

export default Step;
