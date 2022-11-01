import styles from '../styles/Home.module.css'

export default function Home(data) {

  console.log(data)

  return (
    <>
    <div className={styles.container}>

      <img src={data.images.sprites.front_shiny}/>
    </div>
    </>

  )
}


export async function getServerSideProps() {
  const res  = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  const data  = await res.json()

  return {
    props: {
      images : data
    }
  }
}