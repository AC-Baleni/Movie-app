import React from 'react'
import styles from './NavbarComponent.module.css'

const NavbarComponent = () => {
  return (
    <div className={styles.navbar}>
        <h1 className={styles.logo}>Balenii</h1>
        <form>
          <input type='text' placeholder='Search...' />
          <button type='submit'>Search</button>
        </form>
        <ul >
          <li>Home</li>
          <li>Movies</li>
          <li>Series</li>
        </ul>
        
    </div>
  )
}

export default NavbarComponent