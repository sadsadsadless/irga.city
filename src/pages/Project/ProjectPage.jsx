import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toggleModal } from "../../hooks/toggleModal";
import { Modal } from "../../ui/Modal";
import { Header } from '../../ui/DefaultHeader/Header';
import { ProjectLayout } from './components/ProjectLayout';
import { useDatabase } from '../../store/DataProvider';
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {

  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);
  const { useCategory } = useDatabase();
  const projects = useCategory("projects");
  const navigate = useNavigate();

  let main = null;

  if (projects) {
    main = projects.filter(item => item.id);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  const next = (id) => {
      let folder = "projects"
        if (id >= 24) {
            folder = "concepts"
        }
      let idef = String(Number(id) + Number(1))
      projects.map(item => {
        if (String(item.id) === idef) {
          navigate(`/${folder}/${idef}`)
        }
      })
  };


  return (
    <div>
      <Modal 
        onClose={changeState}
        isOpen={state}
      />
      <Header 
        onOpen={changeState} 
      />
      {
        projects &&
        projects.map(item => {
          return item.id == id
            ? <ProjectLayout 
              key={item.id}
              {...item}
              main={projects}
              next={next}
              projects={projects}
            />
            : null
        })
      }
    </div>
  );
};

export { ProjectPage };