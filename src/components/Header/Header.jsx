import { useState } from 'react'
import styles from './Header.module.sass'

import React from 'react'

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>Michael</div>
        <div className={styles.nav}>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Latest</li>
          </ul>
        </div>
        <div className={styles.links}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Header
