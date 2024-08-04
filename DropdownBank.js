import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedBank(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="selected-bank" onClick={handleDropdownToggle}>
        {selectedBank || 'Select your bank'}
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-options">
          <li onClick={() => handleOptionSelect('NatWest')}>NatWest</li>
          <li onClick={() => handleOptionSelect('Barclays')}>Barclays</li>
          <li onClick={() => handleOptionSelect('Lloyds')}>Lloyds</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownBank;