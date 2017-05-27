import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// class based component
export default class AlbumList extends Component {
	state = {
		albums: []
	};;

	componentWillMount() {
		// async, so it returns a promise
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title}
						 album={album} 
						 />
		);
	}

	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}
