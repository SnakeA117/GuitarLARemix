import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link,
} from '@remix-run/react'


import styles from './styles/index.css'
import Header from './components/header';
import Footer from './components/footer';



export function meta() {
    return  [
                {charset: 'utf8'},
                {title: 'GuitarLA - Remix'},
                {viewport: "width=device-width, initial-scale=1"},
            ];
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin : "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() { 
const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null
const [cart, setCart] = useState(cartLS)

useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

    const addCart = guitar => {
        if(cart.some(guitarState => guitarState.id === guitar.id )) {
            const updatedCart = cart.map( guitarState => {
                if (guitarState.id === guitar.id) {
                    guitarState.quantity = guitar.quantity
                }
                return guitarState
            })
            setCart(updatedCart)
        } else {
            // New
            setCart([...cart, guitar])
        }
    }

    const updateQuantity = guitar => {
        const updatedCart = cart.map(guitarState => {
            if(guitarState.id === guitar.id) {
                guitarState.quantity = guitar.quantity
            }
            return guitarState
        })
        setCart(updatedCart)
    }

    const deleteGuitar = id => {
        setCart(cart.filter (guitarState => guitarState.id !== id))
    }


    return (
        <Document>
            <Outlet
                context={{
                    addCart,
                    cart,
                    updateQuantity,
                    deleteGuitar
                }}
            />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/** Error management */


export function ErrorBoundary() {
    const error = useRouteError()
    if(isRouteErrorResponse(error)) { 
        return (
        <Document>
                <p className="error">{error.status} {error.statusText}</p>
                <Link className="error-enlace" to="/">Maybe you want to go to Main Page</Link>
        </Document>
    )}
}