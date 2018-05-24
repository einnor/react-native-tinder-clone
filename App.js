import React from 'react';
import { View } from 'react-native';
import Card from './Card';

export default class App extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Card />
				<Card />
			</View>
		);
	}
}
