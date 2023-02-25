import React, { useEffect } from "react";
import { Header } from "../../ui/DefaultHeader/Header";
import { CompanyStory } from "./components/CompanyStory";
import { ServicesList } from "./components/ServicesList";
import { Partners } from "./components/Partners";
import { TeamList } from "./components/TeamList";
import { useDatabase } from "../../store/DataProvider";
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { useParams } from 'react-router-dom';
const bodyScrollLock = require("body-scroll-lock");

function About() {

  const clear = bodyScrollLock.enableBodyScroll;
  const {id} = useParams();
  const { useCategory } = useDatabase();
  const pageText = useCategory("aboutUsPageText");
  let [state, changeState] = toggleModal(<Modal />);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    clear(About);
  }, [id])

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
        pageText &&
        pageText.map(item => {
          return <CompanyStory 
            key={item.id}
            {...item}
          />
        })
      }
      <ServicesList />
      <Partners />
      <TeamList />
    </>
  );
}

export { About };
