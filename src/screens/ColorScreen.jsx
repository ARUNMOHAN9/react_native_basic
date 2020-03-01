import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, FlatList } from "react-native";


const ColorScreen = () => {
    const [colors, setColor] = useState([]);
    return (
        <>
            <Button title='Add a color' onPress={() => setColor([...colors, generateRandomRgb()])} />
            <FlatList 
            keyExtractor={(item) => item} 
            data={colors} 
            renderItem={({item}) => <View style={{ height: 100, width: 100, backgroundColor: item }}></View>}></FlatList>
        </>
    );
}

const generateRandomRgb = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    return `rgb(${R}, ${G}, ${B})`;
}

export default ColorScreen;