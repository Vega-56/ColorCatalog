import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "color";
export default function ColorDetails({ route }) {
	const { color: colorname } = route.params;
	const color = Color(colorname);
	const textColor = { fontSize: 30, color: color.negate().toString() };
	return (
		<View style={[styles.container, { backgroundColor: colorname }]}>
			<Text style={textColor}>{colorname}</Text>
			<Text style={textColor}>{color.rgb().toString()}</Text>
			<Text style={textColor}>{color.hsl().toString()}</Text>
			<Text style={textColor}>{color.luminosity()}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});
