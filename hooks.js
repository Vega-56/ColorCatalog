import { useState, useEffect } from "react";
import { generate } from "shortid";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useColors = () => {
	const [colors, setColors] = useState([]);
	// Uses asyncstorage to store/grab color data on phone
	const loadColors = async () => {
		const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
		// Check if any colordata already exists, then loads if it does
		if (colorData) {
			const colors = JSON.parse(colorData);
			setColors(colors);
		}
	};

	// Initially load data
	useEffect(() => {
		if (colors.length) return;
		loadColors();
	}, []);

	// Save Colors
	useEffect(() => {
		AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
	}, [colors]);

	// Contains functionality to create new list of colors + add to list
	const addColor = (color) => {
		const newColor = { id: generate(), color };
		setColors([newColor, ...colors]);
	};
	return { colors, addColor };
};
