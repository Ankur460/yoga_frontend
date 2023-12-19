import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getToken, removeToken, storeToken } from '../sevices/localStorage';
import Plan from './Plan';
import { useNavigate } from 'react-router-dom';
import { api } from '../utility';
function Enrollment() {

const [enrolled, setEnrolled] = useState(false);
const[name,setName]=useState('');
const[age,setAge]=useState('');
const [batch,setBatch]=useState('7-8AM');
const [token, setToken] = useState(getToken());
const[isPayement,setPayment]=useState(false);
const navigate = useNavigate();


  const handleLogout=()=>{
   removeToken('token');
   setToken('');
   navigate('/login');
   window.location.reload();
  }



  const addEnrollment = async() => {
    const config = {
      headers: {
        authorization: `${token}`
      }
    };
    

    const data = {
      SelectedBatch: batch
    };
        try {
          const res=await api.post('/api/enrollments',data,{ headers: {
            Authorization: `${token}`
          }});
          console.log(res.data);
          if(res.status==200){
            console.log(res.data);
            setAge(res.data.age);
            setName(res.data.name);
            setEnrolled(true);
            window.location.reload();

          }
        } catch (error) {
          
        }
  }


  



  useEffect(() => {
    

    if (token) {
      

      const getEnrollmentDetail = async () => {
        console.log("useEffect"+token);
        try {
          const res = await api.get('/api/enrollments', {
            headers: {
              Authorization: `${token}`
            }
          });
    
          console.log(res);
          if (res.status == 500 || res.enrolled == false) {
            setName(res.data.name);
            setAge(res.data.age);
            setEnrolled(false);
          } else {
            setName(res.data.name);
            setAge(res.data.age);
            setEnrolled(true);
          }
    
        } catch (error) {
    
        }
      }  
      getEnrollmentDetail();
    } else {
      setEnrolled(false);
      navigate('/login');
    }

  }, [token,navigate]);



  return (
    <div>
      <div class="flex">

        <div class="flex-1 bg-gray-100 h-screen">

          <img src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanth-inturi-1051838.jpg&fm=jpg" alt="Yoga" class="h-full object-cover" />
        </div>


        <div class="flex-1 bg-white p-10">
          {enrolled == true ? <div>
            <h3 class="text-lg font-semibold mb-4">Enrolled To The Batch</h3>
            <p class="mb-2"><strong>Name:</strong>{name}</p>
            <p class="mb-2"><strong>Age:</strong> {age}</p>
          </div> : <Plan setBatch={setBatch} setPayment={setPayment}/>}


          <div>
            
            <button
              className={`bg-green-600 mt-9 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ${enrolled ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={!enrolled ? addEnrollment : undefined}
              disabled={(enrolled  || !isPayement)}
            >
              Enroll
            </button>
          </div>
          <button 
  onClick={handleLogout} // Ensure to add your logout functionality here
  className="bg-red-500 mt-9 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
  Logout
</button>

        </div>

      </div>

    </div>
  )


}

export default Enrollment