import React from 'react'
import Guitar from './guitar'

const Listguitars = ({guitars}) => {
  return (
        <>
    <h2 className="heading">Our collection</h2>
    {guitars?.length && (
        <div className="guitarras-grid">
          {guitars.map(guitar => (
            <Guitar 
                key={guitar?.id}
                guitar={guitar?.attributes}
            />
          ))}
      </div>
        )}
    </>
  )
}

export default Listguitars