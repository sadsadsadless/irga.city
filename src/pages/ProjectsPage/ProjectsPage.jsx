import React, { useEffect } from "react";
import styles from "./ProjectsPage.module.scss";
import { Modal } from "../../ui/Modal";
import { toggleModal } from "../../hooks/toggleModal";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { Header } from '../../ui/DefaultHeader/Header';
import { useParams } from 'react-router-dom';
const bodyScrollLock = require("body-scroll-lock");

function ProjectsPage() {

  const clear = bodyScrollLock.enableBodyScroll;

  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    clear(ProjectsPage);
  }, [id]);

  return (
    <>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <Header 
        onOpen={changeState} 
      />
      <div className={styles.projects}>
        <ProjectsList 
          main={false}
          route={"projects"}
        />
      </div>
    </>
  );
}

export { ProjectsPage };
