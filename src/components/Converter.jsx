import React, { useEffect, useState } from "react";
import { fetchExchangeRates } from "../api/exchangeRate";
import CurrencySelector from "./CurrencySelector";

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      const data = await fetchExchangeRates(fromCurrency);
      if (data) {
        setRates(data);
        setCurrencies(Object.keys(data));
      }
    };
    fetchRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  return (
    <div className="p-8 bg-white shadow-xl rounded-2xl max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">
        Currency Converter
      </h2>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">From Currency:</label>
        <CurrencySelector
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          currencies={currencies}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">To Currency:</label>
        <CurrencySelector
          currency={toCurrency}
          setCurrency={setToCurrency}
          currencies={currencies}
        />
      </div>
      {convertedAmount !== null && (
        <div className="text-center mt-6">
          <p className="text-xl font-semibold text-gray-700">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default Converter;
