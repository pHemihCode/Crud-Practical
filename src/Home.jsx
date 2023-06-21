import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    useEffect( () => {
        axios.get("http://localhost:3000/users")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    const handleClick =(id)=>{
        const confirm = window.confirm("Are you sure you want to delete this data");
        if(confirm){
            axios.delete("http://localhost:3000/users/" + id)
            .then(res => {
                navigate('/')
                location.reload()
            })
            .catch(err => console.log(err))
        }
    }
  return (
    <div className='w-full flex flex-col justify-center items-center my-16'>
        <div className="header m-5">
           <h1 className='text-4xl italic font-bold'>Profiles</h1>
        </div>
       <div className="main w-10/12 shadow-2xl shadow-slate-400">
       <div className="add-btn">
          <Link to='create'><button className='bg-green-950 text-white rounded-md'>Add +</button></Link> 
        </div>
        <table className='w-full'>
            <thead>
                <tr className='text-left mt-5'>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody  className=''>
                {
                    data.map((datas) => {
                        const {id , name, username, email, phone } = datas;
                     return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td className="btn flex flex-row justify-between">
                            <Link to={`read/${id}`}><button className='rounded-md bg-purple-500 text-white'>Read</button></Link>
                            <Link to={`/update/${id}`}><button className='rounded-md bg-blue-500 text-white'>Edit</button></Link>
                            <button onClick={(e) => handleClick(id)} className='rounded-md bg-red-500 text-white'>Delete</button>
                            </td>
                         </tr>
                     )
                    }
                    )
                }
            </tbody>
        </table>
       </div>
    </div>
  )
}

export default Home