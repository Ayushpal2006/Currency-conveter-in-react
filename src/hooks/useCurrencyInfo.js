import {useEffect, useState} from "react"

const useCurrencyInfo = (currency) => {
    const [data, setdata] = useState({})
    useEffect(() => {
        var url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
        // var url = `https://open.er-api.com/v6/latest/${currency}`
        async function api(){
            let response = await fetch(url);
            let data = await response.json();
            setdata(data[currency]);
        }
        
        api(); 
    }, [currency])
    console.log(data);
    return data;
}


export default useCurrencyInfo
