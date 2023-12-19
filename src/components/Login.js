import axios from 'axios';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { storeToken } from '../sevices/localStorage';
import { api } from '../utility';

function Login() {
  const Navigate = useNavigate();
  const [responseMessage, setResponseMessage] = React.useState('');


  const handlelogin = async (e) => {

    try {
      e.preventDefault()

      const data = new FormData(e.currentTarget);
      //console.log(data);
      const actualData = {
      
        email: data.get('email'),
        password: data.get('password'),
        
      }
      console.log(actualData);
      let res = await api.post('/api/login', actualData);
      console.log(res);
      if (res.status == 400) {
        setResponseMessage('Bad Request');

      } else if (res.status == 401) {
        setResponseMessage('Unauthorized');

      } else {
        const token = res.data.token;
        storeToken(token);
        Navigate('/enrollments');
      }
    } catch (error) {
      setResponseMessage('An error occurred');

    }

  }
  return (
    <div>
      <div class="flex">

        <div class="flex-1 bg-gray-100 h-screen">

          <img src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanth-inturi-1051838.jpg&fm=jpg" alt="Yoga" class="h-full object-cover" />
        </div>


        <div class="flex-1 bg-white p-10">
          <h2 class="text-2xl font-semibold mb-6">Login</h2>
          <form class="space-y-4" onSubmit={handlelogin}>
            <div>
              <label for="email" class="block mb-1">Email</label>
              <input type="email" id="email" name="email" class="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label for="password" class="block mb-1">Password</label>
              <input type="password" id="password" name="password" class="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Login</button>
          </form>
        </div>
      </div>
      {responseMessage && (
        <div className="mt-4 p-4 bg-gray-100 text-red-600">
          {responseMessage}
        </div>
      )}
    </div>
  )
}

export default Login