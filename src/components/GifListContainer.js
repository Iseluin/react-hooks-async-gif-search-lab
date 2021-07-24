import React, { useEffect, useState } from "react"

import GifList from "./GifList";
import GifSearch from "./GifSearch"

const GifListContainer = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("stuff")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=2GcAW64A2qPfj8RR60J36f609pwOU9nh&rating=g`)
            .then((response) => response.json())
            .then((data) => setData(data.data.slice(0, 3)))
    }, [query]);

    return (
        <>
            <GifList gifData={data} />
            <GifSearch onSubmit={setQuery}/>
        </>
    );
}

export default GifListContainer;