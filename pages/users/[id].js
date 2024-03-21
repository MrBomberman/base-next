import styles from '../../styles/user.module.scss'

export default function User({user}) {
    return (
        <div className={styles.user}>
            <h1>User {user.id}</h1>
            <div>Name {user.name}</div>
        </div>
    )
}


export async function getServerSideProps({params}){
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}
    }
}