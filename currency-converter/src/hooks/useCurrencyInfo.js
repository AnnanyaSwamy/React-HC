import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null); // Optional: Add error handling

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData[currency]);
        setData(jsonData[currency]);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  console.log(data); // For debugging

  if (error) {
    console.error("Error fetching currency data:", error);
  }

  return data;
}

export default useCurrencyInfo;
