
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../api/posts.server"
import styles from "../styles/blog.css"
import Listposts from "../components/listposts";


export function meta() {
  return [ 
    { title: 'GuitarLA - Our blog'},
    { description: 'GuitarLA, Music blog'}
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

export async function loader() {
  const posts = await getPosts();
  return posts.data
}

const Blog = () => {

  const posts = useLoaderData()
  return (
    <main className="contenedor">
        <Listposts
          posts={posts}
        />
    </main>
  )
}

export default Blog