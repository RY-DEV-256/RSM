import React from 'react';
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
const Search = ({placehoider}) => {
  return (
    <div className={styles.container}>
      <MdSearch className={styles.icon}/>
      <input type="search" placeholder={placehoider}  className={styles.input}/>
    </div>
  )
}

export default Search;
