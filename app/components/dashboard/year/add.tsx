import React from "react";
import styles from './add.module.css';
const AddYear = () => {
  return (
    <div className={styles.container}>
    <form action="" method="post" className={styles.form}>
    <label htmlFor="year_name">Year Name</label>
    <input type="text" name="year_name" id="year_name" placeholder="Enter Year Name.." required/>
    <button type="submit">Submit</button>
    </form>
  </div>
  ) ;
};

export default AddYear;
