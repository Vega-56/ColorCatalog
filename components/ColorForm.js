import React, {useState, useRef} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

// saving val of input in states, therefeore known as controlled input component
export default function ColorForm({onNewColor=f=> f}) {
  const [inputValue, setValue] = useState("");
  const input = useRef();
  console.log(" --> ", inputValue)
	return (
		<View style={styles.container}>
			<TextInput style={styles.txtInput} 
      ref={input}
      autoCapitalize="none"
      value={inputValue}
      onChangeText={setValue}
      placeholder="enter a color..." />
			<Button title="add" onPress={() => {
        input.current.blur();
        onNewColor(inputValue)
        setValue("");
      }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flexDirection: "row",
		alignItems: "center",
	},
	txtInput: {
		flex: 1,
		borderWidth: 7,
		fontSize: 20,
		margin: 5,
		borderRadius: 5,
		padding: 5,
	},
});
