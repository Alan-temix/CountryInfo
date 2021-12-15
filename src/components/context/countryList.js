import { createContext } from 'react';

const CountryList = createContext();

const CountryListProvider = ({children}) => {
    let result = [];
    let data;

    async function fetchData() {
        const url = 'https://restcountries.com/v3/all';
        let response = await fetch(url).then(r => r.json());
        const result = await response.map((item) => item.name.common);
        return result;
    }

    if(result.length === 0) {
        // result = fetchData();
        result = fetchData();
        data = { result }
    }


    return(
        <CountryList.Provider value={data}>
            {children}
        </CountryList.Provider>
    )
}

export { CountryListProvider }
export default CountryList;