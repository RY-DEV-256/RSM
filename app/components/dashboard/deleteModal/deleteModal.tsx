import React from 'react';
import styles from './deleteModal.module.css'
import { MdClose } from 'react-icons/md';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

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

export default Modal;