import DeleteBtn from '@/components/DeleteBtn'
import Link from 'next/link'
import React from 'react'

const getUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users")
    const data = await response.json()
    return data
}

interface UserType {
    user: string,
    id: number,
    name: string
}

const page = async () => {

    const users: UserType[] = await getUsers()
    // console.log(users);


    return (
        <div>
            <h1>All Users</h1>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`}>Name: {user.name} </Link>
                        <Link href={`/users/${user.id}/update`}><button>Edit</button></Link>
                        <DeleteBtn id={user.id} /><br />
                    </div>
                ))
            }
        </div>
    )
}

export default page