import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class-based component function
class AlbumList extends Component {
    // class level property
    // only class based components have states
    state = { albums: [] };

    // function for asynch data fetch
    componentDidMount() {
        // fetching data from api link in JSON
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => this.setState({ albums: responseData }))
        }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key = {album.title} album = { album } />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

// Styling the component
const styles = {
    
};

export default AlbumList;