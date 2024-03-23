import React from 'react';
import styles from '../components/dashboard/dashboard.module.css';
import Sidebar from '../components/dashboard/sidebar/sidebar';
import Navbar from '../components/dashboard/navbar/navbar';
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <div className={styles.content}>
          <div className={styles.navbar}>
          <Navbar/>
          </div>
          <div className={styles.main}>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout
