import React from "react";
import styles from './add.module.css';
const AddProgram = () => {
  return (
    <div className={styles.container}>
    <form action="" method="post" className={styles.form}>
    <label htmlFor="program_name">Program Name</label>
    <input type="text" name="program_name" id="program_name" placeholder="Enter Program Name.." required/>
    <button type="submit">Submit</button>
    </form>
  </div>
  ) ;
};

export default AddProgram;
