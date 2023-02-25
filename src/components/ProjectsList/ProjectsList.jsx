import React from "react";
import { ProjectsNav } from "./ProjectsNav";
import styles from "./ProjectsList.module.scss";
import { useDatabase } from "../../store/DataProvider";
import { Project } from "./Project";

const ProjectsList = ({
  main = true,
  route = "",
}) => {

  const { useCategory } = useDatabase();
  const projects = useCategory("projects");

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h2>Проекты</h2>
        <div className={styles.miniHead}>
          <p className={styles.p}>
            В своей работе архитекторы используют технологии информационного моделирования (BIM)
          </p>
          <ProjectsNav />
        </div>
      </div>
      <div className={styles.projects}>
        {
            projects &&
          projects.sort((a, b) => a.id - b.id).map(item => {
            if (main) {
              if (item.id > 6) return null;
              return <Project
                key={item.id}
                {...item}
                main={true}
                route={route}
              />
            } else {
              return <Project
              key={item.id}
              {...item}
              route={route}
            />
            }
          })
				}
      </div>
    </div>
  );
};

export { ProjectsList };
