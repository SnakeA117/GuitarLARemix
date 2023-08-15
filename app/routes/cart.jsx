
import { useOutletContext } from '@remix-run/react'
import styles from '../styles/cart.css'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'

export function links() {
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }


  export function meta() {
      return [ 
        { title: `GuitarLA - Shopping Cart`},
        { description: `Guitar Sale, music, blog, shopping cart, store`}
      ]
    }
  

const Cart = () => {
  const [total, setTotal] = useState(0)
  const { cart, updateQuantity, deleteGuitar } = useOutletContext()

  useEffect(() => {
      const totalCalc = cart.reduce( (total, product) => total + (product.quantity * product.price), 0) 
      setTotal(totalCalc)
  }, [cart])
      return (
        <ClientOnly fallback={'Loading...'}>
          {() => (
            <main className="contenedor">
                <h1 className="heading">Shopping Cart</h1>
                <div className="contenido">
                    <div className="carrito">
                        <h2>Items</h2>
                        {cart?.length === 0 ? 'Cart is empty' : (
                          cart?.map(product => (
                            <div key={product.id} className="producto">
                                <div>
                                    <img src={product.image} alt={`Product Image ${product.name}`} />
                                </div>

                                <div>
                                  <p className="nombre">{product.name}</p>
                                    <p className="quantity">Quantity: {product.quantity}</p>
                                    <select
                                      value={product.quantity}
                                      className='select'
                                      onChange={e => updateQuantity({
                                        quantity: +e.target.value,
                                        id: product.id,
                                      })}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>


                                    </select>
                                  <p className='precio'>$<span>{product.price}</span></p>
                                  <p className='subtotal'>Subtotal: $<span>{product.quantity * product.price}</span></p>
                                </div>
                                <button
                                    type="button"
                                    className="btn_eliminar"
                                    onClick={() => deleteGuitar(product.id)}
                                >X</button>
                            </div>
                          ))
                        )}
                    </div>

                    <aside className="resumen">
                        <h3>Order summary</h3>
                        <p>Total amount to pay: ${total}</p>
                    </aside>
                </div>
            </main>
            )}
        </ClientOnly>
      )
}

export default Cart