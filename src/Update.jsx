import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
function Update() {
  const {id} = useParams()
  const [data, setData] = useState([])
    const [items, setItems] = useState({
        name: '',
        username: '',
        phone: '',
        email: ''
    })
    const navigate = useNavigate()
    useEffect(
        () => {
            axios.get("http://localhost:3000/users/" + id)
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
        }, []
    )
    
    const handleSubmit =(e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/users/" + id, items)
        .then(res => {
          console.log(res.data)
            navigate('/')
        })
        .catch(err => console.log(err))
      }
        
  return (
    <div className='w-full mx-auto flex flex-col justify-center items-center h-screen'>
       <form className='border-3 w-1/3 the-form shadow-2xl rounded-md' onSubmit={handleSubmit}  >
        <h1 className='text-3xl font-bold'>Add User</h1>
        <div className="input-data">
           <div className="label-input">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name' value={items.name} onChange={(e) => setItems({...items,name: e.target.value})}/>
           </div>
           <div className="label-input">
                <label htmlFor="username">Username</label>
                <input className="rounded-sm " type="text" placeholder='Username' value={items.username} onChange={(e) => setItems({...items,username: e.target.value})}/>
           </div>
           <div className="label-input">
                <label htmlFor="phone">Phone</label>
                <input type="number"  placeholder='+234' value={items.phone} onChange={(e) => setItems({...items,phone: e.target.value})} />
           </div>
           <div className="label-input">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='abc@gmail.com' value={items.email} onChange={(e) => setItems({...data,email: e.target.value})}/>
           </div>
        </div>
        <div className="btn">
            <button  className='rounded-md bg-green-600 text-white mr-3' type='submit'>Update</button>
            <Link to='/'>
                <button className='rounded-md bg-blue-500 text-white'>Back</button>
            </Link>
        </div>
       </form>
    </div>
  )
}

export default Update