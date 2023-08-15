import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "../api/guitars.server";
import styles from "../styles/guitars.css"
import Listguitars from "../components/listguitars";

export function meta() {
  return [ 
    { title: 'GuitarLA - Store'},
    { description: 'GuitarLA - Our collection'}
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
  const guitars = await getGuitars();
  return guitars.data
}

const Store = () => {

  const guitars = useLoaderData()
  return (
    <main className="contenedor">
        <Listguitars
          guitars={guitars}
        />
    </main>
  )
}

export default Store