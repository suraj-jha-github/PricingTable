import React from 'react';
import Organization from './Organization';
import Professional from './Professional';
import Starter from './Starter';
import './PricingTable.css'
function App() {
  return (
    <div className="plan-section">
      <Starter />
      <Professional/>
      <Organization />
      
    </div>
  );
}

export default App;
