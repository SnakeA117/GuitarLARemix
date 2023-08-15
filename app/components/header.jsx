import { Link } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'
import Navigation from "./navigation"

const Header = () => {

  return (
   <header className="header">
        <div className="contenedor barra">
            <Link to="/" className="logo">
                <img className="logo" src={Logo} alt="logo image" />
            </Link>
            <Navigation/>
        </div>
   </header>
  )
}

export default Header