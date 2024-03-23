import React from "react";
import styles from './add.module.css';
const AddDepartment = () => {
  return (
    <div className={styles.container}>
    <form action="" method="post" className={styles.form}>
    <label htmlFor="dept_name">Department Name</label>
    <input type="text" name="dept_name" id="dept_name" placeholder="Enter Department Name.." required/>
    <button type="submit">Submit</button>
    </form>
  </div>
  ) ;
};

export default AddDepartment;
