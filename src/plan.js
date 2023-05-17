import React, { useState } from 'react';

const Plan = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with selectedOption value
    console.log('Selected Option:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleOptionChange}
          />
          Option 4
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};

export default Plan;
