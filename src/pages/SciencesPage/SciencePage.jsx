import React, { useEffect } from "react";
import styles from "./SciencePage.module.scss";
import { Routes, useParams, Route, Outlet } from 'react-router-dom';
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { ScienceList } from './components/ScienceList/ScienceList';
import { Header } from '../../ui/DefaultHeader/Header';
const bodyScrollLock = require("body-scroll-lock");

const SciencePage = () => {

  const clear = bodyScrollLock.enableBodyScroll;
  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
    clear(SciencePage);
  }, [id]);
  
  return (
    <div>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <Header 
        onOpen={changeState} 
      />
      <ScienceList />
    </div>
  );
};

export { SciencePage };