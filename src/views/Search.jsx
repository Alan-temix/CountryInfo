import Header from "../components/Header";
import CardCountry from "../components/CardCountry";
import { useParams } from "react-router-dom";

const Search = () => {
    return(
    <div>
        <Header />
        <CardCountry />
    </div>
    );
}

export default Search;