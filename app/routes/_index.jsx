import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "../api/guitars.server"
import { getPosts } from "../api/posts.server"
import { getCourse } from "../api/course.server"
import Listguitars from "../components/listguitars"
import Listposts from "../components/listposts"
import Course from "../components/course"
import stylesGuitars from '../styles/guitars.css'
import stylesPosts from '../styles/blog.css'
import stylesCourse from '../styles/course.css'



export function meta() {


}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitars
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCourse
    }
  ]
}

export async function loader() {

  const [guitars, posts, course]  = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])
  const data = {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }

  return data

}

const Index = () => {
  const {guitars, posts, course} = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <Listguitars
          guitars={guitars}
        />
      </main>

      <Course
        course={course.attributes}
      />

      <section className="contenedor">
        <Listposts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index