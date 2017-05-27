import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const { thumbnailStyle, headerContentStyle, bigImageStyle, imageStyle, textStyle } = styles;
	return (
		<Card>
			<CardSection>
				<View style={imageStyle}>
					<Image 
						style={thumbnailStyle} 
						source={{ uri:thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={textStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					style={bigImageStyle} source={{ uri: image }} />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column', 
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	bigImageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	imageStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	textStyle: {
		fontSize: 18
	}
};

export default AlbumDetail;
