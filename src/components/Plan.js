import React from 'react'
import { getToken } from '../sevices/localStorage'

function Plan({setBatch,setPayment}) {
  const token=getToken();

  const handlePayment=async()=>{
    console.log('HIII');
    setPayment(true)
    alert('Payment Successfull. Now you can Enroll to the batch');
  }
  const handleBatchChange=(e)=>{
    setBatch(e.target.value);
  }
  return (
    <div>
        <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Select Your Batch</h2>

      <div class="w-full inline-block relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={handleBatchChange}>
          <option>Choose Batch</option>
          <option value="6-7AM">6-7AM Batch</option>
          <option value="7-8AM">7-8AM Batch</option>
          <option value="8-9AM">8-9AM Batch</option>
          <option value="5-6PM">5-6PM Batch</option>
        </select>

        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 11l3 3m0 0l3-3m-3 3V2"></path></svg>
        </div>
      </div>
    </div>

    
    <div>
      <button class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300" onClick={handlePayment}>Pay $500</button>
      
      
    </div>

    </div>
  )
}

export default Plan