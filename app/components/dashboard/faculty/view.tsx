"use client"
import React, { useState } from 'react';
import styles from './view.module.css';
import Search from '../search/search';
import Link from 'next/link';
import Pagination from '../pagination/pagination';
import FacultyModal from './modal/modal';
import Modal from '../deleteModal/deleteModal';
import EditModal from '../editModal/editModal';
const ViewFaculty = () => {
//================ Add modal ==========================//
  const [show, setShow] = useState(false);
  const onShowModal = () => setShow(true);
  const onCloseModal = () => setShow(false);

//===================== Delete modal ==================//
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

//===================== Edit modal ==================//
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placehoider="Search for Faculty....." />
          <Link href="#">
            <button className={styles.addButton} onClick={onShowModal}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Faculty Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="#">
                      <button className={`${styles.button} ${styles.edit}`} onClick={openEditModal}>
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
        {show && <FacultyModal onClose={onCloseModal}/>}
       
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form action="" method="post" className={styles.modalform}>
          <h3>Delete Faculty</h3>
          <p>
            Are you sure you want to delete this Faculty?
          </p>
          <div className={styles.modalbuttons}>
            <button type="submit" className={styles.deletebtn}>Delete</button>
            <button type="button" onClick={closeModal} className={styles.cancelbtn}>Cancel</button>
          </div>
        </form>
        </Modal>
        <EditModal isEditModalOpen={isEditModalOpen} onClose={closeEditModal}>
        <form action="" method="post" className={styles.form}>
          <h3>Edit Faculty</h3>
    <label htmlFor="faculty_name">Faculty Name</label>
    <input type="text" name="faculty_name" id="faculty_name" value="Computing and Information Sciences" required/>
    <button type="submit">Update</button>
    </form>
        </EditModal>
    </div>
  )
}

export default ViewFaculty;
