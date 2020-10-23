import React, { useState, useEffect } from 'react'

const User = () => {

    let [user, setUser] = useState(null)

    useEffect( () => {
        setTimeout( async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            let data = await res.json()
            setUser(data) 
        }, 5000)
    })

    return (
        <div className="user-container">
            <h2>User</h2>

            {user && (
                <div className="user-details">
                    <h3>{user.name}</h3>
                    <ul>
                        <li>{user.email}</li>
                        <li>{user.username}</li>
                        <li>{user.phone}</li>
                    </ul>
                    <a href={user.website}>{user.website}</a>
                </div>
            )}

            {!user && <div>Loading...</div>}

        </div>
    )

}

export default User