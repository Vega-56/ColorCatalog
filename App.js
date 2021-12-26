import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ColorButton from "./components/ColorButton";
import { generate } from "shortid";
import ColorForm from "./components/ColorForm";

// Making a hook like this helps separate logic from presentaiton
// also helps it be more reusable for other components
const useColors = () => {
	const [colors, setColors] = useState([]);
	// Contains functionality to create new list of colors + add to list
	const addColor = color => {
		const newColor = { id: generate(), color};
		setColors([newColor, ...colors])
	};
	return {colors, addColor};
}
export default function App() {
	const [backgroundColor, setBackgroundColor] = useState("blue");
	const {colors, addColor} = useColors();
	return (
		<>
			<ColorForm onNewColor={addColor}/>
			<FlatList
				style={[styles.container, { backgroundColor }]}
				data={colors}
				renderItem={({ item }) => {
					return (
						<ColorButton
							key={item.id}
							backgroundColor={item.color}
							onPress={setBackgroundColor}
						/>
					);
				}}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
	},
});
