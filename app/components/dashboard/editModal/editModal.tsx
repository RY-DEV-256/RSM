import React from 'react';
import { MdClose } from 'react-icons/md';
import styles from './editModal.module.css'
interface ModalProps {
  isEditModalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const EditModal: React.FC<ModalProps> = ({ isEditModalOpen, onClose, children }) => {
  if (!isEditModalOpen) return null;

  return (
    <div className={styles.modaloverlay}>
    <div className={styles.modalwrapper}>
        <div className={styles.closebtnwrapper}>
           <div className={styles.close}></div>
           <MdClose className={styles.closebtn} onClick={onClose}/>
        </div>
        <div className={styles.modalcontent}>
            {children}
        </div>
    </div>
</div>
  );
};

export default EditModal;