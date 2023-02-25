import React from "react";
import styles from "./Contacts.module.scss";
import { useDatabase } from "../../../../store/DataProvider";
import {GeolocationControl, Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

function Contacts() {

	const { useCategory } = useDatabase();
	const text = useCategory("contactsText");
    const defaultState = {
        center: [55.771363, 37.614635],
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"],
    };
  return (
    <div className={styles.main}>
      <h2>Контакты</h2>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          {text && text.map(item => {
    		return (
                <p className={styles.text} key={item.id}> {item.text}</p>
               );
            })
          }
        </div>
            <YMaps>
                <Map defaultState={defaultState}
                     style={{ width: '100%', height: '100%' }}
                     modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <GeolocationControl options={{ float: "left" }} />
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        geometry={[55.771363, 37.614635]}
                        properties={{
                            balloonContentHeader: "ИРГА",
                            balloonContentBody: "Институт развития городской агломерации. ИРГА",
                            balloonContentFooter: "Контакты +7 (909) 970-50-70 info@irga.city"
                        }}
                        preset={["islands#redDotIcon"]}
                    />
                </Map>
            </YMaps>
      </div>
    </div>
  );
}

export { Contacts };
