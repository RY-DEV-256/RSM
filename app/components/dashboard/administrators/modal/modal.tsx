import React from 'react';
import styles from './modal.module.css'
import { MdClose } from "react-icons/md";
import AddAdministrator from '../add';
type Props = {
  onClose: () => void
}
const AdministratorModal = (props:Props) => {
  const { onClose } = props;
  return (
    <div>
      <div className={styles.modaloverlay}>
        <div className={styles.modalwrapper}>
            <div className={styles.closebtnwrapper}>
               <div className={styles.close}></div>
               <MdClose className={styles.closebtn} onClick={onClose}/>
            </div>
            <h4 className={styles.h1}>Add New Administrator</h4>
            <div className={styles.modalcontent}>
              <AddAdministrator/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default  AdministratorModal;
