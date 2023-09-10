// import React from 'react';not necessary here 
// use rsc to import the template 

import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../single-country/singlecountry";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <>
            <h3>Countries: {countries.length} </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                countries.map((country)=> <SingleCountry 
                singlecountry={country} 
                key={country.cca2}>
                </SingleCountry> )
            }
        </div>
        </>
    );
};

export default Countries;