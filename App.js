import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.card}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 10,
		marginTop: 100,
		marginBottom: 100,
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 8,
	},
});
