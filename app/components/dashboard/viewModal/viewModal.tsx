import React from 'react';
import { MdClose } from 'react-icons/md';
import styles from './viewModal.module.css'
interface ModalProps {
  isViewModalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ViewModal: React.FC<ModalProps> = ({ isViewModalOpen, onClose, children }) => {
  if (!isViewModalOpen) return null;

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

export default ViewModal;