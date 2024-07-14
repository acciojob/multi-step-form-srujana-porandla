
import React, {useState} from "react";
import './../styles/App.css';
import Step from './Step';
import Step2 from "./Step2";
import Step3 from "./Step3";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
const [formData, setFormData] = useState({
  first_name: '',
  last_name: '',
  model: '',
  car_price: '',
  card_info: '',
  expiry_date: ''
});

const updateData=()=>{
  setCurrentStep(currentStep+1);
};

const prevStep=()=>{
  setCurrentStep(currentStep-1);
};

const handleChange=(input)=>(e)=>{
  setFormData({...formData,[input]:e.target.value});
};

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(formData);
}
  return (
    <div className="App" >
      <div className="form-container">
        {currentStep === 1 && <Step data={formData} updateData={updateData} />}
        {currentStep === 2 && <Step2 data={formData} updateData={updateData} />}
        {currentStep === 3 && <Step3 data={formData} updateData={updateData} handleSubmit={handleSubmit} />}
        
        {/* Navigation buttons */}
        <div className="buttons">
          {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)}>Previous</button>}
          {currentStep < 3 && <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>}
          {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
    </div>
  )
}

export default App
