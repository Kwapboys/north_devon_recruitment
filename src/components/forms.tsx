import React, { useState } from 'react';
import Input from './forms/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from 'react';

const Forms = () => {
    const form =useRef()

    const sendEmail = () =>{};
  const [location, setLocation] = useState('');
  const [testType, setTestType] = useState('');
  const [tuitionType, setTuitionType] = useState('');
  const [amount, setAmount] = useState('');

  const handleLocationChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocation(event.target.value);
    calculateAmount(event.target.value, testType, tuitionType);
  };

  const handleTestTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTestType(event.target.value);
    calculateAmount(location, event.target.value, tuitionType);
  };

  const handleTuitionTypeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTuitionType(event.target.value);
    calculateAmount(location, testType, event.target.value);
  };

  const calculateAmount = (
    selectedLocation: React.SetStateAction<string>,
    selectedTestType: React.SetStateAction<string>,
    selectedTuitionType: React.SetStateAction<string>
  ) => {
    let calculatedAmount = 0;

    if (
      (selectedLocation === 'Ghana' || selectedLocation === 'Abroad') &&
      (selectedTestType === 'GMAT' || selectedTestType === 'GRE' || selectedTestType === 'TOFEL' || selectedTestType === 'IELT')
    ) {
      switch (selectedTuitionType) {
        case 'OnlineP':
          calculatedAmount = 1300;
          break;
        case 'OnlineN':
          calculatedAmount = 600;
          break;
        case 'ClassP':
          calculatedAmount = 1600;
          break;
        case 'ClassN':
          calculatedAmount = 800;
          break;
        default:
          calculatedAmount = 0;
      }
    } else if (selectedLocation === 'Abroad' && selectedTestType === 'OET') {
      switch (selectedTuitionType) {
        case 'OnlineP':
        case 'ClassP':
          calculatedAmount = 250;
          break;
        case 'OnlineN':
        case 'ClassN':
          calculatedAmount = 170;
          break;
        default:
          calculatedAmount = 0;
      }
    }

    setAmount(selectedLocation === 'Abroad' && calculatedAmount !== 0 ? `£ ${calculatedAmount}` : `GH₵ ${calculatedAmount}`);
  };

  return (
    <form>
      <>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label>Name</label>
            <Input type="text" name="user_name" required />
          </div>

          <div>
            <label>Email Address</label>
            <Input type="email" name="user_email" required />
          </div>  
        </section>

        {/* Add some space between the sections */}
        <div style={{ marginBottom: '20px' }}></div>

        <section className="grid grid-cols-2 gap-4">
          <div>
            <label>Contact</label>
            <Input type="tel" name="user_contact" required />
          </div>
          {/* Dropdown within a TextField */}
          <div>
            <label>Select Location</label>
            <TextField
              select
              value={location}
              onChange={handleLocationChange}
              variant="outlined"
              fullWidth
              name = "location"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="Ghana">Ghana</MenuItem>
              <MenuItem value="Abroad">Abroad</MenuItem>
            </TextField>
          </div>
          <div>
            <label>Select test type</label>
            <TextField
              select
              value={testType}
              onChange={handleTestTypeChange}
              variant="outlined"
              fullWidth
              name ="test_type"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="OET">OET</MenuItem>
              <MenuItem value="GMAT">GMAT</MenuItem>
              <MenuItem value="GRE">GRE</MenuItem>
              <MenuItem value="TOFEL">TOFEL</MenuItem>
              <MenuItem value="IELT">IELT</MenuItem>
            </TextField>
          </div>
          <div>
            <label>Type of Tuition</label>
            <TextField
              select
              value={tuitionType}
              onChange={handleTuitionTypeChange}
              variant="outlined"
              fullWidth
              name ="tuition_type"
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="OnlineP">Online - Prestige (3 weeks)</MenuItem>
              <MenuItem value="OnlineN">Online - Normal (2 months)</MenuItem>
              <MenuItem value="ClassP">Class - Prestige (3 weeks)</MenuItem>
              <MenuItem value="ClassN">Class - Normal (2 months)</MenuItem>
            </TextField>
          </div>
          <div>
            <label>Amount to be paid</label>
            <Input type="text" name="Amount" value={amount} readonly />
          </div>
        </section>
      </>
    </form>
  );
};

export default Forms;