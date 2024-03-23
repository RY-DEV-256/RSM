import React from 'react';
import styles from './modal.module.css'
import { MdClose } from "react-icons/md";
import AddFaculty from '../add';
type Props = {
  onClose: () => void
}
const FacultyModal = (props:Props) => {
  const { onClose } = props;
  return (
    <div>
      <div className={styles.modaloverlay}>
        <div className={styles.modalwrapper}>
            <div className={styles.closebtnwrapper}>
               <div className={styles.close}></div>
               <MdClose className={styles.closebtn} onClick={onClose}/>
            </div>
            <h4 className={styles.h1}>Add New Faculty</h4>
            <div className={styles.modalcontent}>
              <AddFaculty/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default  FacultyModal;
