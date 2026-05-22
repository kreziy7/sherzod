import React, { useState } from 'react'

const App = () => {
  const [activeColor, setActiveColor] = useState(null)

  return (
    <div>
      <div className="bg-blue-950 p-4 min-h-screen flex flex-col items-center justify-center">
        <div className=" text-center border-2 border-gray-300 p-4 w-[175px] h-[300px] rounded-2xl gap-[30px] flex flex-col items-center justify-center mx-auto">

          <div className={`rounded-full p-4 h-16 w-16 flex items-center justify-center ${activeColor === 'red' ? 'bg-red-500' : 'bg-gray-200'}`}>
            {/* 1st circle */}
          </div>

          <div className={`rounded-full p-4 h-16 w-16 flex items-center justify-center ${activeColor === 'yellow' ? 'bg-yellow-500' : 'bg-gray-200'}`}>
            {/* 2nd circle */}
          </div>

          <div className={`rounded-full p-4 h-16 w-16 flex items-center justify-center ${activeColor === 'green' ? 'bg-green-500' : 'bg-gray-200'}`}>
            {/* 3rd circle */}
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          {/* buttons */}
          <button onClick={() => setActiveColor('red')} className="bg-red-500 text-white p-2 rounded-md transition duration-300 hover:bg-red-600 duration-300">Red</button>
          <button onClick={() => setActiveColor('yellow')} className="bg-yellow-500 text-white p-2 rounded-md transition duration-300 hover:bg-yellow-600 duration-300">Yellow</button>
          <button onClick={() => setActiveColor('green')} className="bg-green-500 text-white p-2 rounded-md transition duration-300 hover:bg-green-600 duration-300">Green</button>
        </div>

      </div>
    </div>
  )
}

export default App