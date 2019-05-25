import React from 'react';
import { Text, View } from 'react-native';

// functional component  for card seciton that is reusable
const CardSection = (props) => {

    return (
        <View style = { styles.containerStyle }>
            { props.children }
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        borderColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        shadowColor: '#ddd',
        position: 'relative',
    }
};

export default CardSection;