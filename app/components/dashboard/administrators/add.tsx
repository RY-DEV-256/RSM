import React from "react";
import styles from './add.module.css';
const AddAdministrator = () => {
  return (
    <div className={styles.container}>
    <form action="" method="post" className={styles.form}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" placeholder="Enter Name.." required/>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter Email.." required/>
    <label htmlFor="phone">Phone Number</label>
    <input type="text" name="phone" id="phone" placeholder="Enter Phone Number.." required/>
    <label htmlFor="role">Select Role</label>
    <select name="role" id="">
      <option value="1">HOD</option>
      <option value="2">Dean</option>
      <option value="3">Research Directorate</option>
      <option value="4">Lecture</option>
    </select>

    <button type="submit" name="add_admin">Submit</button>
    </form>
  </div>
  ) ;
};

export default AddAdministrator;
