'use client'
import React, { useState } from 'react'

const page = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")

    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({ name, price, color, category, company })
        })
        setName("")
        setPrice("")
        setColor("")
        setCategory("")
        setCompany("")
        let data = await response.json();
        if (data.success) {
            alert("Product Added Successfully")
        } else {
            alert("Product Addition failed...!")
        }
    }

    return (
        <div>
            <h1>Add Product</h1>

            <input value={name} type="text" placeholder='Enter name here' onChange={(e) => setName(e.target.value)} /> <br />

            <input value={price} type="text" placeholder='Enter price here' onChange={(e) => setPrice(e.target.value)} /> <br />

            <input value={color} type="text" placeholder='Enter color here' onChange={(e) => setColor(e.target.value)} /> <br />

            <input value={category} type="text" placeholder='Enter category here' onChange={(e) => setCategory(e.target.value)} /> <br />

            <input value={company} type="text" placeholder='Enter company here' onChange={(e) => setCompany(e.target.value)} /> <br />

            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default page