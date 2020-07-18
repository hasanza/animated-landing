import React from 'react'
import styles from "./Nav.module.css"

function Nav() {
    return (
<div className={styles.nav}>
      <h3 id={styles.logo}>Exos</h3>
      <div className={styles.links}>
        <h4>Products</h4>
        <h4>Services</h4>
        <h4>Careers</h4>
        <h4>About</h4>
      </div>
    </div>
    )
}

export default Nav
