import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(
    () => {
        axios.get("http://localhost:3000/users/" + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []
)
const {name, username, email, phone} = data;
  return (
    <div className='w-full mx-auto flex flex-col justify-center items-center h-screen'>
    <div className='border-3 w-1/3 the-form shadow-2xl rounded-md' >
     <h1 className='text-3xl font-bold'>User Details</h1>
     <div className="the-content text-xl font-bold">
     <h2 > Name: {name}</h2>
      <h2>Username: {username}</h2>
      <h2>Phone number: {phone}</h2>
      <h2>Email: {email}</h2>
     </div>
     <div className="btn">
         <Link to={`/update/${id}`}>
            <button  className='rounded-md bg-green-600 text-white mr-3' type='submit'>Edit</button>       
         </Link>
         <Link to='/'>
             <button className='rounded-md bg-blue-500 text-white'>Back</button>
         </Link>
     </div>
    </div>
 </div>
  )
}

export default Read