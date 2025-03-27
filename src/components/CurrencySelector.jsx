import React from "react";

const CurrencySelector = ({ currency, setCurrency, currencies }) => {
  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="p-2 border rounded-lg"
    >
      {currencies.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector; // ✅ Make sure it's exported as default
