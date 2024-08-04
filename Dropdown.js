import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedAccount(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="selected-account" onClick={handleDropdownToggle}>
        {selectedAccount || 'Select an account'}
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-options">
          <li onClick={() => handleOptionSelect('65XXXX3d77')}>65XXXX3d77</li>
          <li onClick={() => handleOptionSelect('90XXXX4a91')}>90XXXX4a91</li>
          <li onClick={() => handleOptionSelect('23XXXX9f21')}>23XXXX9f21</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;