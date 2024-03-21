import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'kirill' + keywords}></meta>
                <title>main page</title>
            </Head>
            <div className='navBar'>
                <A href='/' text='Home'></A>
                <A href='/users' text='Users'></A>
            </div>
            <div>{children}</div>

            <style jsx>
            {`
              .navBar {
                background: red;
                padding: 15px;
              }
              .link {
                text-decoration: none;
                margin: 10px;
                font-size: 20px;
                color: white;
              }
            `}
          </style>
        </>
    )
}

export default MainContainer