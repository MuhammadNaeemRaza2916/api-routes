'use client'
import React from 'react'

interface MyProps {
    id: number
}

const DeleteBtn: React.FC<MyProps> = ({ id }) => {

    const deleteUser = async () => {
        let response = await fetch("http://localhost:3000/api/users/" + id, {
            method: "delete"
        })
        const data = await response.json()
        if (data.success) {
            alert("User deleted Successfully")
        }
        else {
            alert("User delete failed!!!")
        }
    }

    return (
        <button onClick={deleteUser}>DeleteBtn</button>
    )
}

export default DeleteBtn