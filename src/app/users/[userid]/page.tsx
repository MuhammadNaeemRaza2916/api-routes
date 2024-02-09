import React from 'react'

const getUsers = async (id:number) => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await response.json()
    return data.result
}

interface MyProps {
    params: any,
}


const page: React.FC<MyProps> = async ({ params }) => {

    const userData = await getUsers(params.userid)

    return (
        <div>
            <h1>User Details</h1>
            <h3>Id: {userData.id}</h3>
            <h3>Name: {userData.name}</h3>
            <h3>Email: {userData.email}</h3>
        </div>
    )
}

export default page