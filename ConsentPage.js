import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import Dropdown from './Dropdown'; // Import the Dropdown component

const ConsentPage = () => {
  const navigate = useNavigate();
  const { totalCost } = useLocation().state;
  const { updateIsAuthenticated, updateHasConsented } = useContext(AuthContext);

  const [selectedAccount, setSelectedAccount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateIsAuthenticated(true);
    updateHasConsented(true);
    navigate('/checkout', { state: { totalCost, selectedAccount } });
  };

  return (
    <div className="consent-container">
      <h2>Consent</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Dropdown
            selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="consent-checkbox" required />
          <label htmlFor="consent-checkbox">
            I agree to the terms and conditions and consent to the processing of
            my account.
          </label>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ConsentPage;