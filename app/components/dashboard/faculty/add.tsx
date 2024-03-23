import React from "react";
import styles from './add.module.css';
const AddFaculty = () => {
  return (
    <div className={styles.container}>
    <form action="" method="post" className={styles.form}>
    <label htmlFor="faculty_name">Faculty Name</label>
    <input type="text" name="faculty_name" id="faculty_name" placeholder="Enter Faculty Name.." required/>
    <button type="submit">Submit</button>
    </form>
  </div>
  ) ;
};

export default AddFaculty;
