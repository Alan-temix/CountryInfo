import React, { lazy, Suspense } from "react";

import Header from "../components/Header";
import Loading from "../components/Loading";

const Countries = lazy(() => import('../components/Home/Countries'));

const Home = () => {
    return(
        <>
        <Header />
        <Suspense fallback={<Loading />}>
            <Countries />
        </Suspense>
        </>
    );
}

export default Home;