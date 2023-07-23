import React from 'react'
import styles from './Project.module.sass'
import img from '../../assets/images/icons8-code-30.png'
import gif from '../../assets/images/icons8-live.svg'

const Project = ({ project }) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.content}>
          <img src={project.img} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h2>{project.name}</h2>
        <p>{project.text}</p>
        <div className={styles.btnWrappper}>
          <button className={styles.btn}>
            Live demo <img src={img} alt="" />
          </button>
          <button className={styles.btn}>
            Code <img src={gif} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project
