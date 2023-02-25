import React, { useEffect } from "react";
import styles from "./ScienceItem.module.scss";
import { Header } from "../../ui/DefaultHeader/Header";
import { useDatabase } from '../../store/DataProvider';
import { useParams } from 'react-router-dom';
import { ProjectLayout } from "../Project/components/ProjectLayout";
import { Modal } from "../../ui/Modal";
import { toggleModal } from "../../hooks/toggleModal";
import { useNavigate } from "react-router-dom";

const ScienceItem = () => {
const navigate = useNavigate();

  const { useCategory } = useDatabase();
  const science = useCategory("science");
  const {id} = useParams();
  let [state, changeState] = toggleModal(<Modal />);
    const next = (id) => {
        let folder = "projects"
        if (id >= 24) {
            folder = "concepts"
        }
        let idef = String(Number(id) + Number(1))
        science.map(item => {
            if (String(item.id) === idef) {
                navigate(`/${folder}/${idef}`)
            }
        })
    };

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id]);

  console.log(11)
    console.log(science)
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
        science &&
        science.map(item => {
          return item.id == id
            ? <ProjectLayout
              key={item.id}
              main={science}
              next={next}
              projects={science}
              {...item}
            />
            : null
        })
      }
    </div>
  )
}

export { ScienceItem };