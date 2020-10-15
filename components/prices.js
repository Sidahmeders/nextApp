import {useState} from 'react';

const Prices = ({data}) => {

    const [state, setState] = useState("USD");

    const changeCurr = e => {
        let val = e.target.value;
        setState(() => val);
    }

    return (
        <>
        <div>
            <select onChange={changeCurr}>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
            </select>
        </div>
        <h3>Prices</h3>
        <h3>code: {data ? data[state]['code'] : "..."}</h3>
        <h4>currency: {data ? data[state]['description'] : "..."}</h4>
        <h3>curr_RATE: {data ? data[state]['rate_float'] : "..."}</h3>
        </>
    );
}

export default Prices;