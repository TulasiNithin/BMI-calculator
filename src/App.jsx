import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './App.css';

function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    } else {
      alert('Please enter valid weight and height');
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="main">
      <h1 id="heading">BMI CALCULATOR</h1>
      <div className="input">
        <TextField
          id="weight"
          label="Weight (kg)"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          id="height"
          label="Height (cm)"
          variant="outlined"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="button-group">
        <Button variant="contained" color="primary" onClick={calculateBMI}>
          Calculate
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default BMI;
