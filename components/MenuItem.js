import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class MenuItem extends React.Component {
    render() {
        return (
            <View style={StyleSheet.menuItem}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: 40,
        height: 50,
    },
    image: {
        width: 105,
        height: 85,
        opacity: 0.7,
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: 15,
        marginEnd: 8,
        marginStart: 7,
        resizeMode: 'contain'
    }
});