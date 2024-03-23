"use client"
import React, { useState } from "react";
import styles from "./adminList.module.css";
import Search from "@/app/components/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/components/dashboard/pagination/pagination";
import { Administrators } from "@/app/data";
import AdministratorModal from "./modal/modal";
import Modal from "../deleteModal/deleteModal";

type Props = {
  list: Administrators[];
};
const AdministratorsList = (
  props: Props
) => {
  const { list } = props;
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
          <Search placehoider="Search for Admin....." />
          <Link href="#">
            <button className={styles.addButton} onClick={onShowModal}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.id}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.phone}</td>
                <td>{admin.role}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="#">
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <Link href="#">
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
            ))}
          </tbody>
        </table>
        <Pagination />
        {show && <AdministratorModal onClose={onCloseModal}/>}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form action="" method="post" className={styles.modalform}>
          <h3>Delete Administrator</h3>
          <p>
            Are you sure you want to delete this Administrator?
          </p>
          <div className={styles.modalbuttons}>
            <button type="submit" className={styles.deletebtn}>Delete</button>
            <button type="button" onClick={closeModal} className={styles.cancelbtn}>Cancel</button>
          </div>
        </form>
        </Modal>
      </div>
    </div>
  );
};

export default AdministratorsList;
