import React from 'react'

export const GifItem = ({ id, url, title }) => {
   return (
      <div>
         <h1>{title}</h1>
         <img src={url} alt={title} />
      </div>
   )
}
