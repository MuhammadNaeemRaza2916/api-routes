'use client'
import React, { useEffect, useState } from 'react'

interface MyProps {
  params: any
}

const page: React.FC<MyProps> = ({ params }) => {

  const currentUserId = params.userid

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {

    const response = await fetch(`http://localhost:3000/api/users/${currentUserId}`)
    const data = await response.json()

    setName(data.result[0].name)
    setAge(data.result[0].age)
    setEmail(data.result[0].email)

  }


  const updateUser = async () => {
    let response = await fetch(`http://localhost:3000/api/users/${currentUserId}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email })
    })
    const data = await response.json()
    console.log(data);
    if (data.success) {
      alert("User updated Successfully")
    }
    else {
      alert("User update Failed")
    }

  }


  return (
    <div>
      <h1>Update User</h1> <br />
      <div style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <input type="number" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} /> <br />
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  )
}

export default page