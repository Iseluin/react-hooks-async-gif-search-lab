import React from "react"

const GifList = ({gifData}) => {
    const gifListItems = gifData.map((gif) => {
     return (
         <li key={gif.images.original.url}>
             <img src ={gif.images.original.url} alt="A Gif of Something"/>
        </li>
     )   
    })
    return (
        <ul>
            {gifListItems}
        </ul>
    )
}

export default GifList;