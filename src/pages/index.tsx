import { useState } from 'react'
import styles from '../styles/Home.module.css'
import logo from "../assets/logo.svg"

export default function Home({ schoolsList }) {

  return (
    <>
      <div className={styles.container}>
        <img src={logo} />
        <div className={styles.list}>
          <h1 className={styles.header}>Pick Your School</h1>
          <input 
            className={styles.searchInput}
            placeholder={"Search for your school..."}
          />
          <div className={styles.line}>
          </div>

        {
          schoolsList.schools.map(school => {
            return (
              <div className={styles.card}>
                
                <div className={styles.cardDetails}>
                  <div className={styles.schoolInitial}>{school.name[0]}</div>
                  <div className={styles.textDetails}>
                  <span className={styles.schoolName}>{school.name}</span>
                  <span className={styles.county}>{school.county.split(" ")[0]}</span>
                  </div>
                </div>

              </div>
            )
          })
        }
        </div>
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