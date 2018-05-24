import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.card}>
				<Image
					style={{ flex: 1 }}
					source={{ uri: fbImage }}
				/>
				<View style={{ margin: 20 }}>
					<Text style={{ fontSize: 20 }}>Candice, 28</Text>
					<Text style={{ fontSize: 15, color: 'darkgrey' }}>Supermodel</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		overflow: 'hidden',
		margin: 10,
		marginTop: 100,
		marginBottom: 100,
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 8,
	},
});
