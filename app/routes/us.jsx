import { useOutletContext } from '@remix-run/react';
import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/us.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

export function meta() {
  return  [
              {charset: 'utf8'},
              {title: 'GuitarLA - About us'},
              {viewport: "width=device-width, initial-scale=1"},
          ];
}


const Us = () => {

  return (
      <main className="contenedor nosotros">
          <h2 className="heading">About us</h2>
          <div className="contenido">
            <img src={image} alt="image about us" />
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                  only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            </div>
      </main>
  )
}

export default Us