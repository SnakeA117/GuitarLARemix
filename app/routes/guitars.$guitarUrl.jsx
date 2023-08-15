
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitar } from '../api/guitars.server'
import styles from '../styles/guitars.css'
import { useState } from 'react'

export async function loader({request, params}) {
  const { guitarUrl } = params
  const guitar = await getGuitar(guitarUrl)

  if(guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar not found'
    })
  }
        return guitar
}

export function meta({data}) {
  if(!data) {
    return [ 
      { title: `GuitarLA - Guitar Not Found`},
      { description: `GuitarLA, Products, Guitar Not Found}`}
    ]
  }

  return [ 
    { title: `GuitarLA - ${data.data[0].attributes.name}`},
    { description: `GuitarLA, Products, Guitar ${data.data[0].attributes.name}`}
  ]
}




export function links() {
  return [
    { rel: 'stylesheet',
    href: styles }
  ]
}

const Guitar = () => {

  const {addCart} = useOutletContext()



  const [quantity, setQuantity] = useState(0)
  const  guitar = useLoaderData()
  const { name, description, image, price } =  guitar.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault();
    if(quantity < 1 ) {
      alert('You must select a valid quantity')
      return;
    }

    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      quantity
    }
    addCart(selectedGuitar)
    
  }

  return (
    <main className="contenedor guitarra">
      <img src={image.data.attributes.url} alt={`Guitar image ${name}`} className="imagen" />
      <div className="contenido">
        <h3>{name}</h3>
        <p className='texto'>{description}</p>
        <p className="precio">${price}</p>
        <form onSubmit={handleSubmit} className='formulario'>
            <label htmlFor='cantidad'>Quantity</label>
            <select 
            onChange={ e => setQuantity(parseInt(+e.target.value))}
            id="cantidad"
            >
                 <option value="0">-- Select --</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
            </select>

            <input type="submit"
            value="Add to cart"
            />
        </form>
      </div>
    </main>
  )
}

export default Guitar