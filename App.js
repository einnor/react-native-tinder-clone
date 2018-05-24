import React from 'react';
import { StyleSheet, Text, View, Image, PanResponder, Animated } from 'react-native';

const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500'

export default class App extends React.Component {
	componentWillMount() {
		this.pan = new Animated.ValueXY();
		this.cardPanResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([
				null,
				{ dx: this.pan.x, dy: this.pan.y },
			]),
			onPanResponderRelease: (e, getsure) => {},
		});;
	}
	render() {
		const animatedStyle = {
			transform: [
				{ translateX: this.pan.x },
				{ translateY: this.pan.y }
			],
		};
		return (
			<Animated.View
				{...this.cardPanResponder.panHandlers}
				style={[styles.card, animatedStyle]}
			>
				<Image
					style={{ flex: 1 }}
					source={{ uri: fbImage }}
				/>
				<View style={{ margin: 20 }}>
					<Text style={{ fontSize: 20 }}>Candice, 28</Text>
					<Text style={{ fontSize: 15, color: 'darkgrey' }}>Supermodel</Text>
				</View>
			</Animated.View>
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
