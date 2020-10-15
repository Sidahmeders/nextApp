import MyNavBar from '../components/navbar';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Soduim United</title>
                {/* <link
                    rel="stylesheet" 
                    href="https://bootswatch.com/4/superhero/bootstrap.min.css"
                ></link> */}
            </Head>
            <MyNavBar />
            {props.children}
        </div>
    );
}

export default Layout;