'use client'

import React, { useState } from 'react'

const page = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/users", {
            method: "Post",
            body:JSON.stringify({name, age, email})
        })
        let data = await response.json()

        if (data.success) {
            alert("User Created Successfully")
        }
        else {
            alert("Error with data, please try again")
        }
        console.log(response);
        
    }

  return (
    <div>
        <h1>Sign up</h1>
        <input value={name} type="text" placeholder='Enter name here' onChange={(e) => setName(e.target.value)} /> <br />

        <input value={age} type="number" placeholder='Enter age here' onChange={(e) => setAge(e.target.value)} /> <br />
        
        <input value={email} type="email" placeholder='Enter email here' onChange={(e) => setEmail(e.target.value)} /> <br />

        <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default page