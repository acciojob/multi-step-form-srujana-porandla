/*import React from "react";

const Step=({currentStep,formData,prevStep,nextStep,handleChange,handleSubmit})=>{
    const {first_name, last_name,model,car_price,card_info,expiry_date}=formData;
    const renderStep=()=>{
        switch(currentStep){
            case 1:
                return (
                    <div id="step1">
                         <h2>Customer Details</h2>
                        <label>First Name:</label>
                        <br/>
                        <input type="text" id="first_name" value={first_name} onChange={handleChange(`first_name`)} />
                        <br />
                        <br/>
                        <label>Last Name:</label>
                        <br/>
                        <input type="text" id="last_name" value={last_name} onChange={handleChange('last_name')} />
                    </div>
                 );
            case 2:
            return (
                  <div id="#step2">
                   <h2>Car Details</h2>
                   <label>Car Model:</label>
                     <br/>
                    <input type="text" id="model" value={model} onChange={handleChange('model')} />
                    <br />
                    <br />
                    <label>Car Price:</label>
                   <br/>
                   <input type="text" id="car_price" value={car_price} onChange={handleChange('car_price')} />
                 </div>
            );
           case 3:
           return (
          <div id="step3">
            <h2>Payment Details:</h2>
            <label>Crredit Card Number:</label>
            <br/>
            <input type="number" id="card_info" value={card_info} onChange={handleChange('card_info')} />
            <br />
            <br />
            <label>Expiration Date:</label>
            <br/>
            <input type="month" id="expiry_date" value={expiry_date} onChange={handleChange('expiry_date')} />
          </div>
        );
      default:
        return null;
    }
  };

  const renderButtons = () => {
    if (currentStep === 1) {
      return <button onClick={nextStep}>Next</button>;
    } else if (currentStep === 3) {
      return (
        <div>
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
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

export default Step;*/
import React from 'react';

const Step1 = ({ data, updateData }) => {
  return (
    <div className="step">
      <h2>Personal Information</h2>
      <label>First Name:</label>
      <input type="text" id="first_name" value={data.first_name} onChange={updateData} />
      <br />
      <label>Last Name:</label>
      <input type="text" id="last_name" value={data.last_name} onChange={updateData} />
    </div>
  );
};

export default Step1;

            
        
            
        
    
