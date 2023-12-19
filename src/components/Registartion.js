import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../utility';

function Registartion() {
  const Navigate=useNavigate();

    const handleSubmitForm=async (e)=>{
         
        e.preventDefault();
        const data= new FormData(e.currentTarget);
        //console.log(data);
        
        const actualData={
           name:data.get('name'),
           email:data.get('email'),
           password:data.get('password'),
           age:data.get('age'),
        }
        if(actualData.name&&actualData.email&&actualData.password&&actualData.age){
             
            if(actualData.age<18||actualData.age>65){
                alert('Age should be between 18-65');
                return;
            }

            try {
              const res=await api.post('/api/register',actualData);

            if(res.status=='failed'){


            }else{
              Navigate('/login');
            }
            } catch (error) {
              
            }
           
        }
    }
  return (
    <div>
        <div class="flex">
  
  <div class="flex-1 bg-gray-100 h-screen">
    
    <img src="data:image/jpeg;base64,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" alt="Yoga" class="h-full object-cover"/>
  </div>

  
  <div class="flex-1 bg-white p-10">
    <h2 class="text-2xl font-semibold mb-6">Register</h2>
    <form class="space-y-4" onSubmit={handleSubmitForm}>
      <div>
        <label for="name" class="block mb-1">Name</label>
        <input type="text" id="name" name="name" class="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input type="email" id="email" name="email" class="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <input type="password" id="password" name="password" class="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"/>
      </div>
      <div>
        <label for="age" class="block mb-1">Age (18-65)</label>
        <input type="number" id="age" name="age" min="18" max="65" class="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"/>
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Register</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Registartion