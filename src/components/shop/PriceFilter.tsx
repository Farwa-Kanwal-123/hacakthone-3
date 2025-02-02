// "use client"

// interface PriceFilterProps {
//   minPrice: number
//   maxPrice: number
//   setMinPrice: (price: number) => void
//   setMaxPrice: (price: number) => void
// }

// export function PriceFilter({ minPrice, maxPrice, setMinPrice, setMaxPrice }: PriceFilterProps) {
//   return (
//     <>
//       <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">Filter By Price</h2>
//       <input
//         type="range"
//         min={500}
//         max={2000}
//         value={minPrice}
//         onChange={(e) => setMinPrice(Number(e.target.value))}
//         className="bg-yellow-300 w-[200px] mb-2"
//       />
//       <input
//         type="range"
//         min={500}
//         max={2000}
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(Number(e.target.value))}
//         className="bg-yellow-300 w-[200px]"
//       />
//       <div className="font-inter text-[17px] text-gray-400 w-[200px] flex justify-between mb-2">
//         <div>
//           From ${minPrice} to ${maxPrice}
//         </div>
//         <button className="text-[#FF9F0D] hover:underline">Filter</button>
//       </div>
//     </>
//   )
// }






// "use client"

// import { useState, useEffect } from "react"

// interface PriceFilterProps {
//   minPrice: number
//   maxPrice: number
//   setMinPrice: (price: number) => void
//   setMaxPrice: (price: number) => void
// }

// export function PriceFilter({ minPrice, maxPrice, setMinPrice, setMaxPrice }: PriceFilterProps) {
//   const [localMin, setLocalMin] = useState(minPrice)
//   const [localMax, setLocalMax] = useState(maxPrice)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMinPrice(localMin)
//       setMaxPrice(localMax)
//     }, 500)

//     return () => clearTimeout(timer)
//   }, [localMin, localMax, setMinPrice, setMaxPrice])

//   return (
//     <>
//       <h2 className="font-helvetica text-[20px] font-bold mt-2 mb-2">Filter By Price</h2>
//       <div className="flex items-center space-x-2 mb-2">
//         <input
//           type="number"
//           value={localMin}
//           onChange={(e) => setLocalMin(Number(e.target.value))}
//           className="w-20 px-2 py-1 border border-gray-300 rounded"
//           min={0}
//           max={localMax}
//         />
//         <span>to</span>
//         <input
//           type="number"
//           value={localMax}
//           onChange={(e) => setLocalMax(Number(e.target.value))}
//           className="w-20 px-2 py-1 border border-gray-300 rounded"
//           min={localMin}
//           max={8000}
//         />
//       </div>
//       <input
//         type="range"
//         min={500}
//         max={2000}
//         value={localMax}
//         onChange={(e) => setLocalMax(Number(e.target.value))}
//         className="w-full bg-yellow-300"
//       />
//       <div className="font-inter text-[17px] text-gray-400 w-full flex justify-between mt-2">
//         <div>
//           ${localMin} - ${localMax}
//         </div>
//         <button className="text-[#FF9F0D] hover:underline">Filter</button>
//       </div>
//     </>
//   )
// }





"use client"

import { useState, useEffect } from "react"

interface PriceFilterProps {
  minPrice: number
  maxPrice: number
  setMinPrice: (price: number) => void
  setMaxPrice: (price: number) => void
}

export function PriceFilter({ minPrice, maxPrice, setMinPrice, setMaxPrice }: PriceFilterProps) {
  const [localMin, setLocalMin] = useState(minPrice)
  const [localMax, setLocalMax] = useState(maxPrice)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinPrice(localMin)
      setMaxPrice(localMax)
    }, 500)

    return () => clearTimeout(timer)
  }, [localMin, localMax, setMinPrice, setMaxPrice])

  return (
    <div className="mt-6 mb-4">
      <h2 className="font-helvetica text-[20px] font-bold mb-3">Filter By Price</h2>
      <div className="flex items-center space-x-2 mb-2">
        <input
          type="number"
          value={localMin}
          onChange={(e) => setLocalMin(Number(e.target.value))}
          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
          min={100}
          max={localMax}
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          value={localMax}
          onChange={(e) => setLocalMax(Number(e.target.value))}
          className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
          min={localMin}
          max={500}
        />
      </div>
      <input
        type="range"
        min={100}
        max={500}
        value={localMax}
        onChange={(e) => setLocalMax(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm text-gray-600">
          ${localMin} - ${localMax}
        </div>
        <button className="text-sm text-[#FF9F0D] hover:underline font-semibold">Filter</button>
      </div>
    </div>
  )
}

