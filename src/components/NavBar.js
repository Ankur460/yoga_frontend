import React from 'react'
import { getToken } from '../sevices/localStorage'

function NavBar() {
  
  return (
    <div>
        
<nav class="bg-gray-800 py-4">
  <div class="container mx-auto flex justify-between items-center">
    
    <a href="#" class="text-white text-2xl font-bold">YourApp</a>

    
    <div class="space-x-6">
      <a href="/" class="text-white hover:text-gray-300 transition duration-300">Home</a>
      <a href="#" class="text-white hover:text-gray-300 transition duration-300">About</a>
      <a href="#" class="text-white hover:text-gray-300 transition duration-300">Services</a>
      <a href="#" class="text-white hover:text-gray-300 transition duration-300">Contact</a>
    </div>
  
  
    
    <div class="space-x-4">
      <a href="/registration" class="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded transition duration-300">Register</a>
      <a href="/login" class="text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded transition duration-300">Login</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar