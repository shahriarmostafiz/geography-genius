


const SingleCountry = ({singlecountry}) => {
    const {common:name} = singlecountry.name;
    const {png:flag} = singlecountry.flags
    const{capital,population,area}= singlecountry;
    return (
        <div className=" max-w-lg min-h-[400px] mx-auto flex flex-col  gap-8 my-5 border-2  p-4 py-12 rounded-lg  border-purple-600  justify-center">
            <h2 className="text-3xl font-bold">Name : {name}</h2>
            <div className="flex justify-center ">
            <img src={flag} className="max-h-[150px]"  alt={singlecountry.flags.alt} />
            </div>
            <h2 className="text-2xl">Capital: {capital}</h2>
            <h2 className="text-2xl">population: {population/1000000} Millions</h2>
            <h2 className="text-2xl">Area: {area} KM<sup>2</sup> </h2>
        </div>
    );
};

export default SingleCountry;