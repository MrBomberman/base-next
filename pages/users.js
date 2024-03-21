import Link from 'next/link'
import {useState, useEffect} from 'react'
import MainContainer from '../components/MainContainer';


export default function Users({users}) {
    return (
        <MainContainer>
            <h1>Users</h1>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <span>{user.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}
// рендеринг на серверной части
export async function getStaticProps(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    return {
        props: {users}
    }
}
