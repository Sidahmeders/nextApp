import Layout from '../components/layout';
import axios from 'axios';
import Prices from '../components/prices';
import { useState, useEffect } from 'react';

const Index = () => {

    const [myData, setMyData] = useState("");

    const getData = async () => {
        const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        try {
            setMyData(() => res.data.bpi);
        } catch(err) {
            throw err;
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Layout>
            <p>hello world next!</p>
            <Prices data={myData} />
        </Layout>
    );
};

export default Index;