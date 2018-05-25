import React from 'react';
import { StyleSheet, Text, View, Image, PanResponder, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const fbImage = 'https://graph.facebook.com/259389830744794/picture?height=500'

export default class Card extends React.Component {
	componentWillMount() {
		this.pan = new Animated.ValueXY();
		this.cardPanResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([
				null,
				{ dx: this.pan.x, dy: this.pan.y },
			]),
			onPanResponderRelease: (e, { dx }) => {
				const absDx = Math.abs(dx);
				const direction = absDx / dx;
				if (absDx > 120) {
					Animated.decay(this.pan, {
						velocity: { x: 3 * direction, y: 0 },
						deceleration: 0.995,
					}).start();
				} else {

				}
				Animated.spring(this.pan, {
					toValue: { x: 0, y: 0 },
					friction: 4.5,
				}).start();
			},
		});;
	}
	render() {
		const rotateCard = this.pan.x.interpolate({
			inputRange: [-200, 0, 200],
			outputRange: ['-10deg', '0deg', '10deg'],
		});
		const animatedStyle = {
			transform: [
				{ translateX: this.pan.x },
				{ translateY: this.pan.y },
				{ rotate: rotateCard },
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
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    top: (height * 0.3) / 2,
		overflow: 'hidden',
		margin: 10,
		borderWidth: 1,
		borderColor: 'lightgrey',
		borderRadius: 8,
	},
});
