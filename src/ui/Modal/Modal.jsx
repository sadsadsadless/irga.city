import React from 'react';
import styles from "./Modal.module.scss";
import bigLogo from "../../../public/images/big-irga.png";
import { MdClear } from "react-icons/md";
import { ModalNav } from './ModalNav';
import { useDatabase } from '../../store/DataProvider';
import { Link } from 'react-router-dom';

const Modal = ({
  onClose = f => f,
  isOpen = false
}) => {

  const { useCategory } = useDatabase();
  const text = useCategory("contactsText");

  return (isOpen === false)
    ? null
    : <div
        className={isOpen ? styles.main : styles.close}
        onClick={onClose}
      >
        <Link to={"/"}>
          <img
            src={bigLogo}
            alt="Irga B.I.G"
          />
        </Link>
        <div className={styles.content}>
          <ModalNav />
          {
            text &&
            text.map(item => {
              return item.id !== 4
                ? null
                : <p
                    key={item.id}
                >
                    { item.text }
                </p>
            })
          }
        </div>
        <button
          className={styles.button}
          onClick={onClose}
        >
          <MdClear />
        </button>
      </div>
};

export { Modal };