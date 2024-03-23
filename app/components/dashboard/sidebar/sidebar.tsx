"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { menu } from '@/app/data';
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/images/0.jpeg" width={50} height={50} alt=''/>
        <div className={styles.userDetails}>
          <span className={styles.username}>Admin</span>
          <span className={styles.role}>Administrator</span>
        </div>     
      </div>
      <div className={styles.menu}>
      {menu.map((item)=>(
          <div className={styles.item} key={item.id}>
            <span className={styles.title}>{item.title}</span>
            {item.listItem.map((item2)=>(
              <Link href={item2.path} className={`${styles.link} ${pathname === item2.path && styles.active}`} key={item2.id}>
                <span>{item2.icon}</span>
                <span>{item2.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
