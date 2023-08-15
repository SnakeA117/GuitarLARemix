import { Link } from "@remix-run/react"
import { formatDate } from "../utils/helpers"


const Post = ({post}) => {
    const {Content, Image, Title, url, publishedAt} = post
  return (
    <article className="post">
        <img src={Image.data.attributes.formats.small.url} alt={`blog image ${Title}`} className="imagen" />
        <div className="contenido">
            <h3>{Title}</h3>
            <p className="fecha">{formatDate(publishedAt)}</p>
            <p className="resumen">{Content}</p>
            <Link className='enlace' to={`/posts/${url}`}>Read post</Link>
        </div>
    </article>
  )
}

export default Post