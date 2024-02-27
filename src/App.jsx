
import React from 'react'

const App = () => {
  return (
    <div className='bg-[#D6E2F0] min-h-screen text-center flex justify-center items-center '>
      {/* card */}
      <div className='bg-white w-[300px] h-[430px] shadow-xl rounded-xl'>
        <header className='w-[280px] mx-auto my-3 '>
          <img src="image-qr-code.png" className='rounded-lg w-[280px]' alt="" />
        </header>
        {/* body */}
        <div className='mt-4 mx-7'>
          <body>
            <h1 className='text-[#1F3251] font-bold text-lg leading-5'>Improve your front-end skills by building projects</h1>
            <p className='text-[#7B879D] text-center mt-3 text-xs mx-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </body>
        </div>

      </div>

      

    </div>
  )
}

export default App