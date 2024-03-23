"use client"
import React, { useState } from 'react';
import Pagination from '../pagination/pagination';
import Link from 'next/link';
import Search from '../search/search';
import styles from './view.module.css'
import Modal from '../deleteModal/deleteModal';
import ViewModal from '../viewModal/viewModal';

const ViewStudent = () => {
  
  //===================== Delete modal ==================//
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  //===================== View modal ==================//
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const openViewModal = () => setIsViewModalOpen(true);
  const closeViewModal = () => setIsViewModalOpen(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placehoider="Search for Student....." />
          
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Registration Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="#">
                      <button className={`${styles.button} ${styles.view}`} onClick={openViewModal}>
                        View
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form action="" method="post" className={styles.modalform}>
          <h3>Delete Student</h3>
          <p>
            Are you sure you want to delete this Student?
          </p>
          <div className={styles.modalbuttons}>
            <button type="submit" className={styles.deletebtn}>Delete</button>
            <button type="button" onClick={closeModal} className={styles.cancelbtn}>Cancel</button>
          </div>
        </form>
        </Modal>
        <ViewModal isViewModalOpen={isViewModalOpen} onClose={closeViewModal}>
          <div className={styles.studentDetails}>
          <h3>Student Details</h3>
          <span><h4>Student Name:</h4></span>
          <span><h4>Student Reg.no:</h4></span>
          <span><h4>Student Email:</h4></span>
          <span><h4>Student No.:</h4></span>
          <span><h4>Phone No:</h4></span>
          <span><h4>Program:</h4></span>
          <span><h4>Faculty:</h4></span>
          <span><h4>Department:</h4></span>
          <span><h4>Year:</h4></span>
          </div>
         
        </ViewModal>
      </div>
    </div>
  )
}

export default ViewStudent;
