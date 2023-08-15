import { Link, useLocation } from "@remix-run/react"
import image from '../../public/img/carrito.png'

const Navigation = () => {
    const location = useLocation()
  return (
    <nav className="navegacion">
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
            >Home</Link>

            <Link
                to="/us"
                className={location.pathname === '/us' ? 'active' : ''}
            >About us</Link>

            
            <Link
                to="/store"
                className={location.pathname === '/store' ? 'active' : ''}
            >Store</Link>

            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>

          <Link
              to="/cart"   
          ><img src={image} alt="Shopping Cart" /></Link>
        </nav>
  )
}

export default Navigation