import Navigation from "./navigation"



const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navigation/>
            <p className="copyright">All rights reserved {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer