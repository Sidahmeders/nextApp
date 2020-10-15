import Layout from '../components/layout';
import axios from 'axios';

const Index = () => (
    <Layout>
        <h2>hello world next!</h2>
    </Layout>
);

Index.getProps = async function() {
    const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    try {
        const data = res.json();
    } catch(err) {
        throw err;
    }
}

export default Index;