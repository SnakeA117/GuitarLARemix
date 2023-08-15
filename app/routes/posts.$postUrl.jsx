
import { useLoaderData } from "@remix-run/react"
import { getPost } from "../api/posts.server"
import { formatDate } from "../utils/helpers"
import styles from "../styles/blog.css"


export function meta({data}) {
    if(!data) {
      return [ 
        { title: `GuitarLA - Post Not Found`},
        { description: `GuitarLA, Our post was not found`}
      ]
    }
  
    return [ 
      { title: `GuitarLA - ${data.data[0].attributes.Title}`},
      { description: `GuitarLA, Products, Guitar ${data.data[0].attributes.name}`}
    ]
  }
  

export function links() {
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }



export async function loader ({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post not found'
             })
    }

    return post
}

export default function Post () {
  const post = useLoaderData()
  const { Title, Content, Image, publishedAt } = post.data[0]?.attributes
  return (
    <article className="contenedor post mt-3">
     <img src={Image.data.attributes.url} alt={`blog image ${Title}`} className="imagen" />
        <div className="contenido">
            <h3>{Title}</h3>
            <p className="fecha">{formatDate(publishedAt)}</p>
            <p className="texto">{Content}</p>
        </div>
    </article>
  )
}
