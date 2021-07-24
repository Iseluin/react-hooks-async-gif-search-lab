import React, { useState } from "react"

const GifSearch = ({onSubmit}) => {

    const [query, setQuery] = useState("")

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} />
                <button type="submit">Find Gifs</button>
            </form>
        </>
    )
}

export default GifSearch;