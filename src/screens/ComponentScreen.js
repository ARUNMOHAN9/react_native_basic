import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentView = () => {
    const name = "Arun Mohan";
    return (
    <Text style={styles.textStyle}>Hello {name}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: { fontSize: 30}
});

export default ComponentView;