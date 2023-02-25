import React, { useState, useEffect, useContext, createContext, useLayoutEffect } from "react";
import { ref, onValue } from "firebase/database";
import { useFirebase } from "./firebase";

const DataContext = createContext();
export const useDatabase = () => useContext(DataContext);

const db = useFirebase();

function DataProvider({ children }) {

  const [data, setData] = useState();

	useLayoutEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			setData(Object.values(data));
		})
	}, [])
	
	const useCategory = (cat) => {
		const [category, setCategory] = useState();
		useLayoutEffect(() => {
			onValue(ref(db, cat), (snapshot) => {
				const data = snapshot.val();
				setCategory(Object.values(data));
			})
		}, []) 
		return category;
	};

	return (
		<DataContext.Provider value={{ data, useCategory}} >
			{ children }
		</DataContext.Provider>
	)
}

export { DataProvider };