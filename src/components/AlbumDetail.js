import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './cardLayout/Card';
import CardSection from './cardLayout/CardSection';
import Button from './Button';

// functional component that shows the details of the albums in card view
const AlbumDetail = ({ album }) => {

    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url,
     } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle,
     } = styles;

    return (
        <Card>
            <CardSection>
                <View style = { thumbnailContainerStyle } >
                    <Image 
                        style = { thumbnailStyle }
                        source = { { uri: thumbnail_image } }
                    />
                </View>

                <View style = { headerContentStyle } >
                    <Text style = { headerTextStyle } > { title } </Text>
                    <Text> { artist } </Text>
                </View>
            </CardSection>
            <CardSection>
                    <Image
                    style = { imageStyle } 
                    source = {{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress = { () => Linking.openURL(url) }>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 350,
        flex: 1,
        width: null,
    },
};

export default AlbumDetail;