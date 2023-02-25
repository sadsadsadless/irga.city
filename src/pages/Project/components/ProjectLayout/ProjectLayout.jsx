import React from 'react';
import { TitleWithParagraph } from '../../../../ui/TitleWithParagraph';
import { Authors } from '../Authors';
import { InfoElement } from '../InfoElement/InfoElement';
import { NextProject } from '../NextProject';
import styles from "./ProjectLayout.module.scss";

const ProjectLayout = ({
  id,
  title,
  category,
  img,
  type,
  year,
  status,
  square,
  idea,
  country,
  client,
  address,
  secondImage,
  thirdImage,
  size,
  authors,
  architectors,
  main,
  next = f => f,
  projects
}) => {

    let data = null;

    main.map(item => {
      if (id=== main.length) {
        return data = main[0];
      } else if (item.id=== id+ 1) {
        return data = item;
      }
    });

  let nextid = String(Number(id) + Number(1))


  let nextprojtitle = NaN
  let nextprojimg = NaN
      for (var i = 0; i < projects.length; i++) {
          if (projects[i].id == nextid) {
              nextprojtitle = projects[i].title
              nextprojimg = projects[i].img
          }
      }

  let nextdiv = <NextProject
      id={id}
      total={main.length}
      next={next}
      img={nextprojimg}
      title={nextprojtitle}
  />
      if (id == 23){
        nextdiv = null
      }
      if (id == 32){
        nextdiv = null
      }

  return (
    <div
      className={styles.container}
    >
      <h2 className={styles.title}>
        { title }
      </h2>
      <img 
        className={styles.img}
        src={img}
        alt="main-img" 
      />
      <div>
        {idea && <TitleWithParagraph
          title={id >= 50 ? "Идея концепции" : "Идея проекта"}
          subtitle={idea}
        />}
        {authors 
          ? <Authors
            authors={authors}
            architectors={architectors}

          />
          : null
        }
      </div>
      <div className={styles.block}>
        <img 
          className={styles.scdimg}
          src={secondImage ? secondImage : img}
          alt="sub-img" 
        />

        <div className={styles.infoList}>
          {type && <InfoElement 
            text={"Тип застройки"}
            title={type}
          />}
          {country && <InfoElement 
            text={"Страна"}
            title={country}
          />}
          {size && <InfoElement 
            text={"Вместимость"}
            title={size}
          />}
          {address && <InfoElement 
            text={"Город"}
            title={address}
          />}
          {square && <InfoElement 
            text={"Площадь"}
            title={square}
          />}
          {status && <InfoElement 
            text={"Статус"}
            title={status}
          />}
          {year && <InfoElement 
            text={"Год"}
            title={year}
          />}
          {client && <InfoElement 
            text={"Заказчик"}
            title={client}
          />}
        </div>
      </div>
      <div>
        {nextdiv}
      </div>
    </div>
  )
};

/* {
        data
          ? <NextProject
          id={id}
          total={main.length}
          next={next}
          {...data}
          />
          : null
      } */
// id
// ? <NextProject
// id={id}
// next={next}
// total={main.length}
// title={title}
// img={img}
// />
// : null

export { ProjectLayout };