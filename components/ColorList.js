import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ColorButton from "./ColorButton";
import { generate } from "shortid";
import ColorForm from "./ColorForm";

import { useColors } from "../hooks";
// Making a hook like this helps separate logic from presentaiton
// also helps it be more reusable for other components

export default function ColorList({ navigation }) {
	const [backgroundColor, setBackgroundColor] = useState("blue");
	const { colors, addColor } = useColors();
	return (
		<>
			<ColorForm onNewColor={addColor} />
			<FlatList
				style={[styles.container]}
				data={colors}
				renderItem={({ item }) => {
					return (
						<ColorButton
							key={item.id}
							backgroundColor={item.color}
							onPress={() => navigation.navigate("Details", {color: item.color})}
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
