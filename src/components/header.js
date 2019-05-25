import React from 'react';
import { Text, View } from 'react-native';

// component function
const Header = (props) => {

    // registering styles for the component
    // destructuring components to ensure duplication doesn't happen
    const { textStyle, viewStyle } = styles;

    return (
        <View style = {viewStyle} >
            <Text style = {textStyle} > { props.headerText } </Text>
        </View>
    );
};

// Styling the component
const styles = {
    viewStyle: {
        backgroundColor: '#d7dae0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
    },
    textStyle: {
        fontSize: 20
    },
};

export default Header;