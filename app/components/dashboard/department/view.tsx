"use client"
import React, { useState } from 'react';
import styles from './view.module.css';
import Search from '../search/search';
import Link from 'next/link';
import Pagination from '../pagination/pagination';
import DepartmentModal from './modal/modal';
import Modal from '../deleteModal/deleteModal';
const ViewDepartment = () => {
  const [show, setShow] = useState(false);
  const onShowModal = () => setShow(true);
  const onCloseModal = () => setShow(false);

  //===================== Delete modal ==================//
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placehoider="Search for Department....." />
          <Link href="#">
            <button className={styles.addButton} onClick={onShowModal}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Department Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/dashboard/departments/edit">
                      <button className={`${styles.button} ${styles.edit}`}>
                        Edit
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`} onClick={openModal}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
     {show && <DepartmentModal onClose={onCloseModal}/> } 
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form action="" method="post" className={styles.modalform}>
          <h3>Delete Department</h3>
          <p>
            Are you sure you want to delete this Department?
          </p>
          <div className={styles.modalbuttons}>
            <button type="submit" className={styles.deletebtn}>Delete</button>
            <button type="button" onClick={closeModal} className={styles.cancelbtn}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ViewDepartment;
