import { createContext } from 'react';

const CountryList = createContext();

const CountryListProvider = ({children}) => {
    async function fetchData() {
        try {
            const url = 'https://restcountries.com/v3/all';
            let response = await fetch(url).then((response) => response.json());
            const result = await response.map((item) => item.name.common);
            return result;
        } catch(err) {
            console.log(err);
        }
    }

    const result = fetchData();
    const data = { result }

    return(
        <CountryList.Provider value={data}>
            {children}
        </CountryList.Provider>
    )
}

export { CountryListProvider }
export default CountryList;