import React, { useEffect } from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { Contacts } from "./components/Contacts";
import { useDatabase } from "../../store/DataProvider";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { useParams } from 'react-router-dom';
const bodyScrollLock = require("body-scroll-lock");

function MainPage() {

  const {id} = useParams();
  const { useCategory } = useDatabase();
  const text = useCategory("aboutUsText");
  let [state, changeState] = toggleModal(<Modal />);
  const clear = bodyScrollLock.enableBodyScroll;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    clear(MainPage);
  }, [id]);

  return (
    <>
      <Modal 
				isOpen={state}
				onClose={changeState}
			/>
      <Header
        pad={true}
        onOpen={changeState} 
      />
      {
        text &&
        text.map((item, i) => {
          return <AboutCompany 
          key={i}
          {...item}
          showMore={true}
        />
        })
      }
      {
        <ProjectsList />
      }
      <Contacts />
    </>
  );
}

export { MainPage };
