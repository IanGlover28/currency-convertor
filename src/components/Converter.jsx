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
    <div className="p-6 bg-gray-100 shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
      <div className="mb-3">
        <CurrencySelector
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          currencies={currencies}
        />
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-3 border rounded-lg"
      />
      <div className="mb-3">
        <CurrencySelector
          currency={toCurrency}
          setCurrency={setToCurrency}
          currencies={currencies}
        />
      </div>
      {convertedAmount !== null && (
        <p className="text-lg font-semibold">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default Converter;
