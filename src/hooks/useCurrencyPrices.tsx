import { useMemo } from 'react';

const currencyRates = {
  AED: 1,
  $: 0.27,
  '€': 0.25,
  '฿': 0.000007,
  '₽': 0.0001,
  OMR: 0.01,
  '¥': 0.12,
  IDR: 1.12,
  '£': 0.22,
};

const priceOptionsAED = [500000, 1000000, 1500000, 3000000, 5000000, 8000000];

export const useCurrencyPrices = (
  selectedCurrency: keyof typeof currencyRates
) => {
  return useMemo(() => {
    const rate = currencyRates[selectedCurrency] || 1;
    return priceOptionsAED.map((price) => (price * rate).toFixed(2));
  }, [selectedCurrency]);
};

// export const CurrencyPriceTab = () => {
//   const [selectedCurrency, setSelectedCurrency] =
//     useState<keyof typeof currencyRates>('AED');
//
//   return (
//     <div>
//       <h4 className="text-sm font-medium mb-2">Валюта</h4>
//       <div className="flex flex-nowrap w-full divide-x border rounded-md">
//         {Object.keys(currencyRates).map((currency) => (
//           <button
//             key={currency}
//             className={`px-4 py-2 ${selectedCurrency === currency ? 'bg-blue-100' : ''}`}
//             onClick={() =>
//               setSelectedCurrency(currency as keyof typeof currencyRates)
//             }
//           >
//             {currency}
//           </button>
//         ))}
//       </div>
//
//       <div className="grid grid-cols-2 gap-2 mt-4">
//         {useCurrencyPrices(selectedCurrency).map((price, index) => (
//           <div key={index} className="p-2 border rounded-md text-center">
//             {price} {selectedCurrency}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
