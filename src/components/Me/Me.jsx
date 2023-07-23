import React from 'react'
import styles from './Me.module.sass'
import png from '../../assets/images/ReadyPlayerMe-Avatar.png'
const Me = () => {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        Hey, Im Michael 👋
        <br /> Front-end React Developer
        <p>passionate self-taught developer based in Ukraine</p>
      </div>

      <div className={styles.photo}>
        <img src={png} alt="" />
      </div>
    </div>
  )
}

export default Me
