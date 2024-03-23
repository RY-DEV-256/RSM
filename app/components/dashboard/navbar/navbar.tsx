"use client"
import React from 'react';
import { MdNotifications,
  MdOutlinePowerSettingsNew } from "react-icons/md";
  import { IoIosSearch } from "react-icons/io";
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.pathname}>
        <span>{pathname.split("/").pop()}</span>
      </div>
      <div >
       
      </div>
      <div className={styles.icons}>
        <div className={styles.notification}>
        <MdNotifications  className={styles.icon} />
        <span className={styles.number}>1</span>
        </div>
        <MdOutlinePowerSettingsNew className={`${styles.icon} ${styles.logout}`}/>
      </div>
    </div>
  )
}

export default Navbar;
