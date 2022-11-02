import { useState } from 'react'
import styles from '../styles/Home.module.css'
import logo from "../assets/logo.svg"

export default function Home({ schoolsList }) {


  return (
    <>
      <div className={styles.container}>
        <div >
          <div style={{display: 'flex', fontSize: '18px'}}>

            <svg viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg" width={27} height={22}>
              <path d="M33.159 32.412C34.2673 31.6598 35.7327 31.6598 36.841 32.412L69.397 54.5079C70.5192 55.2696 69.9713 57 68.608 57H61.025C60.0855 57 59.1683 56.7189 58.3949 56.1941L36.8417 41.5657C35.7334 40.8135 34.2679 40.8135 33.1597 41.5657L11.6064 56.1941C10.8331 56.7189 9.91582 57 8.97636 57H1.39204C0.02871 57 -0.519157 55.2696 0.603032 54.5079L33.159 32.412Z" fill="white" />
              <path d="M36.8417 49.9078C35.7334 49.1557 34.2679 49.1557 33.1597 49.9078L27.6059 53.6772C26.1096 54.6928 26.8401 57 28.6579 57H41.3434C43.1612 57 43.8917 54.6928 42.3954 53.6772L36.8417 49.9078Z" fill="white" />
              <path d="M40.5581 19.5926C40.5581 22.6123 38.0698 25.0602 35.0004 25.0602C31.9309 25.0602 29.4427 22.6123 29.4427 19.5926C29.4427 16.5728 31.9309 14.1249 35.0004 14.1249C38.0698 14.1249 40.5581 16.5728 40.5581 19.5926Z" fill="white" />
              <path d="M23.4216 31.2308C21.8022 32.33 19.5713 32.1312 18.472 30.5259C16.3334 27.403 15.0852 23.6412 15.0852 19.5926C15.0852 8.77189 24.0015 0 35.0004 0C45.9992 0 54.9155 8.77189 54.9155 19.5926C54.9155 23.6414 53.6672 27.4034 51.5285 30.5263C50.4292 32.1315 48.1983 32.3303 46.5789 31.2312C44.8508 30.0583 44.7467 27.5722 45.8057 25.7888C46.8861 23.9692 47.5052 21.852 47.5052 19.5926C47.5052 12.7982 41.9066 7.29025 35.0004 7.29025C28.0941 7.29025 22.4955 12.7982 22.4955 19.5926C22.4955 21.8519 23.1146 23.969 24.1949 25.7886C25.2538 27.5719 25.1497 30.058 23.4216 31.2308Z" fill="white" />
            </svg>
            <p className={styles.logoText}>BEACON</p>
          </div>
          <div className={styles.sticky}>



            <div className={styles.list}>
              <h1 className={styles.header}>Pick Your School</h1>
              <input
                className={styles.searchInput}
                placeholder={"Search for your school..."}
              />
              <div className={styles.line}>
              </div>
            </div>
            <div className={`${styles.sticky}, ${styles.gradient}`}>

            </div>
          </div>

          <div className={styles.scrollBar} style={{ marginTop: '320px', overflow: 'scroll', height: '50%' }}>

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