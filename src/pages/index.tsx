import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({ schoolsList }) {

  return (
    <>
      <div className={styles.container}>
        {
          schoolsList.schools.map(school => {
            return (
              <div className={styles.card}>
                
                <span className={styles.schoolName}>{school.name}</span>
                <span>{school.city}</span>

              </div>
            )
          })
        }
      </div>
    </>

  )
}


export async function getStaticProps() {
  const res = await fetch("https://api.sendbeacon.com/team/schools")
  const data = await res.json()
  return {
    props: {
      schoolsList: data
    }
  }
}